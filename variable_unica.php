<?php

use JetBrains\PhpStorm\ArrayShape;

include 'connect.php';

// var_dump($_POST);
$ID_FK_SistemaAsociado = $_POST['ID_FK_SistemaAsociado'];

$query = "SELECT Variable.*, SistemaAsociado.nombreSistemaAsociado FROM Variable INNER JOIN SistemaAsociado ON Variable.ID_FK_SistemaAsociado = SistemaAsociado.ID_SistemaAsosiado WHERE ID_FK_SistemaAsociado = '$ID_FK_SistemaAsociado';";

$reg = $conn->prepare($query);
$reg->execute();
$result = $reg->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($result, JSON_UNESCAPED_UNICODE);




