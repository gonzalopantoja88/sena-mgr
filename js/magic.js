// $(document).ready(function () {
//     let namej = $('#prueba').val();
// });

// let namejs = document.querySelector('#prueba').value;

const origenCapital = document.querySelector('#origenCapital');
const dimension = document.querySelector('#dimension');
const objetoSocial = document.querySelector('#objetoSocial');
const sectorEconomico = document.querySelector('#sectorEconomico');
const opcionSectorEco = document.querySelector('#opcionSectorEco');
const opcionesSectorEco = document.querySelector('#opcionesSectorEco');

fetch('./category.php')
    .then(result => result.json())
    .then(data => {
        // console.log(data)
        segunOrigen(data);
        segunDimension(data);
        segunObjetoSocial(data);
        segunSectorEconomico(data);
    })

function segunOrigen(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 74) {
            // console.log(value.nombreCategoria)
            origenCapital.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
        }
    }
}

function segunDimension(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 75) {
            // console.log(value.nombreCategoria)
            dimension.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
        }
    }
}

function segunObjetoSocial(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 76) {
            // console.log(value.nombreCategoria)
            objetoSocial.innerHTML += `<option value="">${value.nombreCategoria}</option>`;
        }
    }
}

function segunSectorEconomico(data) {
    for (const value of data) {
        if (value.ID_FK_Despliegue == 77) {
            // console.log(value.nombreCategoria)
            sectorEconomico.innerHTML += `<option value="${value.ID_Categoria}">${value.nombreCategoria}</option>`;
        }
    }

    sectorEconomico.addEventListener('change', function (op) {
        let opcion = op.target.value;
        let dataSelect = new FormData();
        dataSelect.append("ID_FK_Categoria", opcion);

        fetch('./option-only.php', {
            method: 'POST',
            mode: 'no-cors',
            body: dataSelect
        })
            .then(result => result.json())
            .then(data => {
                // console.log(data.nombreOpcion)
                let texthtml = '';
                opcionesSectorEco.innerHTML = '';

                if(data.nombreOpcion != 'empty'){
                    for (const value of data) {
                        opcionesSectorEco.removeAttribute("disabled", "");
                        opcionesSectorEco.setAttribute("active", "");
                        opcionesSectorEco.innerHTML += `<option value="">${value.nombreOpcion}</option>`;
                        texthtml = value.nombreCategoria;
                    }
                } else {
                    texthtml = 'Sin opciones'
                    opcionesSectorEco.removeAttribute("active", "");
                    opcionesSectorEco.setAttribute("disabled", "");
                    opcionesSectorEco.innerHTML += `<option selected disabled value="">--Sin opciones--</option>`;
                }

                opcionSectorEco.innerHTML = texthtml;
            })
    });
}
