<hr class="m-0" />
<!-- Identificacion riesgos-->
<section class="resume-section" id="identificacionRiesgo">
    <div class="resume-section-content">
        <h2 class="mb-3">Identificación de Riesgos</h2>
        <div class="container">
            <a class="btn btn-primary mb-2" id="" href="#" role="button"><i class="fas fa-plus-circle"></i>&nbspAgregar</a>
            <form action="" method="post" id="formularioEmpresa">
                <!-- card riesgo -->
                <div class="card mb-3">
                    <div class="card-header">
                        <div class="subheading">Riesgo</div>
                    </div>
                    <div class="card-body">
                        <div class="row d-flex align-items-start justify-content-between mb-3">
                            <div class="col-lg-3 col-sm-12">
                                <label class="form-label m-0" for="tipo">Tipo</label>
                                <select class="form-select" id="tipo" name="tipo" aria-label="tipo">
                                    <option selected disabled> --Seleccionar-- </option>
                                    <option>Estratégicos</option>
                                    <option>Misionales</option>
                                </select>
                            </div>
                            <div class="col-lg-3 col-sm-12">
                                <label class="form-label m-0" for="proceso">Proceso</label>
                                <input type="text" class="form-control" id="proceso" name="proceso" placeholder="Escribir...">
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="objetivo">Objetivo</label>
                                <textarea class="form-control" id="objetivo" name="objetivo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="actCritica">Actividad crítica</label>
                                <textarea class="form-control" id="actCritica" name="actividad_critica" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                        </div>
                        <div class="row d-flex align-items-end justify-content-between mb-3">
                            <div class="col-lg-4 col-sm-12">
                                <label class="form-label m-0" for="sistAsociado">Sistema asociado</label>
                                <select class="form-select" id="sistAsociado" name="sistema_asociado" aria-label="Sistema asociado">
                                    <option selected disabled> --Seleccionar-- </option>
                                    <option>Estratégicos</option>
                                    <option>Misionales</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <label class="form-label m-0" for="variable">Variable</label>
                                <select class="form-select" id="variable" name="variable_riesgo" aria-label="Variable riesgo">
                                    <option selected disabled> --Seleccionar-- </option>
                                    <option>Estratégicos</option>
                                    <option>Misionales</option>
                                </select>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <label class="form-label m-0" for="factRiesgo">Factores de riesgo</label>
                                <select class="form-select" id="factRiesgo" name="factor_riesgo" aria-label="Factor riesgo">
                                    <option selected disabled> --Seleccionar-- </option>
                                    <option>Estratégicos</option>
                                    <option>Misionales</option>
                                </select>
                            </div>
                        </div>
                        <div class="row d-flex align-items-start justify-content-between">
                            <div class="col-lg-3 col-sm-12">
                                <label class="form-label m-0" for="riesgo">Riesgo</label>
                                <textarea class="form-control" id="riesgo" name="riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="descripcionRiesgo">Descripción</label>
                                <textarea class="form-control" id="descripcionRiesgo" name="descripcion_riesgo" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="causaRaiz">Causa raíz</label>
                                <textarea class="form-control" id="causaRaiz" name="causa_raiz" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                            <div class="col-lg-3 col-12">
                                <label class="form-label m-0" for="consecuencias">Consecuencias</label>
                                <textarea class="form-control" id="consecuencias" name="consecuencias" rows="2" placeholder="Escribir..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
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