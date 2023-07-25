import { clearTable } from './clearTable.js';
import {ohNo} from './sweetAlert.js';

// Mostrar ultima cuota
function mostrarUltimosDatos() {
  const detallesCuotas = JSON.parse(localStorage.getItem("detallesCuotas"));
  const montoPrestamo = localStorage.getItem("montoPrestamo");
  const meses = localStorage.getItem("meses");
  const tasaInteres = localStorage.getItem("tasaInteres");
  const fechaActual = localStorage.getItem("fechaActual");
  const fechaActualDate = new Date(fechaActual);
  const fechaInicioValue = fechaActualDate.toISOString().split('T')[0];
  const descripcion = localStorage.getItem("descripcion");
  document.getElementById("montoPrestamo").value = montoPrestamo;
  document.getElementById("meses").value = meses;
  document.getElementById("tasaInteres").value = tasaInteres;
  document.getElementById("fechaInicio").value = fechaInicioValue;
  document.getElementById("descripcion").value = descripcion;
  clearTable()
  if (!detallesCuotas || detallesCuotas.length === 0) {
    console.warn("No hay data guardada.");
    ohNo();
    return;
  }
  const numColumns = Object.keys(detallesCuotas[0]).length;
  const tableRows = detallesCuotas.map((data) => {
    return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
  });
  const tableHeader = `<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas" colspan="${numColumns}">Última Data Guardada</th></tr>`;
  const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
  document.body.insertAdjacentHTML("beforeend", table);
}

const boton = document.querySelector("#mostrarUltimo");
boton.addEventListener("click", mostrarUltimosDatos);

export { mostrarUltimosDatos };