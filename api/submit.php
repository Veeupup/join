<?php
/**
 * Created by PhpStorm.
 * User: Cantjie
 * Date: 2017-8-21
 * Time: 11:52
 */

//读取配置文件
require 'config.php';
//套用现成代码，获取ip，不合法返回false
/**
 * @param bool $advance 如果真，返回HTTP_X_FORWARDED_FOR首个IP -> HTTP_CLIENT_IP -> REMOTE_ADDR
 * 如果假，返回 REMOTE_ADDR
 * @return false|ip
 */
function get_client_ip($advance = false){
    if($advance){
        if(isset($_SERVER['HTTP_X_REAL_IP'])){
            $ip = $_SERVER['HTTP_X_REAL_IP'];
        }elseif(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
            $arr = explode(',',$_SERVER['HTTP_X_FORWARDED_FOR']);
            $pos = array_search('unknown',$arr);
            if(false !== $pos){
                unset($arr[$pos]);//unset：销毁指定的变量
            }
            $ip = trim($arr[0]);
        }elseif(isset($_SERVER['HTTP_CLIENT_IP'])){
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        }elseif(isset($_SERVER['REMOTE_ADDR'])){
            $ip = $_SERVER['REMOTE_ADDR'];
        }
    }elseif(isset($_SERVER['REMOTE_ADDR'])){
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return ip2long($ip) ? $ip : false;
}

//获取ip
if(!$client_ip = get_client_ip(true)){ //这种赋值语句返回等号右边的值
    exit('-1');
}

//读取防刷记录文件
if(file_exists(IP_FILE)){
    $ip = require IP_FILE;
}else {
    $ip = array();
}

//判断是否已存在
if(isset($ip[$client_ip])){
    //同一ip提交达到15次就退出
    if($ip[$client_ip]>=15){
        exit('-2');
    }
    ++$ip[$client_ip];
}else{
    $ip[$client_ip] = 1;
}

//写入防刷记录文件，即IP_FILE
file_put_contents(IP_FILE,'<?php return '.var_export($ip,true).';');

/**
 * @param $name string 对应index.html里面的name，
 * @param $type string 'd'或's'，d表示int，s表示string
 * @param $filter callable|string 过滤函数 或者过滤的正则匹配式
 * 如果是过滤函数，应该有两个参数，$data和$code
 * @param $code string 错误返回值
 * @return mixed $code|string|int
 */
function I($name, $type, $filter,$code='0'){
    if (!isset($_REQUEST[$name])){
        exit($code);
    }
    $data = $_REQUEST[$name];
    if(!is_string($data)){
        exit($code);
    }
    if(is_callable($filter)){
        return $filter($data,$code);
    } elseif (is_string($filter) && 1 !== preg_match($filter,(string)$data)){
        exit($code);
    }
    switch ($type){
        case 'd':
            return (int)$data;
        case 's':
            return (string)$data;
    }
}

//验证输入数据
//name姓名：1-20个utf-8字符
//gender性别：0女、1男
//data出生日期：YYYY-mm-dd,出生年份必须在1987-2007之间，且日期必须真实存在
//home籍贯：0-40个UTF-8字符
//college书院：0彭康、1仲英、2南洋、3文治、4崇实、5宗濂、6励志、7启德、8钱学森
//class专业班级：1-20个UTF-8字符
//tel手机：号段130……太长了，看代码吧，
//qqQQ号：5-11位数字，首位不为0
//mail邮箱：filter_var->checkdnsrr 2017年虽然秦取消了邮箱功能，这个扩展依然保留
//first第一志愿：         1新闻媒体部、2影视部、3市场部、4公关部、5产品组、6app组、7web前端组、8web后端组、9设计组
//second第二志愿：0(未选)、1新闻媒体部、2影视部、3市场部、4公关部、5产品组、6app组、7web前端组、8web后端组、9设计组，第二志愿必须与第一志愿不同
//third第三志愿：0(未选)、1新闻媒体部、2影视部、3市场部、4公关部、5产品组、6app组、7web前端组、8web后端组、9设计组，第三志愿与第一志愿必须不同，二三志愿可以同时为0
//method了解途径：0各类新生群，1e曈线下宣传，2，熟人介绍推荐，3，其他
//个人陈述：0-255个UTF-8字符
//为了免去前端验证，特将每一个验证不通过的代码都单独列出来
//0：在本不该出错的地方出错了，如name，gender,home,college,class，-1：获取ip失败，-2统一ip多次提交
//-3：生日出错，-4：手机号出错，-5：QQ出错，-6：邮箱出错,-7:部门选择出错

/**
 * 原来本不是一个单独的函数，单独拿出来，我感觉看着舒服些，
 * 对日期的验证，但其实如果前端做的正常的话，这步没有问题的
 * @param $data string
 * @param $code string 错误时返回的错误代码
 * @return mixed int|string 错误返回$code，正确返回日期
 */
function data_filter($data,$code){
    if(!is_string($data)){
        exit($code);
    }
    if(1 !== preg_match('/^(\d{4})-(\d{1,2})-(\d{1,2})$/',$data,$matches)){
        exit($code);
    }
    $year = (int) $matches[1];
    if($year<1987||$year>2007){
        exit($code);
    }
    if(!checkdate((int)$matches[2],(int)$matches[3],$year)){//验证一个格里高利日期M-D-Y
        exit($code);
    }
    return $data;
};

function mail_filter($mail,$code){
    if(!is_string($mail)){
        exit($code);
    }
    if(!filter_var($mail,FILTER_VALIDATE_EMAIL)){
        //filter_var就是使用指定的过滤器过滤变量，
        //不过好奇的是前面的IP用ip2long，而不用FILTER_VALIDATE_IP，待尝试看看
        exit($code);
    }
    $host = explode('@',$mail);
    $host = $host[count($host)-1];
    if(!checkdnsrr($host,'MX')){
        //这步就很高级了，给指定的主机（域名）或者IP地址做DNS通信检查
        //这里不知道为什么用MX，但是手册里的例程全是MX
        exit($code);
    }
    return $mail;
}
$name = I('name','s','/^.{1,20}$/u');
$gender = I('gender','d','/^[01]$/');
$date = I('date','s','data_filter','-3');
$class = I('class','s','/^.{1,20}$/u');
//$home = I('home','s','/^.{0,40}$/u');
$college = I('college','d','/^[0-8]$/');
$tel = I('tel','s','/^(1((3\d)|(4[579])|(5[012356789])|(7[01235678])|(8\d))\d{8})$/','-4');
$qq = I('qq','s','/^[1-9]\d{4,10}/','-5');
//$mail = I('mail','s','mail_filter','-6');
$first = I('first','d','/^[1-9]$/');
$second = I('second','d','/^[0-9]$/');
$third = I('third','d','/^[0-9]$/');

if($first === $second || $first === $third ){
    exit('-7');
}
if($first === $second && (string)$second !== '0'){//$second应该是个string吧，不确定，加上string
    exit('-7');
}
$method = I('method','d','/^[0-3]$/');
$info = I('info','s','/^.{0,255}$/u');

//value -> 名称转换
$gender = $GENDER[$gender];
$college = $COLLEGE[$college];
$first = $GROUP[$first];
$second = $GROUP[$second];
$third = $GROUP[$third];
$method = $METHOD[$method];
$time = date('Y-m-d H:i:s');

//这部分我不懂，全部复制下来了，里面对应的参数还是2016年的，没有改
// 发给远程服务器
// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, 'http://webgroup.eeyes.xyz/join/submit.php');
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($ch, CURLOPT_HEADER, false);
// curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array(
// 'timestamp' => $time,
// 'ip' => $client_ip,
// 'ip_location' => '',
// 'name' => $name,
// 'gender' => $gender,
// 'date' => $date,
// 'home' => $home,
// 'college' => $college,
// 'class' => $class,
// 'tel' => $tel,
// 'qq' => $qq,
// 'mail' => $mail,
// 'first' => $first,
// 'second' => $second,
// 'info' => $info,
// )));
// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_TIMEOUT, 60);
// $response = curl_exec($ch);
// curl_close($ch);
// if ('1' !== $response) {
// exit('-4');
// }

//接下来的各种错误：统称一下就好了-8，
/**
 * @param $ip 通过IP获取地址
 * @return string
 */
function get_location_by_ip($ip){
    $html = file_get_contents('http://ip.lockview.cn/ShowIP.aspx?ip='.$ip);
    if (1 === preg_match('/<table.*?><tr><td>.*?<\\/td><td>.*?<\\/td><td>(.*?)<\\/td><\\/tr><\\/table>/', $html, $matches)) {
        return $matches[1];
    }
    return '';
}
$location = get_location_by_ip($client_ip);

class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open(DB_FILE);
    }
}

