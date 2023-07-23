import { clearTable } from './clearTable.js';

// Mostrar ultima cuota
function mostrarUltimosDatos() {
  const detallesCuotas = JSON.parse(localStorage.getItem("detallesCuotas"));
  const montoPrestamo = localStorage.getItem("montoPrestamo");
  const meses = localStorage.getItem("meses");
  const tasaInteres = localStorage.getItem("tasaInteres");
  const descripcion = localStorage.getItem("descripcion");
  document.getElementById("montoPrestamo").value = montoPrestamo;
  document.getElementById("meses").value = meses;
  document.getElementById("tasaInteres").value = tasaInteres;
  document.getElementById("descripcion").value = descripcion;
  clearTable()
  if (!detallesCuotas || detallesCuotas.length === 0) {
    console.warn("No hay data guardada.");
    alert("No hay data guardada.");
    return;
  }
  const numColumns = Object.keys(detallesCuotas[0]).length;
  const tableRows = detallesCuotas.map((data) => {
    return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
  });
  const tableHeader = `<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas" colspan="${numColumns}">Última Data Guardada</th></tr>`;
  const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
  document.body.insertAdjacentHTML("beforeend", table);
}


const boton = document.querySelector("#mostrarUltimo");
boton.addEventListener("click", mostrarUltimosDatos);


export { mostrarUltimosDatos };