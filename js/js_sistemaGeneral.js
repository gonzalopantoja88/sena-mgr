const mapaProcesos = document.querySelector('#mapaProcesos');
const opc_caracterizaciones1 = document.querySelector('#caracterizacionesCol1');
const opc_caracterizaciones2 = document.querySelector('#caracterizacionesCol2');
const despliegue_planeacion_e1 = document.querySelector('#desplieguePlaneacionECol1');
const despliegue_planeacion_e2 = document.querySelector('#desplieguePlaneacionECol2');
const despliegue_partes_i1 = document.querySelector('#desplieguePartesInteresadasCol1');
const despliegue_partes_i2 = document.querySelector('#desplieguePartesInteresadasCol2');
const despliegue_alcance1 = document.querySelector('#depliegueAlcance1');
const despliegue_alcance2 = document.querySelector('#depliegueAlcance2');
const categoria_liderazgo1 = document.querySelector('#categoriaLiderazgo1');
const categoria_liderazgo2 = document.querySelector('#categoriaLiderazgo2');
const despliegue_riesgos_oprtunidades = document.querySelector('#DespliegueRiesgos');
const despliegue_objetivos = document.querySelector('#DespliegueObjetivos');
const categoria_recursos1 = document.querySelector('#RecursosCol1');
const categoria_recursos2 = document.querySelector('#RecursosCol2');
const categoria_recursos3 = document.querySelector('#RecursosCol3');
const categoria_recursos4 = document.querySelector('#RecursosCol4');
const despliegue_recursos = document.querySelector('#Recursos');
const categoria_evaluacion1 = document.querySelector('#EvaluacionCol1');
const categoria_evaluacion2 = document.querySelector('#EvaluacionCol2');
const categoria_evaluacion3 = document.querySelector('#EvaluacionCol3');
const categoria_evaluacion4 = document.querySelector('#EvaluacionCol4');
const despliegue_evaluacion = document.querySelector('#Evaluacion');
const despliegue_mejora = document.querySelector('#DespliegueMejora');

// -------------------------------------------------------SST----------------------------------------------------------------

const categoria_asignacion = document.querySelector('#categoriaAsignacion');
const categoria_riesgo = document.querySelector('#categoriaRiesgo');
const variables_comites = document.querySelector('#variablesComites');
const desplegue_accidente1 = document.querySelector('#AccidenteEnfermedad1');
const desplegue_accidente2 = document.querySelector('#AccidenteEnfermedad2');
const categoria_identificacion1 = document.querySelector('#IdentificacionPeligros1');
const categoria_identificacion2 = document.querySelector('#IdentificacionPeligros2');
const despliegue_resp_emergencia = document.querySelector('#RespuestasEmergencia');
const categoria_descripcion_diagnostico = document.querySelector('#DescripcionDiagnostico');
const despliegue_sgsst = document.querySelector('#DespliegueSST');
const categorias_sgsst = document.querySelector('#CategoriaSST');


fetch('./variable.php')
    .then(result => result.json())
    .then(data => {
        //console.log(data)
        variablesComites(data);

        
    })


fetch('./deployment.php')
    .then(result => result.json())
    .then(data => {
        // console.log(data)
        opcDesplieguePlaneacionEstrategica(data);
        opcDesplieguePartesInteresadas(data);
        opcDespliegueAlcance(data);
        opcDespliegueLiderazgo(data);
        opcDespliegueRiesgo(data);
        opcDespliegueObjetivo(data);
        opcDespliegueRecursos(data);
        opcDespliegueEvaluacion(data);
        opcDespliegueMejora(data);
        
        //------------------------sst-----------------------
        opcDespliegueAccidente(data);
        opcDespliegueEmergencia(data);
        opcDespliegueSST(data);

    })


fetch('./category.php')
    .then(result => result.json())
    .then(data => {
        // console.log(data)
        opcMapaProcesos(data);
        opcCaracterizaciones(data);
        opcCategoriaLiderazgo(data);
        opcCategoriaRecursos(data);
        opcCategoriaEvalucacion(data);

        //------------------------sst-----------------------

        opcCategoriaAsignacion(data);
        opcCategoriaRiesgo(data);
        opcCategoriaAccidente(data);
        opcCategoriaIdentificacion(data);
        opcCategoriaEmergencia(data);
        opcCategoriaDescripcion(data);
        opcCategoriaSST(data);


        
    })

function opcMapaProcesos(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 46) {
             //console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            mapaProcesos.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
    }
}

