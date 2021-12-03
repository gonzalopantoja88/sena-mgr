<hr class="m-0" />
        <!-- Empresa-->
        <section class="resume-section" id="contextoEmpresa">
            <div class="resume-section-content">
                <h2 class="mb-3">Información Empresa</h2>
                <div class="container">
                    <form action="" method="post" id="formularioEmpresa">
                        <!-- card tipo empresa -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading">Tipo de empresa</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex align-items-end justify-content-between mb-3">
                                    <div class="col-lg-3 col-sm-12">
                                        <label class="form-label m-0" for="origenCapital">Origen capital</label>
                                        <select class="form-select" id="origenCapital" name="origenCapital" aria-label="Origen capital">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-sm-12">
                                        <label class="form-label m-0" for="dimension">Tamaño</label>
                                        <select class="form-select" id="dimension" name="dimension" aria-label="dimension">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-12">
                                        <label class="form-label m-0" for="objetoSocial">Objeto social</label>
                                        <select class="form-select" id="objetoSocial" name="objetoSocial" aria-label="Objeto social">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row d-flex align-items-end justify-content-center">
                                    <div class="col-lg-3 col-12">
                                        <label class="form-label m-0" for="sectorEconomico">Sector económico</label>
                                        <select class="form-select" id="sectorEconomico" name="sectorEconomico" aria-label="Sector economico">
                                            <option selected disabled> --Seleccionar-- </option>

                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-12">
                                        <label class="form-label m-0" for="opcionesSectorEco" id="opcionSectorEco">Sector</label>
                                        <select disabled class="form-select" id="opcionesSectorEco" name="opcionesSectorEco" aria-label="Opcion sector economico">
                                            <!-- <option selected disabled> --Seleccionar-- </option> -->
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-12">
                                        <label class="form-label m-0" for="propietarios">Propietarios</label>
                                        <select class="form-select" id="propietarios" name="propietarios" aria-label="Propietarios">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-12">
                                        <label class="form-label m-0" for="tipoPersona" id="opcionTipoPersona">Persona</label>
                                        <select disabled class="form-select" id="tipoPersona" name="tipoPersona" aria-label="Tipo persona">
                                            <!-- <option selected disabled> --Seleccionar-- </option> -->
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card tipo producto -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading">Tipo de producto</div>
                            </div>
                            <div class="card-body">
                                <div class="row d-flex align-items-end">
                                    <div class="col-lg-3 col-sm-12">
                                        <label class="form-label m-0" for="tangibles">Tangibles</label>
                                        <select class="form-select" id="tangibles" name="tangibles" aria-label="Tangibles">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-3 col-sm-12">
                                        <label class="form-label m-0" for="bienes" id="opcionBienes">Bienes</label>
                                        <select disabled class="form-select" id="bienes" name="bienes" aria-label="Bienes">
                                            <!-- <option selected disabled> --Seleccionar-- </option> -->
                                        </select>
                                    </div>
                                    <div class="col-lg-6 col-sm-12">
                                        <label class="form-label m-0" for="intangibles">Intangibles</label>
                                        <select class="form-select" id="intangibles" name="intangibles" aria-label="Intangibles">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card ficha tecnica -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading">Ficha técnica</div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 col-12 d-flex flex-column" id="colA">
                                        <!-- condicion colA -->
                                    </div>
                                    <div class="col-md-4 col-12 d-flex flex-column" id="colB">
                                        <!-- condicion colB -->
                                    </div>
                                    <div class="col-md-4 col-12 d-flex flex-column" id="colC">
                                        <!-- condicion ColC-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card norma tecnica y img empresarial -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading">Imagen y norma técnica</div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6 col-sm-12" >
                                        <div class="row">
                                            <label class="form-label m-0">Imagen empresarial</label>
                                        </div>
                                        <div class="d-flex flex-row" id="imgEmp">
                                            <!-- condicion imagen empresarial -->
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-sm-12" id="normaTecnica">
                                        <label class="form-label m-0" for="normaTec">Norma técnica</label>
                                        <select class="form-select" id="normaTec" name="normatecnica" aria-label="Norma tecnica">
                                            <option selected disabled> --Seleccionar-- </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- card ventas -->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading">Ventas</div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4 col-12 d-flex flex-column" id="colAv">
                                        <!-- condicion colAv -->
                                    </div>
                                    <div class="col-md-4 col-12 d-flex flex-column" id="colBv">
                                        <!-- condicion colBv -->
                                    </div>
                                    <div class="col-md-4 col-12 d-flex flex-column" id="colCv">
                                        <!-- condicion ColCv-->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- card gestión clientes-->
                        <div class="card mb-3">
                            <div class="card-header">
                                <div class="subheading">Gestión clientes</div>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-12 d-flex flex-row" id="gestCliente">
                                        <!-- condicion gestion cliente -->
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
 