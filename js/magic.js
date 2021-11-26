// $(document).ready(function () {
//     let namej = $('#prueba').val();
// });

// let namejs = document.querySelector('#prueba').value;

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const origenCapital = document.querySelector("#origenCapital");
const dimension = document.querySelector("#dimension");
const objetoSocial = document.querySelector("#objetoSocial");
const sectorEconomico = document.querySelector("#sectorEconomico");
const opcionSectorEco = document.querySelector("#opcionSectorEco");
const opcionesSectorEco = document.querySelector("#opcionesSectorEco");
const propietarios = document.querySelector("#propietarios");
const tipoPersona = document.querySelector("#tipoPersona");
const opTipoPersona = document.querySelector("#opcionTipoPersona");
const tangibles = document.querySelector("#tangibles");
const bienes = document.querySelector("#bienes");
const opBienes = document.querySelector("#opcionBienes");
const intangibles = document.querySelector("#intangibles");
const fichaTec = document.querySelector("#fichaTec");
const colA = document.querySelector("#colA");
const colB = document.querySelector("#colB");
const colC = document.querySelector("#colC");
const normaTec = document.querySelector("#normaTec");
const imgEmp = document.querySelector("#imgEmp");
const gestCliente = document.querySelector("#gestCliente");
const colAv = document.querySelector("#colAv");
const colBv = document.querySelector("#colBv");
const colCv = document.querySelector("#colCv");

fetch("./sistema_asociado.php")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data)
    sistemaAsociado(data);
  });

fetch("./categoria.php")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data)
    segunOrigen(data);
    segunDimension(data);
    segunObjetoSocial(data);
    segunSectorEconomico(data);
    segunNumPropietarios(data);
    productoTangible(data);
    productoIntangible(data);
    fichaTecnica(data);
    tipoIdentificacionRiesgo(data);
  });

function segunOrigen(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 1) {
      // console.log(value.nombreCategoria)
      origenCapital.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
    }
  }
}

function segunDimension(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 2) {
      // console.log(value.nombreCategoria)
      dimension.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
    }
  }
}

function segunObjetoSocial(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 3) {
      // console.log(value.nombreCategoria)
      objetoSocial.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
    }
  }
}

function segunSectorEconomico(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 4) {
      // console.log(value.nombreCategoria)
      sectorEconomico.innerHTML += `<option value="${value.ID_Categoria}">${value.nombreCategoria}</option>`;
    }
  }

  sectorEconomico.addEventListener("change", function (op) {
    let opcion = op.target.value;
    let dataSelect = new FormData();
    dataSelect.append("ID_FK_Categoria", opcion);

    fetch("./opcion_unica.php", {
      method: "POST",
      mode: "no-cors",
      body: dataSelect,
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.nombreOpcion)
        let texthtml = "";
        opcionesSectorEco.innerHTML = "";

        if (data.nombreOpcion != "empty") {
          for (const value of data) {
            opcionesSectorEco.removeAttribute("disabled", "");
            opcionesSectorEco.setAttribute("active", "");
            opcionesSectorEco.innerHTML += `<option value="">${value.nombreOpcion}</option>`;
            texthtml = value.nombreCategoria;
          }
        } else {
          texthtml = "Sin opciones";
          opcionesSectorEco.removeAttribute("active", "");
          opcionesSectorEco.setAttribute("disabled", "");
          opcionesSectorEco.innerHTML += `<option selected disabled value="">--Sin opciones--</option>`;
        }

        opcionSectorEco.innerHTML = texthtml;
      });
  });
}

function segunNumPropietarios(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 5) {
      // console.log(value.nombreCategoria)
      propietarios.innerHTML += `<option value="${value.ID_Categoria}">${value.nombreCategoria}</option>`;
    }
  }

  propietarios.addEventListener("change", function (op) {
    let opcion = op.target.value;
    let dataSelect = new FormData();
    dataSelect.append("ID_FK_Categoria", opcion);

    fetch("./opcion_unica.php", {
      method: "POST",
      mode: "no-cors",
      body: dataSelect,
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.nombreOpcion)
        let texthtml = "";
        tipoPersona.innerHTML = "";

        if (data.nombreOpcion != "empty") {
          for (const value of data) {
            tipoPersona.removeAttribute("disabled", "");
            tipoPersona.setAttribute("active", "");
            tipoPersona.innerHTML += `<option value="">${value.nombreOpcion}</option>`;
            texthtml = value.nombreCategoria;
          }
        } else {
          texthtml = "Sin opciones";
          tipoPersona.removeAttribute("active", "");
          tipoPersona.setAttribute("disabled", "");
          tipoPersona.innerHTML += `<option selected disabled value="">--Sin opciones--</option>`;
        }

        opTipoPersona.innerHTML = texthtml;
      });
  });
}

