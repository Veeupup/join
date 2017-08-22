<?php
require 'config.php';
if (isset($_POST['password']) && $_POST['password'] == PASSWORD) {
	header('Content-Type: application/octet-stream');
	header('Content-Disposition: attachment; filename=' . DATA_FILE);
	readfile(DATA_FILE);
} else {
	echo '<form action="' . basename(__FILE__) . '" method="post">password:<input name="password"><input type="submit"></form>';
}