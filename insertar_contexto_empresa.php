<?php

use JetBrains\PhpStorm\ArrayShape;

include 'connect.php';

$origen_capital = $_POST['origenCapital'];
$dimension = $_POST['dimension'];
$objeto_social = $_POST['objetoSocial'];
$sector_economico = $_POST['sectorEconomico'];
$opcion_sector_eco = $_POST['opcionesSectorEco'];
$propietario = $_POST['propietarios'];
$tipo_persona = $_POST['tipoPersona'];
$tangible = $_POST['tangibles'];
$bienes = $_POST['bienes'];
$intangible    = $_POST['intangibles'];
$norma_tecnica = $_POST['normatecnica'];
$identificacion = $_POST['identificacion'];
$duracion = $_POST['duracion'];
$ctrc_microbiologicas = $_POST['caracteristicasmicrobiologicas'];
$restricciones = $_POST['restricciones'];
$empaque = $_POST['empaque'];
$destino_final = $_POST['destinofinal'];
$descripcion = $_POST['descripcion'];
$ctrc_fisicas = $_POST['caracteristicasfisicas'];
$forma_uso = $_POST['formasdeuso'];
$condicion_manejo = $_POST['condicionesdemanejo'];
$etiquetado = $_POST['etiquetado'];
$composicion = $_POST['composicion'];
$ctrc_quimica = $_POST['caracteristicasquimicas'];
$usuarios_potenciales = $_POST['usuariospotenciales'];
$condicion_conservacion = $_POST['condicionesdeconservacion'];
$presentacion = $_POST['presentacion'];
$logotipo = $_POST['logotipo'];
$marca = $_POST['marca'];
$eslogan = $_POST['eslogan'];
$analisis_competencia = $_POST['analisisdelacompetencia'];
$presupuesto_venta = $_POST['presupuestodeventas'];
$blog = $_POST['blog'];
$mercadolibre = $_POST['mercadolibre'];
$olx = $_POST['olx'];
$precio = $_POST['precio'];
$venta_directa = $_POST['ventadirecta'];
$facebook = $_POST['facebook'];
$amazon = $_POST['amazon'];
$promocion = $_POST['promocion'];
$web = $_POST['web'];
$instagram = $_POST['instagram'];
$e_bay = $_POST['e-bay'];
$servicio_cliente = $_POST['servicioalcliente'];
$fidelizacion_cliente = $_POST['fidelizaciondeclientes'];
$pqrsf = $_POST['pqrsf'];
$identificacion_cliente = $_POST['identificacionclientes'];

$query = "INSERT INTO contexto_empresa(
origen_capital,
dimension,
objeto_social,
sector_economico,
opcion_sector_eco,
propietario,
tipo_persona,
tangible,
bienes,
intangible,
norma_tecnica,
identificacion,
duracion,
ctrc_microbiologicas,
restricciones,
empaque,
destino_final,
descripcion,
ctrc_fisicas,
forma_uso,
condicion_manejo,
etiquetado,
composicion,
ctrc_quimica,
usuarios_potenciales,
condicion_conservacion,
presentacion,
logotipo,
marca,
eslogan,
analisis_competencia,
presupuesto_venta,
blog,
mercadolibre,
olx,
precio,
venta_directa,
facebook,
amazon,
promocion,
web,
instagram,
e_bay,
servicio_cliente,
fidelizacion_cliente,
pqrsf,
identificacion_cliente
) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

$reg = $conn->prepare($query);
$reg->execute(array(
    $origen_capital,
    $dimension,
    $objeto_social,
    $sector_economico,
    $opcion_sector_eco,
    $propietario,
    $tipo_persona,
    $tangible,
    $bienes,
    $intangible,
    $norma_tecnica,
    $identificacion,
    $duracion,
    $ctrc_microbiologicas,
    $restricciones,
    $empaque,
    $destino_final,
    $descripcion,
    $ctrc_fisicas,
    $forma_uso,
    $condicion_manejo,
    $etiquetado,
    $composicion,
    $ctrc_quimica,
    $usuarios_potenciales,
    $condicion_conservacion,
    $presentacion,
    $logotipo,
    $marca,
    $eslogan,
    $analisis_competencia,
    $presupuesto_venta,
    $blog,
    $mercadolibre,
    $olx,
    $precio,
    $venta_directa,
    $facebook,
    $amazon,
    $promocion,
    $web,
    $instagram,
    $e_bay,
    $servicio_cliente,
    $fidelizacion_cliente,
    $pqrsf,
    $identificacion_cliente
));