function productoTangible(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 6) {
      // console.log(value.nombreCategoria)
      tangibles.innerHTML += `<option value="${value.ID_Categoria}">${value.nombreCategoria}</option>`;
    }
  }

  tangibles.addEventListener("change", function (op) {
    let opcion = op.target.value;
    let dataSelect = new FormData();
    dataSelect.append("ID_FK_Categoria", opcion);

    fetch("./opcion_unica.php", {
      method: "POST",
      mode: "no-cors",
      body: dataSelect,
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.nombreOpcion)
        let texthtml = "";
        bienes.innerHTML = "";

        if (data.nombreOpcion != "empty") {
          for (const value of data) {
            bienes.removeAttribute("disabled", "");
            bienes.setAttribute("active", "");
            bienes.innerHTML += `<option value="">${value.nombreOpcion}</option>`;
            texthtml = value.nombreCategoria;
          }
        } else {
          texthtml = "Sin opciones";
          bienes.removeAttribute("active", "");
          bienes.setAttribute("disabled", "");
          bienes.innerHTML += `<option selected disabled value="">--Sin opciones--</option>`;
        }

        opBienes.innerHTML = texthtml;
      });
  });
}

function productoIntangible(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 7) {
      // console.log(value.nombreCategoria)
      intangibles.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
    }
  }
}

fetch("./despliegue.php")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data)
    fichaTecnica(data);
    normaTecnica(data);
    imagenEmpresarial(data);
    ventas(data);
    gestionClientes(data);
  });

function fichaTecnica(data) {
  let countColA = 0;
  let countColC = 0;
  let count = 1;

  for (const value of data) {
    if (value.ID_FK_Variable == 3) {
      let strDirty = removeAccents(value.nombreDespliegue);
      let strClean = strDirty.replace(/ /g, "").toLowerCase();

      if (count % 2 != 0 && countColA <= countColC) {
        colA.innerHTML += `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
                <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
                </div>`;
        count++;
        countColA++;
      } else if (count % 2 != 0 && countColA > countColC) {
        colC.innerHTML += `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
                <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
                </div>`;
        countColC++;
      } else {
        colB.innerHTML += `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
                <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
                </div>`;
        count++;
      }
    }
  }
}

// condicion para agregar elementos en 2 columnas
// function fichaTecnica(data) {
//     let count = 1;
//     for (const value of data) {
//         if (value.ID_FK_Variable == 3) {
//             if ( count % 2 != 0){
//                 colA.innerHTML +=
//                     `<div class="form-check form-check-inline">
//                     <input class="form-check-input" type="checkbox">
//                     <label class="form-check-label">${value.nombreDespliegue}</label>
//                 </div> `
//                 count++
//             } else {
//                 colB.innerHTML +=
//                     `<div class="form-check form-check-inline">
//                     <input class="form-check-input" type="checkbox">
//                     <label class="form-check-label">${value.nombreDespliegue}</label>
//                 </div> `
//                 count++
//             }
//         }
//     }
// }

function normaTecnica(data) {
  for (const value of data) {
    if (value.ID_FK_Variable == 4) {
      normaTec.innerHTML += `<option value="">${value.nombreDespliegue}</option>`;
    }
  }
}

function imagenEmpresarial(data) {
  for (const value of data) {
    if (value.ID_FK_Variable == 5) {
      let strDirty = removeAccents(value.nombreDespliegue);
      let strClean = strDirty.replace(/ /g, "").toLowerCase();

      imgEmp.innerHTML += `<div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
            <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
            </div>`;
    }
  }
}

