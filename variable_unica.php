<?php

use JetBrains\PhpStorm\ArrayShape;

include 'connect.php';

// var_dump($_POST);
$nombreSistemaAsociado = $_POST['nombreSistemaAsociado'];

$query = "SELECT Variable.*, SistemaAsociado.nombreSistemaAsociado FROM Variable INNER JOIN SistemaAsociado ON Variable.ID_FK_SistemaAsociado = SistemaAsociado.ID_SistemaAsosiado WHERE nombreSistemaAsociado = '$nombreSistemaAsociado';";

$reg = $conn->prepare($query);
$reg->execute();
$result = $reg->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result, JSON_UNESCAPED_UNICODE);




