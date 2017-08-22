<?php
//        @links https://stackoverflow.com/questions/4746079/how-to-create-a-html-table-from-a-php-array
require 'export.class.php';
$export = new export();
$result = $export->getAllInfo();
if(isset($_REQUEST['password'])){
    if($_REQUEST['password']==PASSWORD){

    }elseif($_REQUEST['password']==FRONTEND_PASSWORD) {
        return $result;
    }else{
        echo '<form action="' . basename(__FILE__) . '" method="post">password:<input name="password"><input type="submit"></form>';
        return 0;
    }
}else{
    echo '<form action="' . basename(__FILE__) . '" method="post">password:<input name="password"><input type="submit"></form>';
    return 0;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>e曈招新信息</title>
</head>
<body>
    <table border="2">
        <thead>
        <tr>
            <th><?php echo implode('</th><th>', array_keys(current($result))); ?></th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($result as $row): array_map('htmlentities', $row); ?>
            <tr>
                <td><?php echo implode('</td><td>', $row); ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>