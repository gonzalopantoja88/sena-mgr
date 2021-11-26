<?php

use JetBrains\PhpStorm\ArrayShape;

include 'connect.php';

$origenCapital = $_POST['origenCapital'];
$dimension = $_POST['dimension'];
$objetoSocial = $_POST['objetoSocial'];
$sectorEconomico = $_POST['sectorEconomico'];
$opcionesSectorEco = $_POST['opcionesSectorEco'];
$propietarios = $_POST['propietarios'];
$tipoPersona = $_POST['tipoPersona'];
$tangibles = $_POST['tangibles'];
$bienes = $_POST['bienes'];
$intangibles = $_POST['intangibles'];
$identificacion = $_POST['identificacion'];
$duracion = $_POST['duracion'];
$caracteristicasmicrobiologicas = $_POST['caracteristicasmicrobiologicas'];
$restricciones = $_POST['restricciones'];
$empaque = $_POST['empaque'];
$destinofinal = $_POST['destinofinal'];
$descripcion = $_POST['descripcion'];
$caracteristicasfisicas = $_POST['caracteristicasfisicas'];
$formasdeuso = $_POST['formasdeuso'];
$condicionesdemanejo = $_POST['condicionesdemanejo'];
$etiquetado = $_POST['etiquetado'];
$composicion = $_POST['composicion'];
$caracteristicasquimicas = $_POST['caracteristicasquimicas'];
$usuariospotenciales = $_POST['usuariospotenciales'];
$condicionesdeconservacion = $_POST['condicionesdeconservacion'];
$presentacion = $_POST['presentacion'];
$logotipo = $_POST['logotipo'];
$marca = $_POST['marca'];
$eslogan = $_POST['eslogan'];
$normaTec = $_POST['normaTec'];
$analisisdelacompetencia = $_POST['analisisdelacompetencia'];
$presupuestodeventas = $_POST['presupuestodeventas'];
$blog = $_POST['blog'];
$mercadolibre = $_POST['mercadolibre'];
$olx = $_POST['olx'];
$precio = $_POST['precio'];
$ventadirecta = $_POST['ventadirecta'];
$facebook = $_POST['facebook'];
$amazon = $_POST['amazon'];
$promocion = $_POST['promocion'];
$web = $_POST['web'];
$instagram = $_POST['instagram'];
$e_bay = $_POST['e-bay'];
$servicioalcliente = $_POST['servicioalcliente'];
$fidelizaciondeclientes = $_POST['fidelizaciondeclientes'];
$pqrsf = $_POST['pqrsf'];
$identificacionclientes = $_POST['identificacionclientes'];

$query = "INSERT INTO contexto_empresa('origenCapital', 'dimension', 'objetoSocial', 'sectorEconomico', 'opcionesSectorEco', 'propietarios', 'tipoPersona', 'tangibles', 'bienes', 'intangibles', 'identificacion', 'duracion', 'caracteristicasmicrobiologicas', 'restricciones', 'empaque', 'destinofinal', 'descripcion', 'caracteristicasfisicas', 'formasdeuso', 'condicionesdemanejo', 'etiquetado', 'composicion', 'caracteristicasquimicas', 'usuariospotenciales', 'condicionesdeconservacion', 'presentacion', 'logotipo', 'marca', 'eslogan', 'normaTec', 'analisisdelacompetencia', 'presupuestodeventas', 'blog', 'mercadolibre', 'olx', 'precio', 'ventadirecta', 'facebook', 'amazon', 'promocion', 'web', 'instagram', 'e-bay', 'servicioalcliente', 'fidelizaciondeclientes', 'pqrsf', 'identificacionclientes') VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

$reg = $conn->prepare($query);
$reg->execute(array(
    $origenCapital,
    $dimension,
    $objetoSocial,
    $sectorEconomico,
    $opcionesSectorEco,
    $propietarios,
    $tipoPersona,
    $tangibles,
    $bienes,
    $intangibles,
    $identificacion,
    $duracion,
    $caracteristicasmicrobiologicas,
    $restricciones,
    $empaque,
    $destinofinal,
    $descripcion,
    $caracteristicasfisicas,
    $formasdeuso,
    $condicionesdemanejo,
    $etiquetado,
    $composicion,
    $caracteristicasquimica,
    $usuariospotenciales,
    $condicionesdeconservacion,
    $presentacion,
    $logotipo,
    $marca,
    $eslogan,
    $normaTec,
    $analisisdelacompetencia,
    $presupuestodeventas,
    $blog,
    $mercadolibre,
    $olx,
    $preci,
    $ventadirecta,
    $facebook,
    $amazon,
    $promocion,
    $web,
    $instagram,
    $e_bay,
    $servicioalcliente,
    $fidelizaciondeclientes,
    $pqrsf,
    $identificacionclientes,
));
