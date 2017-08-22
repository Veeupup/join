<?php
/**
 * Created by PhpStorm.
 * User: Cantjie
 * Date: 2017-8-20
 * Time: 10:07
 */

//想要实现网页转化率的计算，这里仅记录从主页进入到各个页面的点击次数
//【其实具体记录的是什么看前端确定

//require 'config.php';不知道为什么即使有这句话，下面GROUP_EN也会提示未定义

class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open(DB_FILE);
    }
}

/**
 * @param $page string 哪一页
 */
function click_stats($page){
    $db = new MyDB();
//    $db->open('click_count.db');
    $db->exec("UPDATE click_count SET times = times +1 WHERE page = '{$page}'");

    $db->close();
}

/**
 * 建立sqlite 数据库
 */
function build_db(){
    $db = new MyDB();
//    $db->open('click_count.db');
    $db->exec("CREATE TABLE IF NOT EXISTS click_count (page STRING, times int )");
    $GROUP_EN = array('web_front_end','web_back_end','app','designer','production','news','movie','market','public_relations');
    foreach ( $GROUP_EN as $group){
        $group = $group.'_brief';
        $query =" INSERT INTO click_count VALUES ('{$group}','0')";
        $db->exec($query);
    }
    foreach ($GROUP_EN as $group){
        $group = $group.'_details';
        $query =" INSERT INTO click_count VALUES ('{$group}','0')";
        $db->exec($query);
    }
    $db->close();
}

//build_db();
//if(isset($_REQUEST['page'])){
//    click_stats($_REQUEST['page']);
//}
//echo "<script>window.close();</script>";