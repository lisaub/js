import { clearTable } from './clearTable.js';
import {ohNo} from './sweetAlert.js';

// Mostrar Ejemplo
function cargarEjemplo() {
  clearTable()
  const timer = parseInt(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (!BBDD) {
        reject(new Error('No hay data guardada.'));
    }
    setTimeout(() => {
        resolve(BBDD);
    }, timer);
    })
}


function renderizarTabla(datos) {
    document.getElementById("montoPrestamo").value = 1000;
    document.getElementById("meses").value = 10;
    document.getElementById("tasaInteres").value = 10;
    document.getElementById("fechaInicio").value = "2023-08-06";
    document.getElementById("descripcion").value = "Ejemplo";
    const numColumns = Object.keys(datos[0]).length;
    const tableRows = datos.map((data) => {
      return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
    });
    const tableHeader = `<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas" colspan="${numColumns}">Ejemplo</th></tr>`;
    const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
    document.body.insertAdjacentHTML("beforeend", table);
}



const botonEjemplo = document.querySelector("#ejemplo");
botonEjemplo.addEventListener("click", () => {
    cargarEjemplo()
    .then((datos)=>renderizarTabla(datos))
    .catch((error)=>console.error(error));
});

export { cargarEjemplo };