<?php
require 'php-excel.class.php';
require 'dbConnection.php';

$sql = $db->prepare("SELECT * FROM symposion WHERE flag=0");




$sql->execute();
$i = 1001;
$data[] = ["Sıra","Ad", "Soyad", "Üniversite", "Bölüm"];

while($row=$sql->fetch(PDO::FETCH_ASSOC)) {
	$data[] = [$i, $row["name"], $row["surname"], $row["university"], $row["section"] ];
	$i++;
}

$xls = new Excel_XML;
$xls->addWorksheet('Katilimcilar', $data);
$xls->sendWorkbook('katilimcilar.xls');
?>