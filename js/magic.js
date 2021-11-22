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

/////////// IDENTIFICACION DE RIESGO /////////////

const formularioRiesgo = document.querySelector("#formularioRiesgo");
const templateRiesgo = document.querySelector("#templateRiesgo").content;
const tarjetasRiesgos = document.querySelector("#tarjetasRiesgos");
const tipoIdRiesgo = document.querySelector("#tipoIdRiesgo");
const sistAsociadoIdRiesgo = document.querySelector("#sistAsociadoIdRiesgo");
const variableIdRiesgo = document.querySelector("#variableIdRiesgo");

function tipoIdentificacionRiesgo(data) {
  for (const value of data) {
    if (value.ID_FK_Despliegue == 46) {
      tipoIdRiesgo.innerHTML += `<option value="${value.nombreCategoria}">${value.nombreCategoria}</option>`;
    }
  }
}

function sistemaAsociado(data) {
  for (const value of data) {
    sistAsociadoIdRiesgo.innerHTML += `<option value="${value.ID_SistemaAsosiado}">${value.nombreSistemaAsociado}</option>`;
  }

  sistAsociadoIdRiesgo.addEventListener("change", function (op) {
    let opcionSA = op.target.value;
    let dataSelectSA = new FormData();
    dataSelectSA.append("ID_FK_SistemaAsociado", opcionSA);

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
          variableIdRiesgo.innerHTML += `<option value="">${value.nombreVariable}</option>`;
        }
      });
  });
}

const riesgos = [];
formularioRiesgo.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = new FormData(formularioRiesgo);
  // console.log(datos.get('tipo_id_riesgo'))
  const [tipo_id_riesgo, proceso_id_riesgo] = [...datos.values()];
  console.log([...datos.entries()])

  const riesgo = new Riesgo(tipo_id_riesgo, proceso_id_riesgo);
  riesgos.push(riesgo);
  Riesgo.MostrarRiesgo(riesgos);
});

class Riesgo {
  constructor(tipo, proceso) {
    this.tipo = tipo;
    this.proceso = proceso;
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
    clone.querySelector("#pSistemaAsociado").textContent = this.tipo;
    clone.querySelector("#pVariable").textContent = this.tipo;
    clone.querySelector("#pFactorRiesgo").textContent = this.tipo;

    clone.querySelector("#idProceso").textContent = this.proceso;
    clone.querySelector("#pObjetivo").textContent = this.proceso;
    clone.querySelector("#pActividadCritica").textContent = this.proceso;

    clone.querySelector("#pRiesgo").textContent = this.proceso;
    clone.querySelector("#pDescripcion").textContent = this.proceso;
    clone.querySelector("#pCausaRaiz").textContent = this.proceso;
    clone.querySelector("#pConsecuencias").textContent = this.proceso;

    return clone;
  }
}
