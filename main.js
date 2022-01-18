/* -------------  SELECCIÓN DE DATOS JSON A HTML MEDIANTE JS ------------ */
document.querySelector('#boton1').addEventListener('click', SelectDatosXML);

function SelectDatosXML() {
    const varxml2 = new XMLHttpRequest();
    varxml2.open('GET', 'listaestudiantes.json', true);
    varxml2.send();

    varxml2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            let estudiantes = JSON.parse(this.responseText);
            let tablebody = document.querySelector('#tablebody');
            tablebody.innerHTML = '';
            
            for (let item of estudiantes) {
                tablebody.innerHTML += `
                <tr>
                    <td>${item.cedula1}</td>
                    <td>${item.nombreyapellido1}</td>
                    <td>${item.direccion1}</td>
                    <td>${item.numerotlf1}</td>
                    <td>${item.email1}</td>
                </tr> ` 

            }
        }
    }
}