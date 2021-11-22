<hr class="m-0" />
<!-- Identificacion riesgos-->
<section class="resume-section" id="identificacionRiesgo">
    <div class="resume-section-content">
        <h2 class="mb-3">Identificación de Riesgos</h2>
        <div class="container">
            <div class="row">
                <div class="col-12 text-end pe-4">
                    <a href="" class="fs-5"><i class="fas fa-info-circle"></i>Ayuda</a>
                </div>
            </div>
            <form action="" method="post" id="formularioRiesgo">
                <div class="card mb-3">
                    <div class="card-header">
                        <div class="subheading">Riesgo</div>
                    </div>
                    <div class="card-body">
                        <div class="row d-flex align-items-start justify-content-between mb-3">
                            <div class="col-lg-3 col-sm-12">
                                <label class="form-label m-0" for="tipoIdRiesgo">Tipo</label>
                                <select class="form-select" id="tipoIdRiesgo" name="tipo_id_riesgo" aria-label="tipo">
                                    <option selected disabled> --Seleccionar-- </option>
                                </select>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <label class="form-label m-0" for="procesoIdRiesgo">Proceso</label>
                                <input type="text" class="form-control" id="procesoIdRiesgo" name="proceso_id_riesgo" placeholder="Escribir...">
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="objetivoIdRiesgo">Objetivo</label>
                                <textarea class="form-control" id="objetivoIdRiesgo" name="objetivo_id_riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="actCriticaIdRiesgo">Actividad crítica</label>
                                <textarea class="form-control" id="actCriticaIdRiesgo" name="actividad_critica_id_Riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                        </div>
                        <div class="row d-flex align-items-end justify-content-between mb-3">
                            <div class="col-lg-4 col-sm-12">
                                <label class="form-label m-0" for="sistAsociadoIdRiesgo">Sistema asociado</label>
                                <select class="form-select" id="sistAsociadoIdRiesgo" name="sistema_asociado_id_riesgo" aria-label="Sistema asociado">
                                    <option selected disabled> --Seleccionar-- </option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <label class="form-label m-0" for="variableIdRiesgo">Variable</label>
                                <select class="form-select" id="variableIdRiesgo" name="variable_id_riesgo" aria-label="Variable riesgo">
                                    <option selected disabled> --Seleccionar-- </option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <label class="form-label m-0" for="factorIdRiesgo">Factores de riesgo</label>
                                <select class="form-select" id="factorIdRiesgo" name="factor_id_riesgo" aria-label="Factor riesgo">
                                    <option selected disabled> --Seleccionar-- </option>
                                </select>
                            </div>
                        </div>
                        <div class="row d-flex align-items-start justify-content-between">
                            <div class="col-lg-3 col-sm-12">
                                <label class="form-label m-0" for="riesgoIdRiesgo">Riesgo</label>
                                <textarea class="form-control" id="riesgoIdRiesg" name="riesgo_id_riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="descripcionIdRiesgo">Descripción</label>
                                <textarea class="form-control" id="descripcionIdRiesgo" name="descripcion_id_riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="causaRaizIdRiesgo">Causa raíz</label>
                                <textarea class="form-control" id="causaRaizIdRiesgo" name="causa_raiz_id_riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="consecuenciasIdRiesgo">Consecuencias</label>
                                <textarea class="form-control" id="consecuenciasIdRiesgo" name="consecuencias_id_riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit"><i class="fas fa-plus-circle"></i>&nbspAgregar</button>
                    </div>
                </div>
            </form>

            <div id="tarjetasRiesgos">
                <!-- condicion para agregar cards -->
                <article class="card mt-3">
                    <div class="card-header">Riesgo # 1</div>
                    <div class="card-body">
                        <div class="row d-flex align-items-start mb-3">
                            <div class="col-lg-3 col-sm-12">
                                <h4>Tipo:</h4>
                                <p class="m-0">Mejora</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Sistema asociado:</h4>
                                <p class="m-0">Mejora</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Variable:</h4>
                                <p class="m-0">Mejora</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Factores de riesgo:</h4>
                                <p class="m-0">Mejora</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row d-flex align-items-start mb-3">
                            <div class="col-lg-4 col-sm-12">
                                <h4>Proceso:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <h4>Objetivo:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <h4>Actividad crítica:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row d-flex align-items-start">
                            <div class="col-lg-3 col-sm-12">
                                <h4>Riesgo:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Descripción:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Causa raíz:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Consecuencias:</h4>
                                <p class="m-0">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <template id="templateRiesgo">
                <article class="card mt-3">
                    <div class="card-header">Riesgo # 1</div>
                    <div class="card-body">
                        <div class="row d-flex align-items-start mb-3">
                            <div class="col-lg-3 col-sm-12">
                                <h4>Tipo:</h4>
                                <p class="m-0" id="pTipo">Mejora</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Sistema asociado:</h4>
                                <p class="m-0" id="pSistemaAsociado">Mejora</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Variable:</h4>
                                <p class="m-0" id="pVariable">Mejora</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Factores de riesgo:</h4>
                                <p class="m-0" id="pFactorRiesgo">Mejora</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row d-flex align-items-start mb-3">
                            <div class="col-lg-4 col-sm-12">
                                <h4>Proceso:</h4>
                                <p class="m-0" id="idProceso">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <h4>Objetivo:</h4>
                                <p class="m-0" id="pObjetivo">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <h4>Actividad crítica:</h4>
                                <p class="m-0" id="pActividadCritica">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row d-flex align-items-start">
                            <div class="col-lg-3 col-sm-12">
                                <h4>Riesgo:</h4>
                                <p class="m-0" id="pRiesgo">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Descripción:</h4>
                                <p class="m-0" id="pDescripcion">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Causa raíz:</h4>
                                <p class="m-0" id="pCausaRaiz">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <h4>Consecuencias:</h4>
                                <p class="m-0" id="pConsecuencias">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </template>
        </div>
    </div>
</section>
<hr class="m-0" />