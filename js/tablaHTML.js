function tablaHTML(detallesCuotas, descripcion) {
  // Create HTML table
  const numColumns = Object.keys(detallesCuotas[0]).length;
  const tableHeader = `<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas" colspan="${numColumns}">${descripcion}</th></tr>`;
  // const tableRows = detallesCuotas.map((data) => {
  //   return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
  // });
  const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr></table>`;
  // const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#91d594;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
  document.body.insertAdjacentHTML("beforeend", table);
  const tableElement = document.getElementById("tablaMostrar");
  let delay = 0;
  detallesCuotas.forEach((data, index) => {
    setTimeout(() => {
      const row = `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
      tableElement.insertAdjacentHTML("beforeend", row);
    }, delay);
    delay += 100; // Increase delay for each row
  });
}

export { tablaHTML };