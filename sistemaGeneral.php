<?php include 'connect.php' ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Resume - Start Bootstrap Theme</title>
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
</head>

<body id="page-top">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Gestion de Riesgo</span>
            <span class="d-none d-lg-block"><img class="w-30 rounded-circle" src="assets/img/logo-Sena.png" alt="logo-sena" /></span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav">
                <hr class="text-black">
                <h4>Definir contexto</h4>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#empresa">Empresa</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#sistemaGeneral">Sistema general</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">SGC</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">SGA</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">SST</a></li>
                <hr class="text-black">
                <h4>Identificar riesgo</h4>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Identificar riesgo</a></li>
                <hr class="text-black">
                <h4>Gestionar riesgo</h4>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Análisis de riesgo</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Valoración de riesgo</a>
                </li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Plan de acción</a></li>
            </ul>
        </div>
    </nav>
    <!-- Page Content-->
    <div class="container-fluid p-0">
        <!-- About-->
        <section class="resume-section" id="about">
            <div class="resume-section-content">
                <h1 class="mb-0">
                    Clarence
                    <span class="text-primary">Taylor</span>
                </h1>
                <div class="subheading mb-5">
                    3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
                    <a href="mailto:name@email.com">name@email.com</a>
                </div>
                <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for
                    high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to
                    further the overall value proposition.</p>
                <div class="social-icons">
                    <a class="social-icon" href="#!"><i class="fab fa-linkedin-in"></i></a>
                    <a class="social-icon" href="#!"><i class="fab fa-github"></i></a>
                    <a class="social-icon" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="social-icon" href="#!"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </section>

        <hr class="m-0" />
        

        <!-- --------------------------------------------Sistema general---------------------------------------------------------- -->
        <section class="resume-section" id="sistemaGeneral">
            <div class="resume-section-content">
                <h2 class="mb-3">Sistema General</h2>
                <!-- <button onclick="prueba()">prueba</button> -->
                <div class="container">
                    <form action="" method="post" id="sistemaGeneral">


                        <!-- card gestion por procesos -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Gestion por Procesos</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="col-lg-4 col-sm-12 border-start border-end px-3" id="mapaProcesos">
                                        <h5 class="text-center">Mapa de Procesos</h5>
                                        <!-- mapa de procesos llamado en js -->
                                    </div>
                                    <div class="col-lg-8 col-sm-12 border-start border-end px-3 " id="">
                                        <h5 class="text-center mb-2">Caracterizaciones</h5>
                                        <div class="row">
                                        <div class="col-md-6 col-12 d-flex flex-column" id="caracterizacionesCol1">
                                            <!-- condicion colA -->
                                        </div>
                                        <div class="col-md-6 col-12 d-flex flex-column" id="caracterizacionesCol2">
                                            <!-- condicion colB -->
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0" />

                        <!-- card planeacion estrategica -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Planeacion Estrategica</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                        <div class="col-md-6 col-12 d-flex flex-column" id="desplieguePlaneacionECol1">
                                            <!-- condicion colA -->
                                        </div>
                                        <div class="col-md-6 col-12 d-flex flex-column" id="desplieguePlaneacionECol2">
                                            <!-- condicion colB -->
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0" />


                        <!-- card partes interesadas -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Partes Interesadas</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                        <div class="col-md-6 col-12 d-flex flex-column" id="desplieguePartesInteresadasCol1">
                                            <!-- condicion colA -->

                                        </div>
                                        <div class="col-md-6 col-12 d-flex flex-column" id="desplieguePartesInteresadasCol2">
                                            <!-- condicion colB -->

                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0" />


                        <!-- card Alcance -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Alcance</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                        <div class="col-md-6 col-12 d-flex flex-column" id="depliegueAlcance1">
                                            <!-- condicion colA -->
                                        </div>
                                        <div class="col-md-6 col-12 d-flex flex-column" id="depliegueAlcance2">
                                            <!-- condicion colB -->
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0" />

                        <!-- card Liderazgo -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Liderazgo</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-6 col-12 d-flex flex-column" id="categoriaLiderazgo1">
                                                <!-- condicion colA -->
                                            </div>
                                            <div class="col-md-6 col-12 d-flex flex-column" id="categoriaLiderazgo2">
                                                <!-- condicion colB -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />


                        <!-- card riesgos y oportunidades -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Abordar riesgos y oportunidades</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-6 col-12 d-flex flex-column" id="DespliegueRiesgos">
                                                <!-- condicion colA -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />

                        <!-- card objetivos-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Objetivos</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-6 col-12 d-flex flex-column" id="DespliegueObjetivos">
                                                <!-- condicion colA -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />

                        <!-- card planificacion de cambios-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Planificación de los cambios</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-6 col-12 d-flex flex-column" id="DespliegueObjetivos">
                                                <!-- condicion colA -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />

                        <!-- card  recursos-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Recursos</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="mb-5">
                                                <div class="row" id="Recursos">

                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column border-end" id="RecursosCol1">
                                                <!-- condicion colA -->
                                                <h5 class="text-center">Personas</h5>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column border-end" id="RecursosCol2">
                                                <!-- condicion colB -->
                                                <h5 class="text-center">Infraestructura</h5>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column border-end" id="RecursosCol3">
                                                <!-- condicion colC -->
                                                <h5 class="text-center">Recursos de seguimiento y medicion</h5>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column" id="RecursosCol4">
                                                <!-- condicion colD -->
                                                <h5 class="text-center">Informacion documentada</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />


                        <!-- card  evaluacion de desempeño-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Evaluación del desempeño</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="mb-5">
                                                <div class="row" id="Evaluacion">

                                                </div>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column border-end" id="EvaluacionCol1">
                                                <!-- condicion colA -->
                                                <h5 class="text-center">Seguimiento, medición, análisis y evaluación</h5>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column border-end" id="EvaluacionCol2">
                                                <!-- condicion colB -->
                                                <h5 class="text-center">Análisis  y evaluación</h5>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column border-end" id="EvaluacionCol3">
                                                <!-- condicion colC -->
                                                <h5 class="text-center">Auditoría Interna</h5>
                                            </div>
                                            <div class="col-md-3 col-12 d-flex flex-column" id="EvaluacionCol4">
                                                <!-- condicion colD -->
                                                <h5 class="text-center">Revisión por la dirección</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />

                        <!-- card mejora -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Mejora</div>
                            </div>
                            <div class="card-body ">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-12 col-12 d-flex" id="DespliegueMejora">
                                                <!-- condicion colA -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="m-0" />


                        <div class="row text-center mt-3">
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <hr class="m-0" />
        
        <!-- ------------------------------------------------ -fin sistema general--------------------------------------------------- -->
        <!-- ------------------------------------------------ -Sistema de gestion SST--------------------------------------------------- -->
        <section class="resume-section" id="sistemaGSST">
            <div class="resume-section-content">
                <h2 class="mb-3">Sistema De Gestion SST (seguridad y salud en el trabajo) </h2>
                <!-- <button onclick="prueba()">prueba</button> -->
                <div class="container">
                    <form action="" method="post" id="sistemaGestionSST">


                        <!-- card Asignación de responsabilidad SG-SST -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Asignación de responsabilidad</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="col-12 border-start border-end px-3" id="categoriaAsignacion">
                                        <h5>Persona que diseñe e implemente el SG-SST</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <hr class="m-0" />

                        <!-- card Afilicacion al sistema SG-SST -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Afiliación al sistema de seguridad social integral</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="col-12 border-start border-end px-3">
                                        <h5>Nivel de riesgo </h5>
                                        <div class="row row-cols-5 ms-2" id="categoriaRiesgo">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0" />

                        <!-- card Comités y programas de capacitación -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Comités y programas de capacitación</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="col-12 border-start border-end px-3">
                                        <div class="row row-cols-5 ms-2" id="variablesComites">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="m-0" />

                        <!-- card Accidentes de trabajo y enfermedad laboral  -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Accidentes de trabajo y enfermedad laboral </div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-6 col-12 d-flex flex-column" id="AccidenteEnfermedad1">
                                                <!-- condicion colA -->
                                            </div>
                                            <div class="col-md-6 col-12 d-flex flex-column" id="AccidenteEnfermedad2">
                                                <!-- condicion colB -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="m-0" />

                        <!-- card  Identificación de peligros, evaluación y valoración de riesgos-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Identificación de peligros, evaluación y valoración de riesgos</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-6 col-12 d-flex flex-column border-end" id="IdentificacionPeligros1">
                                                <!-- condicion colA -->
                                                <h5>Matriz de peligros y riesgos (Identificación y controles)</h5>
                                            </div>
                                            <div class="col-md-6 col-12 d-flex flex-column border-start" id="IdentificacionPeligros2">
                                                <!-- condicion colB -->
                                                <h5>Prevención y control de peligros y riesgos </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="m-0" />

                        <!-- card Respuesta ante emergencias -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Respuesta ante emergencias</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-12 col-12 d-flex flex-column" >
                                                <!-- condicion colA -->
                                                <div class="row row-cols-3 ms-2" id="RespuestasEmergencia">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="m-0" />

                        <!-- card Descripción sociodemográfica y diagnóstico de las condiciones de salud de los trabajadores-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Descripción sociodemográfica y diagnóstico de las condiciones de salud de los trabajadores</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-12 col-12 d-flex flex-column" >
                                                <!-- condicion colA -->
                                                <h5>Medicina del trabajo, prevención y promoción de la salud </h5>
                                                <div class="row row-cols-4 ms-2" id="DescripcionDiagnostico">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="m-0" />


                        <!-- card Sistema de gestión de SST-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading m2">Sistema de gestión de SST</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex justify-content-between mb-3">
                                    <div class="border-start border-end px-3 " id="">
                                        <div class="row">
                                            <div class="col-md-12 col-12 d-flex flex-column" >
                                                <!-- condicion colA -->
                                                <div class="row row-cols-3 ms-2" id="DespliegueSST">

                                                </div>
                                                <h5 class="mt-3">Definición de indicadores del SG-SST</h5>
                                                <div class="row row-cols-3 ms-2" id="CategoriaSST">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="m-0" />

                        


                        

                        

                        <div class="row text-center mt-3">
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <hr class="m-0" />





        <!-- Education-->
        <section class="resume-section" id="education">
            <div class="resume-section-content">
                <h2 class="mb-5">Education</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">University of Colorado Boulder</h3>
                        <div class="subheading mb-3">Bachelor of Science</div>
                        <div>Computer Science - Web Development Track</div>
                        <p>GPA: 3.23</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">James Buchanan High School</h3>
                        <div class="subheading mb-3">Technology Magnet Program</div>
                        <p>GPA: 3.56</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div>
                </div>
            </div>
        </section>
        <hr class="m-0" />
        <!-- Skills-->
        <section class="resume-section" id="skills">
            <div class="resume-section-content">
                <h2 class="mb-5">Skills</h2>
                <div class="subheading mb-3">Programming Languages & Tools</div>
                <ul class="list-inline dev-icons">
                    <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                    <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                    <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                    <li class="list-inline-item"><i class="fab fa-react"></i></li>
                    <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                    <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                    <li class="list-inline-item"><i class="fab fa-less"></i></li>
                    <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                    <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                    <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                    <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                </ul>
                <div class="subheading mb-3">Workflow</div>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Mobile-First, Responsive Design
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Browser Testing & Debugging
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        Agile Development & Scrum
                    </li>
                </ul>
            </div>
        </section>
        <hr class="m-0" />
        <!-- Interests-->
        <section class="resume-section" id="interests">
            <div class="resume-section-content">
                <h2 class="mb-5">Interests</h2>
                <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid
                    skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking,
                    free climbing, and kayaking.</p>
                <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
                    shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest
                    technology advancements in the front-end web development world.</p>
            </div>
        </section>
        <hr class="m-0" />
        <!-- Awards-->
        <section class="resume-section" id="awards">
            <div class="resume-section-content">
                <h2 class="mb-5">Awards & Certifications</h2>
                <ul class="fa-ul mb-0">
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        Google Analytics Certified Developer
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        Mobile Web Specialist - Google Certification
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        1
                        <sup>st</sup>
                        Place - University of Colorado Boulder - Emerging Tech Competition 2009
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        1
                        <sup>st</sup>
                        Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        2
                        <sup>nd</sup>
                        Place - University of Colorado Boulder - Emerging Tech Competition 2008
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        1
                        <sup>st</sup>
                        Place - James Buchanan High School - Hackathon 2006
                    </li>
                    <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        3
                        <sup>rd</sup>
                        Place - James Buchanan High School - Hackathon 2005
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <!-- Bootstrap core JS-->
    <!-- <script src="js/jquery.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
    <script src="js/js_sistemaGeneral.js"></script>
</body>

</html>
