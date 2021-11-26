<?php

use JetBrains\PhpStorm\ArrayShape;

include 'connect.php';

// var_dump($_POST);
$tipo = $_POST['tipo_id_riesgo'];
$proceso = $_POST['proceso_id_riesgo'];
$objetivo = $_POST['objetivo_id_riesgo'];
$actividad_critica = $_POST['actividad_critica_id_Riesgo'];
$sistema_asociado = $_POST['sistema_asociado_id_riesgo'];
$variable = $_POST['variable_id_riesgo'];
$factor_riesgo = $_POST['factor_id_riesgo'];
$riesgo = $_POST['riesgo_id_riesgo'];
$descripcion = $_POST['descripcion_id_riesgo'];
$causa_raiz = $_POST['causa_raiz_id_riesgo'];
$consecuencias = $_POST['consecuencias_id_riesgo'];

$query = "INSERT INTO IdentificacionRiesgo(tipo, proceso, objetivo, actividadCritica, sistemaAsociado, variable, factorRiesgo, riesgo, descripcion, causaRaiz, consecuencias) VALUES (?,?,?,?,?,?,?,?,?,?,?);";

$reg = $conn->prepare($query);
$reg->execute(array($tipo, $proceso, $objetivo, $actividad_critica, $sistema_asociado, $variable, $factor_riesgo, $riesgo, $descripcion, $causa_raiz, $consecuencias));
// $result = $reg->fetchAll(PDO::FETCH_ASSOC);

// if (!empty($result)) {
//     echo json_encode($result, JSON_UNESCAPED_UNICODE);
// } else {
//     echo json_encode(array("nombreOpcion" => "empty"));
// }



