<?php
try{

$PDO = new PDO("mysql:host=localhost;dbname=base","root","");
$PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch (PDOExeption $e){
echo $e->getMessage();
}

?>

