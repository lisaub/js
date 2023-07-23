function filtrarTablasPorMes() {
  const mes = parseInt(document.getElementById("filtroMes").value);
  if (isNaN(mes) || !(mes >= 1 && mes <= 60)) {
    const tables = document.querySelectorAll("#tablaMostrar");
    if (!tables || tables.length === 0) {
      console.warn("No hay tablas para filtrar.");
      alert("No hay tablas para filtrar.");
      return;
    }
    tables.forEach((table) => {
      const rows = table.querySelectorAll("tr");

      rows.forEach((row, index) => {
        if (index > 1) { 
          row.style.display = "";
        }
      });
    });
    return;
  }
  if (mes <= 0) {
    console.warn("Entrada inválida. Por favor, ingresa un número válido.");
    alert("Entrada inválida. Por favor, ingresa un número válido.");
    return;
  }
  const tables = document.querySelectorAll("#tablaMostrar");
  if (!tables || tables.length === 0) {
    console.warn("No hay tablas para filtrar.");
    alert("No hay tablas para filtrar.");
    return;
  }
  tables.forEach((table) => {
    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
      if (index > 1) { 
        const rowMes = parseInt(row.querySelector("td").textContent);
        if (rowMes !== mes) {
          row.style.display = "none";
        } else {
          row.style.display = "";
        }
      }
    });
  })
}

// Filtrar detalles de las cuotas por mes
// function filtrarPorMes(mes) {
//   const detallesFiltrados = detallesCuotas.filter(detalle => detalle.mes === mes);
//   if (detallesFiltrados.length > 0) {
//     console.log("Detalles de las cuotas para el mes " + mes + ":");
//     console.table(detallesFiltrados, ["cuota", "interes", "capital", "montoRestante"]);
//   } else {
//     console.log("No se encontró ningún detalle para el mes " + mes + ".");
//   }
// }

const input = document.querySelector("#filtroMes");
input.addEventListener("input", filtrarTablasPorMes);

export { filtrarTablasPorMes };