<?php
// 默认时区设置
date_default_timezone_set('Asia/Shanghai');
// CSV文件名设置，最好设置成别人猜不到的名字
define('DATA_FILE', '2017_JOIN@eeyes.net.csv');
// 下载密码或在线浏览的密码
define('PASSWORD', 'meimiaowuyitong');
//前端接口密码
define('FRONTEND_PASSWORD','frontend');
// 防刷的记录文件
define('IP_FILE', 'ip.php');
//数据库文件设置
define('DB_FILE','2017_JOIN@eeyes.net.db');
define('DB_TABLE','join_info');
// 性别
$GENDER = array('女','男');
// 书院名
$COLLEGE = array('彭康','仲英','南洋','文治','崇实','宗濂','励志','启德','钱学森');
// 部门名
$GROUP = array('(空)','新闻媒体部','影视部','市场部','公关部','产品组','app组','web前端组','web后端组','设计组');
$GROUP_EN = array('web_front_end','web_back_end','app','designer','production','news','movie','market','public_relations');
//了解途径
$METHOD = array('各类新生群','e曈线下宣传','熟人宣传介绍','其他');
// 表头
$TABLE_HEADER = array('提交时间','IP','IP归属地','姓名','性别','出生日期','书院','专业班级','手机','QQ号','第一志愿','第二志愿','第三志愿','了解途径','个人陈述');
// 邮件服务器设置，全部注释掉代表不发送邮件
 $MAIL_SERVER = array(
     'Host'     => 'smtp.sina.com',
     'Port'     => 465,
     'Username' => 'join_eeyes@sina.com',
     'Password' => 'Meimiaowuyitong',
 );
