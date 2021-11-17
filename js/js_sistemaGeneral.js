const Mapa_Procesos = document.querySelector('#Mapa_Procesos');
const Caracterizaciones = document.querySelector('#Caracterizaciones');

fetch('./category.php')
    .then(result => result.json())
    .then(data => {
        // console.log(data)
        mapa_procesos(data);
        caracterizaciones(data)
    })

function mapa_procesos(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 103) {
             console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');


            Mapa_Procesos.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
    }
}

function caracterizaciones(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 104) {
             console.log(value.nombreCategoria)
            // let strDirty = removeAccents(value.nombreDespliegue);
            // let strClean = strDirty.replace(/ /g, '');


            Caracterizaciones.innerHTML +=
             `<div class="form-check">
                    <input class="form-check-input" type="checkbox" name="" value="" id="${value.nombreCategoria}">
                    <label class="form-check-label" for="${value.nombreCategoria}">${value.nombreCategoria}</label>
            </div>`;

        }
    }
}