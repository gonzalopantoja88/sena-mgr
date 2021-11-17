const mapaProcesos = document.querySelector('#mapaProcesos');
const opc_caracterizaciones1 = document.querySelector('#caracterizacionesCol1');
const opc_caracterizaciones2 = document.querySelector('#caracterizacionesCol2');

fetch('./category.php')
    .then(result => result.json())
    .then(data => {
        // console.log(data)
        opcMapaProcesos(data);
        opcCaracterizaciones(data)
    })

function opcMapaProcesos(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 103) {
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
            if (value.ID_FK_Despliegue == 104) {


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