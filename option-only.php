<?php

use JetBrains\PhpStorm\ArrayShape;

include 'connect.php';

// var_dump($_POST);
$ID_FK_Categoria = $_POST['ID_FK_Categoria'];

$query = "SELECT Opcion.*, Categoria.nombreCategoria FROM Opcion INNER JOIN Categoria ON Opcion.ID_FK_Categoria = Categoria.ID_Categoria WHERE ID_FK_Categoria = '$ID_FK_Categoria';";

$reg = $conn->prepare($query);
$reg->execute();
$result = $reg->fetchAll(PDO::FETCH_ASSOC);

if (!empty($result)) {
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(array("nombreOpcion" => "empty"));
}