function ventas(data) {
  let countColAv = 0;
  let countColCv = 0;
  let countv = 1;

  for (const value of data) {
    if (value.ID_FK_Variable == 53) {
      let strDirty = removeAccents(value.nombreDespliegue);
      let strClean = strDirty.replace(/ /g, "").toLowerCase();

      if (countv % 2 != 0 && countColAv <= countColCv) {
        colAv.innerHTML += `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
                <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
                </div>`;
        countv++;
        countColAv++;
      } else if (countv % 2 != 0 && countColAv > countColCv) {
        colCv.innerHTML += `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
                <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
                </div>`;
        countColCv++;
      } else {
        colBv.innerHTML += `<div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
                <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
                </div>`;
        countv++;
      }
    }
  }
}

function gestionClientes(data) {
  for (const value of data) {
    if (value.ID_FK_Variable == 16) {
      let strDirty = removeAccents(value.nombreDespliegue);
      let strClean = strDirty.replace(/ /g, "").toLowerCase();

      gestCliente.innerHTML += `<div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="${strClean}" id="${strClean}" value="${value.nombreDespliegue}">
            <label class="form-check-label" for="${strClean}">${value.nombreDespliegue}</label>
            </div>`;
    }
  }
}

/////////// SISTEMA GENETAL /////////////

const Mapa_Procesos = document.querySelector("#Mapa_Procesos");
const Caracterizaciones = document.querySelector("#Caracterizaciones");

fetch("./categoria.php")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data)
    mapa_procesos(data);
    caracterizaciones(data);
  });

function mapa_procesos(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 46) {
      //   console.log(value.nombreCategoria);
      // let strDirty = removeAccents(value.nombreDespliegue);
      // let strClean = strDirty.replace(/ /g, '');
      Mapa_Procesos.innerHTML += `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;
    }
  }
}

function caracterizaciones(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 47) {
      //   console.log(value.nombreCategoria);
      // let strDirty = removeAccents(value.nombreDespliegue);
      // let strClean = strDirty.replace(/ /g, '');
      Caracterizaciones.innerHTML += `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;
    }
  }
}

//////////// INICIO SGC ////////////

const despliegue_planificacion1 = document.querySelector(
  "#planificaYcontrol_col1"
);
const despliegue_planificacion2 = document.querySelector(
  "#planificaYcontrol_col2"
);
const categoria_comunicacion1 = document.querySelector(
  "#comunicacionClientes1"
);
const categoria_comunicacion2 = document.querySelector(
  "#comunicacionClientes2"
);
const despliegue_revision1 = document.querySelector("#revisionRequisitos1");
const despliegue_revision2 = document.querySelector("#revisionRequisitos2");
const despliegueControl_procesos1 = document.querySelector("#controlProcesos1");
const despliegueControl_procesos2 = document.querySelector("#controlProcesos2");
const despliegueLiberacion1 = document.querySelector("#liberacionProcesos1");
const despliegueLiberacion2 = document.querySelector("#liberacionProcesos2");
const despliegueControlSalida1 = document.querySelector("#controlSalida1");
const despliegueControlSalida2 = document.querySelector("#controlSalida2");
const categoria_DesarrolloProd1 = document.querySelector(
  "#desarrolloProductos1"
);
const categoria_DesarrolloProd2 = document.querySelector(
  "#desarrolloProductos2"
);
const opcion_controlProduc1 = document.querySelector("#controlProduc1");
const opcion_controlProduc2 = document.querySelector("#controlProduc2");
const opcion_controlProduc3 = document.querySelector("#controlProduc3");

fetch("./despliegue.php")
  .then((result) => result.json())
  .then((data) => {
    desplieguePlanificacion(data);
    despliegueRevision(data);
    despliegueControlProcesos(data);
    despliegueLiberacion(data);
    despliegueControlSalida(data);
    desarrolloProduc2(data);
    controlProduccion2(data);
  });

fetch("./categoria.php")
  .then((result) => result.json())
  .then((data) => {
    categoria_clientes(data);
    desarrolloProduc(data);
    controlProduccion1_2(data);
    controlProduccion3(data);
    controlProduccion4(data);
  });

fetch("./opcion.php")
  .then((result) => result.json())
  .then((data) => {
    controlProduccion1(data);
  });