if(!file_exists(DB_FILE)) {
    $db = new MyDB();
    $db->exec("CREATE TABLE IF NOT EXISTS ".DB_TABLE." (submit_time STRING,ip STRING,location STRING,`name` STRING, gender STRING, `date` STRING,college STRING,class STRING, tel STRING,qq STRING,`first` STRING, `second` STRING, third STRING, method STRING, info STRING)");
    $db->close();
}
$db = new MyDB();
$query =" INSERT INTO ".DB_TABLE." VALUES ('{$time}','{$client_ip}','{$location}','{$name}','{$gender}','{$date}','{$college}','{$class}','{$tel}','{$qq}','{$first}','{$second}','{$third}','{$method}','{$info}')";
$db->exec($query);
$db->close();
if(isset($MAIL_SERVER)){
    //原本取消，但是还是想写，怎么办，用QQ邮箱吧。
    $maskedname = trim($name).' 同学';
    //加载PHPMailer库
    require 'PHPMailer/class.phpmailer.php';
    require 'PHPMailer/class.smtp.php';
    $phpmailer = new PHPMailer;
    $phpmailer->CharSet = 'utf-8';
    //邮件服务器设置
    $phpmailer->Host = $MAIL_SERVER['Host'];
    $phpmailer->Port = $MAIL_SERVER['Port'];
    $phpmailer->isSMTP();
    $phpmailer->SMTPSecure = 'ssl';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Username = $MAIL_SERVER['Username'];
    $phpmailer->Password = $MAIL_SERVER['Password'];
    //邮件设置
    $phpmailer->setFrom($phpmailer->Username,'西安交通大学e曈网');
    $phpmailer->addAddress($qq.'@qq.com',$maskedname);
    $phpmailer->isHTML();
    //邮件内容
    //这里Body和AltBody就不是很懂
    $phpmailer->Subject = 'e曈网招新报名反馈';
    $phpmailer->Body = '<h1>'.htmlspecialchars($maskedname).'：</h1><p>你好，</p><p>小瞳已经收到您的报名申请，</p><p>经过审核后将以邮件和短信形式通知答辩地点</p>';
    $phpmailer->AltBody = $maskedname.'：你好，小瞳已经收到您的报名申请，经过审核后将以邮件和短信形式通知答辩地点';
    //发送邮件
    if(!$phpmailer->send()){
//        数据提交成功，发送邮件失败，什么都不做好了，
//        exit('-9');
    }
}
//提交成功
exit('1');