function opcCaracterizaciones(data) {

    let count = 1;
        for (const value of data) {
            if (value.ID_FK_Despliegue == 47) {

                //console.log(value.nombreCategoria)
               // let strDirty = removeAccents(value.nombreDespliegue);
               // let strClean = strDirty.replace(/ /g, '');

            if (count % 2 != 0) {
                opc_caracterizaciones1.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`
                count++;
            } else {
                opc_caracterizaciones2.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`
                count++
            } 
        }
    }
}

function opcDesplieguePlaneacionEstrategica(data) {
    
    let count = 1;
    for (const value of data) {
        if (value.ID_FK_Variable == 18) {
            
            //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');
            
            if (count % 2 != 0) {
                despliegue_planeacion_e1.innerHTML +=
                `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                    count++;
            } else {
                despliegue_planeacion_e2.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                    count++
                } 
            }
        }
}
    
function opcDesplieguePartesInteresadas(data) {
        
    let count = 1;
    for (const value of data) {
        if (value.ID_FK_Variable == 19) {
                
            //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');
                
            if (count % 2 != 0) {
                despliegue_partes_i1.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                </div>`
                count++;
            } else {
                despliegue_partes_i2.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                count++
            } 
        }
    }
}

function opcDespliegueAlcance(data) {
    
    let count = 1;
    for (const value of data) {
            if (value.ID_FK_Variable == 20) {

                //console.log(value.nombreDespliegue)
               // let strDirty = removeAccents(value.nombreDespliegue);
               // let strClean = strDirty.replace(/ /g, '');

            if (count % 2 != 0) {
                despliegue_alcance1.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                    count++;
                } else {
                    despliegue_alcance2.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                    count++
                } 
            }
    }
}

function opcCategoriaLiderazgo(data){
    let count = 1;
    for (const value of data) {
            if (value.ID_FK_Despliegue == 67 ) {

                //console.log(value.nombreCategoria)
               // let strDirty = removeAccents(value.nombreDespliegue);
               // let strClean = strDirty.replace(/ /g, '');

            if (count % 2 != 0) {
                    categoria_liderazgo1.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`
                    count++;
                } else {
                    categoria_liderazgo2.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`
                    count++
                } 
            }
    }
}

