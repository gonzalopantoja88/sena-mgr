-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 18, 2021 at 06:30 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_riesgo`
--

-- --------------------------------------------------------

--
-- Table structure for table `Categoria`
--

CREATE TABLE `Categoria` (
  `ID_Categoria` smallint(5) UNSIGNED NOT NULL,
  `nombreCategoria` varchar(100) DEFAULT NULL,
  `ID_FK_Despliegue` smallint(5) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Categoria`
--

INSERT INTO `Categoria` (`ID_Categoria`, `nombreCategoria`, `ID_FK_Despliegue`) VALUES
(1, 'Privada', 1),
(2, 'Publica', 1),
(3, 'Mixta', 1),
(4, 'Microempresa', 2),
(5, 'Pequeña', 2),
(6, 'Mediana', 2),
(7, 'Grande', 2),
(8, 'Con animo de lucro', 3),
(9, 'Sin animo de lucro', 3),
(10, 'Sector primario', 4),
(11, 'Sector secundario', 4),
(12, 'Sector terciario', 4),
(13, 'Cuaternario', 4),
(14, 'Sector quinario', 4),
(15, 'Personas naturales', 5),
(16, 'Personas jurídicas', 5),
(17, 'Bienes de consumo', 6),
(18, 'Bienes industriales', 6),
(19, 'Acción tangible orientado a las personas', 7),
(20, 'Acción tangible orientado a las cosas', 7),
(21, 'Acción intangible orientado a las personas', 7),
(22, 'Acción intangible orientado a las cosas', 7),
(45, 'Web', 41),
(46, 'blog', 41),
(47, 'Facebook', 41),
(48, 'Instagram', 41),
(49, 'Intermediario', 41),
(50, 'Estratégicos', 46),
(51, 'Misionales', 46),
(52, 'Apoyo/ soporte', 46),
(53, 'Mejora', 46),
(54, 'Nombre proceso', 47),
(55, 'Objetivo del proceso', 47),
(56, 'Responsable', 47),
(57, 'Alcance', 47),
(58, 'Tipo de proceso', 47),
(59, 'Entrada', 47),
(60, 'Proveedor', 47),
(61, 'Ciclo de la actividad', 47),
(62, 'Actividad', 47),
(63, 'Salida', 47),
(64, 'Cliente', 47),
(65, 'Requisitos legales/reglamentarios', 47),
(66, 'Documentos asociados', 47),
(67, 'Registros requeridos', 47),
(68, 'Medición  Seguimiento (Indicador)', 47),
(69, 'Riesgo asociado', 47),
(70, 'Recursos', 47),
(71, 'Contexto externo contexto interno', 51),
(72, 'Manual de funciones', 67),
(73, 'Perfil de cargos', 67),
(74, 'Estructura vertical', 67),
(75, 'Estructura Horizontal', 67),
(76, 'Redarquica', 67),
(77, 'Identificación del recurso', 71),
(78, 'Toma de conciencia', 71),
(79, 'Registros requeridos', 71),
(80, 'Plan de mantenimiento', 72),
(81, 'Identificación recursos de medición y seguimiento', 74),
(82, 'Plan de metrología', 74),
(83, 'Trazabilidad a las mediciones', 74),
(84, 'Procedimentos', 77),
(85, 'Listados maestros', 77),
(86, 'Identificación que necesita medición', 78),
(87, 'Métodos de seguimiento y medición', 78),
(88, 'Periodo', 78),
(89, 'Cuando el analisis', 78),
(90, 'Conformidad del producto/servicio', 80),
(91, 'Satisfacción del cliente', 80),
(92, 'Desempeño del sistema', 80),
(93, 'Eficacia del sistema', 80),
(94, 'Implementación del sistema', 80),
(95, 'Eficacia de las acciones para abordar riesgos y oportunidades', 80),
(96, 'Desempeño Proveedores externos', 80),
(97, 'Necesidad de mejora', 80),
(98, 'Procedimiento auditoria interna', 81),
(99, 'Equipo auditor', 81),
(100, 'Programa de auditoría', 81),
(101, 'Acciones correctivas', 81),
(102, 'Informe', 81),
(103, 'Periodo establecido', 82),
(104, 'Entradas', 82),
(105, 'Salidas', 82),
(106, 'Registro', 82),
(107, 'Información de productos', 91),
(108, 'Consultas', 91),
(109, 'Contratos', 91),
(110, 'Pedidos', 91),
(111, 'Retroalimentación', 91),
(112, 'PQRSF', 91),
(113, 'Propiedad del cliente', 91),
(114, 'Contingencias', 91),
(115, 'Revisión', 99),
(116, 'Verificación', 99),
(117, 'validación', 99),
(118, 'Información documentada', 110),
(119, 'recursos de seguimiento y medición', 110),
(120, 'Actividades de seguimiento y medición', 110),
(121, 'Infraestructura', 110),
(122, 'personas competentes', 110),
(123, 'Validación y revalidación capacidad', 110),
(124, 'Prevenir errores humanos', 110),
(125, 'Acciones de liberación, entrega y posteriores a la entrega', 110),
(126, 'Identificación', 111),
(127, 'Trazabilidad', 111),
(128, 'Registros requeridos', 111),
(129, 'Propiedad de los clientes', 112),
(130, 'Propiedad proveedores externos', 112),
(131, 'Registros de notificaciones sobre el estado', 112),
(132, 'Precipitación (mm/año - mm/mes)', 124),
(133, 'Temperatura media (máxima/mínima)', 124),
(134, 'Brillo solar medio', 124),
(135, 'Humedad anual media', 124),
(136, 'Material particulado PM10/PM2,5', 125),
(137, 'Gases (CO, CO2, NOx, SO2)', 125),
(138, 'Compuestos Orgánicos Volátiles COV', 125),
(139, 'Ozono total mensual', 125),
(140, 'Ruido ambiental', 125),
(141, 'Demanda Biológica de Oxigeno DBO5', 126),
(142, 'Demanda Química de Oxigeno DQO', 126),
(143, 'Sólidos Suspendidos Totales SST', 126),
(144, 'Sólidos Sedimentables Ssed', 126),
(145, 'Sólidos Totales ST', 126),
(146, 'Grasas y Aceites', 126),
(147, 'pH', 126),
(148, 'Temperatura', 126),
(149, 'Agua', 127),
(150, 'Arena y roca', 127),
(151, 'Madera', 127),
(152, 'Fibras y resinas', 127),
(153, 'Bionama', 127),
(154, 'Pesca y acuicultura', 127),
(155, 'Carne y pieles', 127),
(156, 'Plantas medicinales', 127),
(157, 'Ingredientes naturales', 127),
(158, 'Ganadería', 127),
(159, 'Agricultura', 127),
(160, 'Área por tipo de cobertura suelo (Hectáreas)', 128),
(161, 'Número de especies (Fauna y Flora)', 128),
(162, 'Conflictos de uso del suelo', 128),
(163, 'Fenomenos naturales', 129),
(164, 'Agua', 130),
(165, 'Aire', 130),
(166, 'Residuos sólidos', 130),
(167, 'Suelo', 130),
(168, 'Flora', 130),
(169, 'Fauna', 130),
(170, 'Comunidades indígenas', 131),
(171, 'Comunidades afrodescendientes', 131),
(172, 'Comunidades campesinas', 131),
(173, 'Comunidades en condición de vulnerabilidad', 131),
(174, 'Patrimonio', 131),
(175, 'Programa de responsabilidad social y ambiental', 131),
(176, 'Aire', 132),
(177, 'Agua', 132),
(178, 'Suelo', 132),
(179, 'Flora', 132),
(180, 'Fauna', 132),
(181, 'Participación comunitaria', 133),
(182, 'Servicios sociales y equipamientos', 133),
(183, 'Demografía', 133),
(184, 'Estructura de la propiedad', 134),
(185, 'Empresas productivas', 134),
(186, 'Mercado laboral', 134),
(187, 'Tendencias del empleo', 134),
(188, 'Programas y proyectos productivos', 134),
(189, 'Contexto de la organización', 135),
(190, 'Necesidades y expectativas de las partes interesadas', 135),
(191, 'Alcance del sistema de gestión ambiental SGA', 135),
(192, 'Liderazgo', 135),
(193, 'Planificación', 135),
(194, 'Apoyo', 135),
(195, 'Operación', 135),
(196, 'Evaluación del desempeño', 135),
(197, 'Mejora', 135),
(198, 'Profesional con licencia en SST', 136),
(199, 'Facilitador asistente', 136),
(200, 'I', 137),
(201, 'II', 137),
(202, 'III', 137),
(203, 'IV', 137),
(204, 'V', 137),
(205, 'Frecuencia de accidentalidad', 140),
(206, 'Severidad de accidentalidad', 140),
(207, 'Proporción de accidente de trabajo mortales', 140),
(208, 'Prevalencia de la enfermedad laboral', 140),
(209, 'Ausentismo por causa médica', 140),
(210, 'Biológico', 141),
(211, 'Físico', 141),
(212, 'Químico', 141),
(213, 'Psicosocial', 141),
(214, 'Biomecánico', 141),
(215, 'Condiciones de seguridad', 141),
(216, 'Fenómenos Naturales', 141),
(217, 'Aplicación de medidas por parte de los trabajadores', 142),
(218, 'Procedimientos e instructivos', 142),
(219, 'Inspecciones a maquinaria y equipo', 142),
(220, 'Mantenimiento periódico', 142),
(221, 'Entrega de EPP', 142),
(222, 'Plan de recarga a extintores', 143),
(223, 'Perfiles de cargo', 145),
(224, 'Evaluaciones médicas ocupacionales (Ingreso, periódico y egreso)', 145),
(225, 'Estilos de vida y entorno saludable', 145),
(226, 'Restricciones y recomendaciones medico laborales', 145),
(227, 'Estructura', 155),
(228, 'Proceso', 155),
(229, 'Resultado', 155);

