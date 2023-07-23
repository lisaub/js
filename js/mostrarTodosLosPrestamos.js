import { clearTable } from './clearTable.js';

function mostrarTodosLosPrestamos() {
  if (!cuotasGuardadas || cuotasGuardadas.length === 0) {
    console.warn("No hay préstamos guardados.");
    alert("No hay préstamos guardados.");
    return;
  }
  clearTable()
  cuotasGuardadas.forEach((prestamo) => {
    const descripcion = prestamo[0].descripcion;
    const detallesCuotas = prestamo;
    const numColumns = Object.keys(detallesCuotas[0]).length;
    const tableRows = detallesCuotas.map((data) => {
      return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
    });
    const tableHeader = `<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas" colspan="${numColumns}">${descripcion}</th></tr>`;
    const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
    document.body.insertAdjacentHTML("beforeend", table);
  });
}

const boton = document.querySelector("#mostrarTodo");
boton.addEventListener("click", mostrarTodosLosPrestamos);

export { mostrarTodosLosPrestamos };