function opcDespliegueLiderazgo(data){
    let count = 1;
    for (const value of data) {
            if (value.ID_FK_Variable == 21 && value.ID_Despliegue != 67 ) {

                //console.log(value.nombreDespliegue)
               // let strDirty = removeAccents(value.nombreDespliegue);
               // let strClean = strDirty.replace(/ /g, '');

                if (count % 2 != 0) {
                    categoria_liderazgo1.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                    count++;
                } else {
                    categoria_liderazgo2.innerHTML +=
                    `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                    count++
                } 
            }
    }
}

function opcDespliegueRiesgo(data){
    for (const value of data) {
        if (value.ID_FK_Variable== 22) {
             //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            despliegue_riesgos_oprtunidades.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
            </div>`;

        }
    }
}

function opcDespliegueObjetivo(data){
    for (const value of data) {
        if (value.ID_FK_Variable== 23) {
             //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            despliegue_objetivos.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
            </div>`;

        }
    }
}

function opcCategoriaRecursos(data){
    for (const value of data) {
        if (value.ID_FK_Despliegue == 71) {
            //console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreCategoria);
            // let strClean = strDirty.replace(/ /g, '');

            categoria_recursos1.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }

        if (value.ID_FK_Despliegue== 72) {
            categoria_recursos2.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
        if (value.ID_FK_Despliegue== 74) {
            categoria_recursos3.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
        if (value.ID_FK_Despliegue== 77) {
            categoria_recursos4.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }

    }
}

function opcDespliegueRecursos(data){
    
    for (const value of data) {
        if (value.ID_FK_Variable == 25 && value.ID_Despliegue != 71 && value.ID_Despliegue != 72 && value.ID_Despliegue != 74 && value.ID_Despliegue != 77) {
             //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            despliegue_recursos.innerHTML +=
             `<div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
            </div>`;

        }
    }
}

function opcCategoriaEvalucacion(data){
    for (const value of data) {
        if (value.ID_FK_Despliegue == 78) {
            //console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreCategoria);
            // let strClean = strDirty.replace(/ /g, '');

            categoria_evaluacion1.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }

        if (value.ID_FK_Despliegue== 80) {
            categoria_evaluacion2.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
        if (value.ID_FK_Despliegue== 81) {
            categoria_evaluacion3.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
        if (value.ID_FK_Despliegue== 82) {
            categoria_evaluacion4.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }

    }
}

function opcDespliegueEvaluacion(data){
    for (const value of data) {
        if (value.ID_FK_Variable == 26 && value.ID_Despliegue != 78 && value.ID_Despliegue != 80 && value.ID_Despliegue != 81 && value.ID_Despliegue != 82) {
             //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            despliegue_evaluacion.innerHTML +=
             `<div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
            </div>`;

        }
    }
}

function opcDespliegueMejora(data){
    for (const value of data) {
        if (value.ID_FK_Variable == 27) {
             //console.log(value.nombreDespliegue)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            despliegue_mejora.innerHTML +=
             `<div class="form-check col-4">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
            </div>`;

        }
    }
}

//---------------------------------------------SST------------------------------------

function opcCategoriaAsignacion(data){
    for (const value of data) {
        if (value.ID_FK_Despliegue == 136) {
            //console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            categoria_asignacion.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
    }
}

function opcCategoriaRiesgo(data){
    for (const value of data) {
        if (value.ID_FK_Despliegue == 137) {
            //console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            categoria_riesgo.innerHTML +=
             `<div class="form-check col">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
    }
}

function variablesComites(data){
    for (const value of data) {
        if (value.ID_FK_SistemaAsociado == 5 && value.ID_Variable != 41 && value.ID_Variable != 42 && value.ID_Variable != 48 && value.ID_Variable != 49  && value.ID_Variable != 50 && value.ID_Variable != 51 && value.ID_Variable != 52) {
            
            //console.log(value.nombreVariable)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');

            variables_comites.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreVariable}">
                    <label class="form-check-label" for="${value.nombreVariable}">${value.nombreVariable}</label>
            </div>`;

        }
    }
}

function opcCategoriaAccidente(data) {

    let count = 1;
        for (const value of data) {
            if (value.ID_FK_Despliegue == 140) {

                //console.log(value.nombreCategoria)
               // let strDirty = removeAccents(value.nombreCategoria);
               // let strClean = strDirty.replace(/ /g, '');

            if (count % 2 != 0) {
                desplegue_accidente1.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`
                count++;
            } else {
                desplegue_accidente2.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`
                count++
            } 
        }
    }
}

function opcDespliegueAccidente(data) {

    let count = 1;
        for (const value of data) {
            if (value.ID_FK_Variable == 48 && value.ID_Despliegue != 140) {

                //console.log(value.nombreDespliegue)
               // let strDirty = removeAccents(value.nombreDespliegue);
               // let strClean = strDirty.replace(/ /g, '');

            if (count % 2 != 0) {
                desplegue_accidente1.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                count++;
            } else {
                desplegue_accidente2.innerHTML +=
                    `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`
                count++
            } 
        }
    }
}

function opcCategoriaIdentificacion(data){
    let count = 1;
    for (const value of data) {
            //console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreCategoria);
            // let strClean = strDirty.replace(/ /g, '');

        if (value.ID_FK_Despliegue == 141) {
            categoria_identificacion1.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                </div>`
        }

        if (value.ID_FK_Despliegue == 142){
            categoria_identificacion2.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                </div>`
        } 
    }
}

function opcDespliegueEmergencia(data){
    let count = 1;
    for (const value of data) {
        if (value.ID_FK_Variable == 50) {
            //console.log(value.nombreDespliegue)

            despliegue_resp_emergencia.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                </div>`
        }
    }
}

function opcCategoriaEmergencia(data){
    
    for (const value of data) {
        if (value.ID_FK_Despliegue == 143) {
            //console.log(value.nombreCategoria)

            despliegue_resp_emergencia.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                </div>`
        }
    }
}

function opcCategoriaDescripcion(data){
    for (const value of data) {
        if (value.ID_FK_Despliegue == 145) {
            //console.log(value.nombreCategoria)

            categoria_descripcion_diagnostico.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                </div>`
        }
    }
}

function opcDespliegueSST(data){
    for (const value of data) {
        if (value.ID_FK_Variable == 52 && value.ID_Despliegue != 155) {
            //console.log(value.nombreDespliegue)

            despliegue_sgsst.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                    <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                </div>`
        }
    }
}

function opcCategoriaSST(data){
    for (const value of data) {
        if (value.ID_FK_Despliegue == 155) {
            console.log(value.nombreCategoria)

            categorias_sgsst.innerHTML +=
                `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                </div>`
        }
    }
}
    



