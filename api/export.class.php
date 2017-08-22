<?php
/**
 * Created by PhpStorm.
 * User: Cantjie
 * Date: 2017-8-21
 * Time: 12:28
 */
//require 'config.php';
//if(isset($_REQUEST['PASSWARD'])){
//    if($_REQUEST['PASSWARD']!==PASSWORD){
//        exit('密码错误');
//    } else{
//
//    }
//}
require 'config.php';
class export{

    protected $data = null;
    protected $db = null;
    public function __construct()
    {
        $this->db = new SQLite3(DB_FILE);
    }

    public function getAllInfo()
    {
        $result = [];
        $query = "SELECT * FROM ".DB_TABLE;
        $results = $this->db->query($query);
        while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
            $result[]=$row;
        }
//        var_dump($result);
        return $result;
    }

    public function __destruct()
    {
        $this->db->close();
    }
}