-- --------------------------------------------------------

--
-- Table structure for table `Despliegue`
--

CREATE TABLE `Despliegue` (
  `ID_Despliegue` smallint(5) UNSIGNED NOT NULL,
  `nombreDespliegue` varchar(100) DEFAULT NULL,
  `ID_FK_Variable` smallint(5) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Despliegue`
--

INSERT INTO `Despliegue` (`ID_Despliegue`, `nombreDespliegue`, `ID_FK_Variable`) VALUES
(1, 'Según origen capital', 1),
(2, 'Según tamaño', 1),
(3, 'Objeto social', 1),
(4, 'Sector económico', 1),
(5, 'Según numero de propietarios', 1),
(6, 'Tangibles', 2),
(7, 'Intangibles', 2),
(8, 'Identificación', 3),
(9, 'Descripción', 3),
(10, 'Composición', 3),
(11, 'Duración', 3),
(12, 'Características físicas', 3),
(13, 'Características Químicas', 3),
(14, 'Características microbiológicas', 3),
(15, 'Formas de uso', 3),
(16, 'Usuarios potenciales', 3),
(17, 'Restricciones', 3),
(18, 'Condiciones de manejo', 3),
(19, 'Condiciones de conservación', 3),
(20, 'Empaque', 3),
(21, 'Etiquetado', 3),
(22, 'Presentación', 3),
(23, 'Destino final', 3),
(24, 'Aplica', 4),
(25, 'No aplica', 4),
(26, 'Logotipo', 5),
(27, 'Marca', 5),
(28, 'Eslogan', 5),
(29, 'Dependencias', 6),
(40, 'Venta directa', 15),
(41, 'Internet', 15),
(42, 'Distribuidor', 15),
(43, 'Servicio al cliente', 16),
(44, 'Fidelización de clientes', 16),
(45, 'PQRSF', 16),
(46, 'Mapa de procesos', 17),
(47, 'Caracterizaciones', 17),
(48, 'Misión', 18),
(49, 'Visión', 18),
(50, 'Filosofía', 18),
(51, 'Diagnóstico', 18),
(52, 'DOFA', 18),
(53, 'Objetivos', 18),
(54, 'Estrategias', 18),
(55, 'Indicadores', 18),
(56, 'Seguimiento revisión de la información', 18),
(57, 'Identificación', 19),
(58, 'Determinación necesidades y expectativas', 19),
(59, 'Definición de requisitos', 19),
(60, 'Seguimiento revisión de la información', 19),
(61, 'La organización', 20),
(62, 'Producto/ Servicio', 20),
(63, 'Proceso', 20),
(64, 'Exclusiones', 20),
(65, 'Compromiso', 21),
(66, 'Política', 21),
(67, 'Roles, responsabilidades', 21),
(68, 'Matriz de riesgos', 22),
(69, 'Matriz despliegue de objetivos', 23),
(70, 'Presupuestos', 25),
(71, 'Personas', 25),
(72, 'Infraestructura', 25),
(73, 'Ambiente de trabajo', 25),
(74, 'Recursos de seguimiento y medición', 25),
(75, 'Adquisición de conocimiento', 25),
(76, 'Matriz de comunicación', 25),
(77, 'Información documentada', 25),
(78, 'Seguimiento, medición, análisis y evaluación', 26),
(79, 'Satisfacción del cliente', 26),
(80, 'Análisis y evaluación', 26),
(81, 'Auditoría interna', 26),
(82, 'Revisión por la dirección', 26),
(83, 'Procedimiento acción correctiva', 27),
(84, 'Acción correctiva', 27),
(85, 'Registro', 27),
(86, 'Determinación requisitos de productos/servicios', 28),
(87, 'Planificación de procesos', 28),
(88, 'Establecimiento de métodos', 28),
(89, 'Planificación cambios', 28),
(90, 'Procesos contratados externamente', 28),
(91, 'Comunicación con los clientes', 29),
(92, 'Especificados por el cliente', 30),
(93, 'Necesarios para el uso especificado', 30),
(94, 'Especificados por la organzación', 30),
(95, 'Legales/reglamentarios', 30),
(96, 'Diferencias en el contrato', 30),
(97, 'Cambios en el producto', 30),
(98, 'Registro', 30),
(99, 'Planificación del diseño', 31),
(100, 'Entradas', 31),
(101, 'Controles al diseño y desarrollo', 31),
(102, 'Salidas', 31),
(103, 'Cambios en el diseño', 31),
(104, 'Registros', 31),
(105, 'Proceso de compras', 32),
(106, 'Evaluación de proveedores', 32),
(107, 'Selección de proveedores', 32),
(108, 'Re evaluación de proveedores', 32),
(109, 'Registros', 32),
(110, 'Control de la Producción y provisión del servicio', 33),
(111, 'Identificación y trazabilidad', 33),
(112, 'Propiedad perteneciente a los clientes o proveedores externos', 33),
(113, 'Preservación', 33),
(114, 'Actividades posteriores a las entrega', 33),
(115, 'Planificacion cambios en la producción', 33),
(116, 'Liberación', 34),
(117, 'Evidencia de conformidad con los criterios de aceptación', 34),
(118, 'Responsable', 34),
(119, 'Procedimiento del control del no conforme', 35),
(120, 'Identificación del no conforme', 35),
(121, 'Control del no conforme', 35),
(122, 'Acción tomada', 35),
(123, 'Registros requeridos', 35),
(124, 'Climatología', 36),
(125, 'Calidad del aire', 36),
(126, 'Calidad de las aguas', 36),
(127, 'Disponibilidad de recursos', 36),
(128, 'Biodiversidad', 36),
(129, 'Gestión del riesgo de Desastres', 36),
(130, 'Legislación ambiental y empresarial', 37),
(131, 'Valores éticos y morales de la sociedad ', 38),
(132, 'Ambiental', 39),
(133, 'Social', 39),
(134, 'Económico', 39),
(135, 'Sistema de Gestión Ambiental ', 40),
(136, 'Persona que diseñe e implemente el SG-SST', 41),
(137, 'Nivel de riesgo', 42),
(138, 'Reporte de accidentes y enfermedad laboral', 48),
(139, 'Investigación de incidentes, accidentes de trabajo y enfermedad laboral', 48),
(140, 'Registro y análisis de accidentes de trabajo y enfermedad laboral', 48),
(141, 'Matriz de peligros y riesgos (Identificación y controles)', 49),
(142, 'Prevención y control de peligros y riesgos ', 49),
(143, 'Plan de prevención, preparación y respuesta ante emergencias', 50),
(144, 'Brigada de prevención, preparación y respuesta ante emergencias', 50),
(145, 'Medicina del trabajo, prevención y promoción de la salud ', 51),
(146, 'Política de seguridad y salud en el trabajo', 52),
(147, 'Objetivos de SST', 52),
(148, 'Evaluación inicial del SG-SST', 52),
(149, 'Plan anual de trabajo', 52),
(150, 'Archivo y retención documental SST', 52),
(151, 'Rendición de cuentas', 52),
(152, 'Mecanismos de comunicación', 52),
(153, 'Evaluación y selección de proveedores y contratistas', 52),
(154, 'Gestión del cambio', 52),
(155, 'Definición de indicadores del SG-SST', 52),
(156, 'Auditoria Anual', 52),
(157, 'Revisión por la alta dirección ', 52),
(158, 'Plan de mejoramiento', 52),
(159, 'Análisis de la competencia', 15),
(160, 'Precio', 15),
(161, 'Promoción', 15),
(162, 'Presupuesto de ventas', 15),
(163, 'Identificación clientes', 16),
(164, 'I+D+I', 31),
(165, 'Análisis de la competencia', 53),
(166, 'Precio', 53),
(167, 'Promoción', 53),
(168, 'Presupuesto de ventas', 53),
(169, 'Venta directa', 53),
(170, 'Web', 53),
(171, 'Blog', 53),
(172, 'Facebook', 53),
(173, 'Instagram', 53),
(174, 'Mercado libre', 53),
(175, 'Amazon', 53),
(176, 'E-bay', 53),
(177, 'OLX', 53);

-- --------------------------------------------------------

--
-- Table structure for table `Opcion`
--

CREATE TABLE `Opcion` (
  `ID_Opcion` smallint(5) UNSIGNED NOT NULL,
  `nombreOpcion` varchar(100) DEFAULT NULL,
  `ID_FK_Categoria` smallint(5) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Opcion`
--

INSERT INTO `Opcion` (`ID_Opcion`, `nombreOpcion`, `ID_FK_Categoria`) VALUES
(1, 'Industrial de transformación', 11),
(2, 'Industrial extractivo', 11),
(3, 'Comercial', 12),
(4, 'Financiero', 12),
(5, 'De servicios', 12),
(6, 'Servicios sin animo de lucro', 14),
(7, 'Actividades domesticas', 14),
(8, 'Colectiva', 16),
(9, 'Sociedad limitada', 16),
(10, 'Sociedad anónima', 16),
(11, 'Sociedad por acción simplificada', 16),
(12, 'Sociedad comandita simple', 16),
(13, 'Sociedad comandita por acciones', 16),
(14, 'Duraderos', 17),
(15, 'Semiduraderos', 17),
(16, 'Perecederos', 17),
(17, 'Duraderos', 18),
(18, 'Semiduraderos', 18),
(19, 'Perecederos', 18),
(21, 'Mercado libre', 49),
(22, 'Amazon', 49),
(23, 'E bay', 49),
(24, 'Olx', 49),
(25, 'Productos/servicios', 118),
(26, 'Actividades', 118),
(27, 'Manejo de vertimientos', 164),
(28, 'Emisiones', 165),
(29, 'Residuos peligrosos y posconsumo', 166),
(30, 'Educación', 182),
(31, 'Salud', 182),
(32, 'Recreación y deporte', 182),
(33, 'Infraestructura de transporte', 182),
(34, 'Acueducto, alcantarillado, energía eléctrica, gas domiciliario', 182),
(35, 'Comunicaciones: internet, televisión, emisoras comunitarias', 182),
(36, 'Natalidad', 183),
(37, 'Mortalidad', 183),
(38, 'Movilidad espacial', 183),
(39, 'Estructura de la población', 183),
(40, 'Distribución espacial (urbano/Rural)', 183),
(41, 'Densidad de población', 183),
(42, 'Necesidades básicas insatisfechas NBI', 183),
(43, 'Contexto interno', 189),
(44, 'Contexto externo', 189),
(45, 'Política ambiental', 192),
(46, 'Roles, responsabilidades y autoridades', 192),
(47, 'Acciones para abordar Riesgos y oportunidades', 193),
(48, 'Objetivos ambientales y planificación para lograrlos', 193),
(49, 'Recursos', 194),
(50, 'Competencia', 194),
(51, 'Toma de conciencia', 194),
(52, 'Comunicación', 194),
(53, 'Información documentada', 194),
(54, 'Planificación y control operacional', 195),
(55, 'Preparación y respuesta ante emergencias ambientales', 195),
(56, 'Seguimiento, medición, análisis y evaluación', 196),
(57, 'Auditoria interna', 196),
(58, 'Revisión por la dirección', 196),
(59, 'No conformidades y acción correctiva', 197);

-- --------------------------------------------------------

--
-- Table structure for table `SistemaAsociado`
--

CREATE TABLE `SistemaAsociado` (
  `ID_SistemaAsosiado` tinyint(3) UNSIGNED NOT NULL,
  `nombreSistemaAsociado` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `SistemaAsociado`
--

INSERT INTO `SistemaAsociado` (`ID_SistemaAsosiado`, `nombreSistemaAsociado`) VALUES
(1, 'Empresa'),
(2, 'Sistema general'),
(3, 'Sistema de gestión de calidad'),
(4, 'Sistema de gestión ambiental'),
(5, 'Sistema de gestión de SST');

-- --------------------------------------------------------

--
-- Table structure for table `Variable`
--

CREATE TABLE `Variable` (
  `ID_Variable` smallint(5) UNSIGNED NOT NULL,
  `nombreVariable` varchar(100) DEFAULT NULL,
  `ID_FK_SistemaAsociado` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Variable`
--

INSERT INTO `Variable` (`ID_Variable`, `nombreVariable`, `ID_FK_SistemaAsociado`) VALUES
(1, 'Tipo de empresa', 1),
(2, 'Tipo de producto', 1),
(3, 'Ficha técnica', 1),
(4, 'Norma técnica', 1),
(5, 'Imagen empresarial ', 1),
(6, 'Gestión funcional', 1),
(15, 'Ventas', 1),
(16, 'Gestión de clientes ', 1),
(17, 'Gestión por procesos', 2),
(18, 'Planeación estratégica', 2),
(19, 'Partes interesadas', 2),
(20, 'Alcance', 2),
(21, 'Liderazgo', 2),
(22, 'Abordar riesgos y oportunidades', 2),
(23, 'Objetivos', 2),
(24, 'Planificación de los cambios', 2),
(25, 'Recursos', 2),
(26, 'Evaluación del desempeño', 2),
(27, 'Mejora', 2),
(28, 'Planificación y control operacional', 3),
(29, 'Requisitos para los productos y servicios', 3),
(30, 'Revisión de los requisitos para los productos/servicios', 3),
(31, 'Diseño y desarrollo de productos/servicios', 3),
(32, 'Control de los procesos productos, servicios suministrados externamente', 3),
(33, 'Producción y provisión del servicio', 3),
(34, 'Liberación de los productos/servicios', 3),
(35, 'Control de las salidas no conformes', 3),
(36, 'Condiciones ambientales', 4),
(37, 'Desarrollo reglamentario/normativo', 4),
(38, 'Contexto social y cultural', 4),
(39, 'Impactos ambientales', 4),
(40, 'Prácticas de gestión ambiental', 4),
(41, 'Asignación de responsabilidad SG-SST', 5),
(42, 'Afiliación al sistema de seguridad social integral', 5),
(43, 'Conformación y Capacitación del COPASST - Vigía', 5),
(44, 'Conformación del Comité de Convivencia Laboral', 5),
(45, 'Programa de capacitación anual SST', 5),
(46, 'Inducción y reinducción en SST', 5),
(47, 'Matriz Legal SST', 5),
(48, 'Accidentes de trabajo y enfermedad laboral', 5),
(49, 'Identificación de peligros, evaluación y valoración de riesgos', 5),
(50, 'Respuesta ante emergencias', 5),
(51, 'Descripción sociodemográfica y diagnóstico de las condiciones de salud de los trabajadores', 5),
(52, 'Sistema de gestión de SST', 5),
(53, 'ventas_medios', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Categoria`
--
ALTER TABLE `Categoria`
  ADD PRIMARY KEY (`ID_Categoria`),
  ADD KEY `ID_FK_Despliegue` (`ID_FK_Despliegue`);

--
-- Indexes for table `Despliegue`
--
ALTER TABLE `Despliegue`
  ADD PRIMARY KEY (`ID_Despliegue`),
  ADD KEY `ID_FK_Variable` (`ID_FK_Variable`);

--
-- Indexes for table `Opcion`
--
ALTER TABLE `Opcion`
  ADD PRIMARY KEY (`ID_Opcion`),
  ADD KEY `ID_FK_Categoria` (`ID_FK_Categoria`);

--
-- Indexes for table `SistemaAsociado`
--
ALTER TABLE `SistemaAsociado`
  ADD PRIMARY KEY (`ID_SistemaAsosiado`);

--
-- Indexes for table `Variable`
--
ALTER TABLE `Variable`
  ADD PRIMARY KEY (`ID_Variable`),
  ADD KEY `ID_FK_SistemaAsociado` (`ID_FK_SistemaAsociado`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Categoria`
--
ALTER TABLE `Categoria`
  MODIFY `ID_Categoria` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=230;

--
-- AUTO_INCREMENT for table `Despliegue`
--
ALTER TABLE `Despliegue`
  MODIFY `ID_Despliegue` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=178;

--
-- AUTO_INCREMENT for table `Opcion`
--
ALTER TABLE `Opcion`
  MODIFY `ID_Opcion` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `SistemaAsociado`
--
ALTER TABLE `SistemaAsociado`
  MODIFY `ID_SistemaAsosiado` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Variable`
--
ALTER TABLE `Variable`
  MODIFY `ID_Variable` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Categoria`
--
ALTER TABLE `Categoria`
  ADD CONSTRAINT `Categoria_ibfk_1` FOREIGN KEY (`ID_FK_Despliegue`) REFERENCES `Despliegue` (`ID_Despliegue`);

--
-- Constraints for table `Despliegue`
--
ALTER TABLE `Despliegue`
  ADD CONSTRAINT `Despliegue_ibfk_1` FOREIGN KEY (`ID_FK_Variable`) REFERENCES `Variable` (`ID_Variable`);

--
-- Constraints for table `Opcion`
--
ALTER TABLE `Opcion`
  ADD CONSTRAINT `Opcion_ibfk_1` FOREIGN KEY (`ID_FK_Categoria`) REFERENCES `Categoria` (`ID_Categoria`);

--
-- Constraints for table `Variable`
--
ALTER TABLE `Variable`
  ADD CONSTRAINT `Variable_ibfk_1` FOREIGN KEY (`ID_FK_SistemaAsociado`) REFERENCES `SistemaAsociado` (`ID_SistemaAsosiado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
