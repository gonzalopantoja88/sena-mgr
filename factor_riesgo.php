<?php

include 'connect.php';

$query = "SELECT * FROM `FactorRiesgo`;";
$reg = $conn->prepare($query);
$reg->execute();

$result = $reg->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result, JSON_UNESCAPED_UNICODE);

// echo "<pre>";
// print_r($result);
// echo "</pre>";