function controlProduccion1(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Categoria == 118) {
      controlProduc1.innerHTML += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreOpcion}">
                            <label class="form-check-label" for="${value.nombreOpcion}">${value.nombreOpcion}</label>
                        </div>`;
      count++;
    }
  }
}

function controlProduccion1_2(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Despliegue == 110 && value.ID_Categoria != 118) {
      controlProduc1.innerHTML += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                            <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                        </div>`;
      count++;
    }
  }
}

function controlProduccion2(data) {
  let count = 1;
  for (const value of data) {
    if (
      value.ID_FK_Variable == 33 &&
      value.ID_Despliegue != 110 &&
      value.ID_Despliegue != 111 &&
      value.ID_Despliegue != 112
    ) {
      controlProduc2.innerHTML += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                            <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                        </div>`;
      count++;
    }
  }
}

function controlProduccion3(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Despliegue == 111) {
      controlProduc3.innerHTML += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                            <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                        </div>`;
      count++;
    }
  }
}

function controlProduccion4(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Despliegue == 112) {
      controlProduc4.innerHTML += `<div class="form-check">
                            <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                            <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                        </div>`;
      count++;
    }
  }
}

function desplieguePlanificacion(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Variable == 28) {
      if (count % 2 != 0) {
        despliegue_planificacion1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      } else {
        despliegue_planificacion2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      }
    }
  }
}

function categoria_clientes(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Despliegue == 91) {
      if (count % 2 != 0) {
        categoria_comunicacion1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`;
        count++;
      } else {
        categoria_comunicacion2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`;
        count++;
      }
    }
  }
}

function despliegueRevision(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Variable == 30) {
      if (count % 2 != 0) {
        despliegue_revision1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      } else {
        despliegue_revision2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      }
    }
  }
}

