<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'gestion_riesgo';
$utf8 = 'utf8';

try {
    $conn = new PDO("mysql:host=$servername; dbname=$dbname; charset=$utf8", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // echo "Connected successfully";
} catch (PDOException $error) {
    echo "Connection failed: " . $error->getMessage();
}


?>