function desarrolloProduc(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Despliegue == 99) {
      categoria_DesarrolloProd1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                        <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
                    </div>`;
    }
  }
}

function desarrolloProduc2(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Variable == 31 && value.ID_Despliegue != 99) {
      categoria_DesarrolloProd2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
    }
  }
}

function despliegueControlProcesos(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Variable == 32) {
      if (count % 2 != 0) {
        despliegueControl_procesos1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      } else {
        despliegueControl_procesos2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      }
    }
  }
}

function despliegueLiberacion(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Variable == 34) {
      if (count % 2 != 0) {
        despliegueLiberacion1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      } else {
        despliegueLiberacion2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      }
    }
  }
}

function despliegueControlSalida(data) {
  let count = 1;
  for (const value of data) {
    if (value.ID_FK_Variable == 35) {
      if (count % 2 != 0) {
        despliegueControlSalida1.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      } else {
        despliegueControlSalida2.innerHTML += `<div class="form-check">
                        <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreDespliegue}">
                        <label class="form-check-label" for="${value.nombreDespliegue}">${value.nombreDespliegue}</label>
                    </div>`;
        count++;
      }
    }
  }
}
//////////// FIN SGC ////////////

/////////// IDENTIFICACION DE RIESGO /////////////

const formularioRiesgo = document.querySelector("#formularioRiesgo");
const templateRiesgo = document.querySelector("#templateRiesgo").content;
const tarjetasRiesgos = document.querySelector("#tarjetasRiesgos");
const tipoIdRiesgo = document.querySelector("#tipoIdRiesgo");
const sistAsociadoIdRiesgo = document.querySelector("#sistAsociadoIdRiesgo");
const variableIdRiesgo = document.querySelector("#variableIdRiesgo");
const factorIdRiesgo = document.querySelector("#factorIdRiesgo");

// document.addEventListener('click', e =>{
//   console.log(e.target)
// })

fetch("./factor_riesgo.php")
  .then((result) => result.json())
  .then((data) => {
    // console.log(data)
    factorRiesgo(data);
  });

function tipoIdentificacionRiesgo(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 46) {
      tipoIdRiesgo.innerHTML += `<option value="${value.nombreCategoria}">${value.nombreCategoria}</option>`;
    }
  }
}

function factorRiesgo(data) {
  for (const value of data) {
    factorIdRiesgo.innerHTML += `<option value="${value.nombreFactorRiesgo}">${value.nombreFactorRiesgo}</option>`;
  }
}

function sistemaAsociado(data) {
  for (const value of data) {
    sistAsociadoIdRiesgo.innerHTML += `<option value="${value.nombreSistemaAsociado}">${value.nombreSistemaAsociado}</option>`;
  }

  sistAsociadoIdRiesgo.addEventListener("change", function (op) {
    let opcionSA = op.target.value;
    let dataSelectSA = new FormData();
    dataSelectSA.append("nombreSistemaAsociado", opcionSA);

    fetch("./variable_unica.php", {
      method: "POST",
      mode: "no-cors",
      body: dataSelectSA,
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data.nombreOpcion)
        let texthtml = "";
        variableIdRiesgo.innerHTML = "";

        for (const value of data) {
          variableIdRiesgo.removeAttribute("disabled", "");
          variableIdRiesgo.setAttribute("active", "");
          variableIdRiesgo.innerHTML += `<option value="${value.nombreVariable}">${value.nombreVariable}</option>`;
        }
      });
  });
}

const riesgos = [];
formularioRiesgo.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = new FormData(formularioRiesgo);
  // console.log(datos.get('tipo_id_riesgo'))
  const [
    tipo_id_riesgo,
    proceso_id_riesgo,
    objetivo_id_riesgo,
    actividad_critica_id_Riesgo,
    sistema_asociado_id_riesgo,
    variable_id_riesgo,
    factor_id_riesgo,
    riesgo_id_riesgo,
    descripcion_id_riesgo,
    causa_raiz_id_riesgo,
    consecuencias_id_riesgo,
  ] = [...datos.values()];
  console.log([...datos]);

  const riesgo = new Riesgo(
    tipo_id_riesgo,
    proceso_id_riesgo,
    objetivo_id_riesgo,
    actividad_critica_id_Riesgo,
    sistema_asociado_id_riesgo,
    variable_id_riesgo,
    factor_id_riesgo,
    riesgo_id_riesgo,
    descripcion_id_riesgo,
    causa_raiz_id_riesgo,
    consecuencias_id_riesgo
  );
  riesgos.push(riesgo);
  Riesgo.MostrarRiesgo(riesgos);

  fetch("./insertar_riesgo.php", {
    method: "POST",
    body: datos,
  });
});

class Riesgo {
  constructor(
    tipo,
    proceso,
    objetivo,
    actividad,
    sistemaAsociado,
    variable,
    factorRiesgo,
    riesgo,
    descripcion,
    causa,
    consecuencia
  ) {
    this.tipo = tipo;
    this.proceso = proceso;
    this.objetivo = objetivo;
    this.actividad = actividad;
    this.sistemaAsociado = sistemaAsociado;
    this.variable = variable;
    this.factorRiesgo = factorRiesgo;
    this.riesgo = riesgo;
    this.descripcion = descripcion;
    this.causa = causa;
    this.consecuencia = consecuencia;
  }

  static MostrarRiesgo(riesgos) {
    tarjetasRiesgos.textContent = "";
    const fragment = document.createDocumentFragment();
    riesgos.forEach((item) => {
      fragment.appendChild(item.agregarNuevoRiesgo());
    });
    tarjetasRiesgos.appendChild(fragment);
  }

  agregarNuevoRiesgo() {
    const clone = templateRiesgo.cloneNode(true);
    clone.querySelector("#pTipo").textContent = this.tipo;
    clone.querySelector("#pSistemaAsociado").textContent = this.sistemaAsociado;
    clone.querySelector("#pVariable").textContent = this.variable;
    clone.querySelector("#pFactorRiesgo").textContent = this.factorRiesgo;
    clone.querySelector("#idProceso").textContent = this.proceso;
    clone.querySelector("#pObjetivo").textContent = this.objetivo;
    clone.querySelector("#pActividadCritica").textContent = this.actividad;
    clone.querySelector("#pRiesgo").textContent = this.riesgo;
    clone.querySelector("#pDescripcion").textContent = this.descripcion;
    clone.querySelector("#pCausaRaiz").textContent = this.causa;
    clone.querySelector("#pConsecuencias").textContent = this.consecuencia;

    return clone;
  }
}
