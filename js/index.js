// Calcular cuota mensual

function calcularCuota() {
  let detallesCuotas = []; 
  // const montoPrestamo = parseFloat(prompt("Ingresa el monto del préstamo:"));
  // const meses = parseInt(prompt("Ingresa el número de meses (hasta 60):"));
  // const tasaInteres = parseFloat(prompt("Ingresa la tasa de interés (porcentaje):"));
  // const descripcion = prompt("¿Nombre del prestamo / Para qué es este préstamo?:");
  clearTable()

  const montoPrestamo = parseFloat(document.getElementById("montoPrestamo").value);
  const meses = parseInt(document.getElementById("meses").value);
  const tasaInteres = parseFloat(document.getElementById("tasaInteres").value);
  const descripcion = document.getElementById("descripcion").value;

  if (isNaN(montoPrestamo) || isNaN(meses) || !(meses >= 1 && meses <= 60) ||montoPrestamo <= 0 || meses <= 0 || isNaN(tasaInteres)) {
    console.warn("Entrada inválida. Por favor, ingresa números válidos.");
    alert("Entrada inválida. Por favor, ingresa números válidos.");
    return;
  }

  console.log("Valores de entrada: \nNúmero de meses: " + meses + " - Fecha Actual: " + fechaActual.toLocaleDateString() + " - Tasa de interés: " + tasaInteres + "%" + " - Monto del préstamo: $ " + montoPrestamo);

  const tasaInteresMensual = tasaInteres / (100 * 12);

  const cuotaMensual = montoPrestamo * (tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -meses)));

  console.log("Cuotas Mensuales:");
  let mes = 1;
  let montoRestante = montoPrestamo;

  while (mes <= meses) {
    const interesMensual = montoRestante * tasaInteresMensual;
    const capitalMensual = cuotaMensual - interesMensual;
    const fechaCuota = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + mes, fechaActual.getDate());

    montoRestante -= capitalMensual;
    
    const detalleCuota = {
      mes: mes,
      fecha: fechaCuota.toLocaleDateString(),
      cuota: cuotaMensual.toFixed(2),
      interes: interesMensual.toFixed(2),
      capital: capitalMensual.toFixed(2),
      montoRestante: montoRestante.toFixed(2)
    };

    // Ejemplo de desestructuración Alias
    // const {
    //   montoRestante: resto;
    // } = detallesCuota;

    detallesCuotas.push(detalleCuota);

    console.log("Mes : " + mes + " - Fecha " + detalleCuota.fecha + ": Cuota: $" + detalleCuota.cuota + " - Interés: $" + detalleCuota.interes + " - Capital: $" + detalleCuota.capital + " - Monto Restante: $" + detalleCuota.montoRestante);

    mes++;
  }

  // Guardar cuota / Ejemplo con "this"
  function DetalleCuotaExtra(descripcion, data) {
    this.descripcion = descripcion;
    this.data = data;
  }
  function guardarCuota(descripcion, data) {
    const cuota = new DetalleCuotaExtra(descripcion, data);
    cuotasGuardadas.push(cuota);
  }
  guardarCuota(descripcion, detallesCuotas);

  console.log("Detalles de las cuotas:", detallesCuotas);
  console.table(detallesCuotas);

  // Store the data in local storage
  localStorage.setItem("detallesCuotas", JSON.stringify(detallesCuotas));
  localStorage.setItem("montoPrestamo", montoPrestamo);
  localStorage.setItem("meses", meses);
  localStorage.setItem("tasaInteres", tasaInteres);
  localStorage.setItem("descripcion", descripcion);

  // Create HTML table
  const numColumns = Object.keys(detallesCuotas[0]).length;
  const tableRows = detallesCuotas.map((data) => {
    return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
  });
  // EJEMPLO DESESTRUCTURACIÓN (?)
  // function tableRowss({mes, fecha, cuota, interes, capital, montoRestante}=detallesCuotas) {
  //   return `<tr><td class="tablaEstiloDatos">${mes}</td><td class="tablaEstiloDatos">${fecha}</td><td class="tablaEstiloDatos">${cuota}</td><td class="tablaEstiloDatos">${interes}</td><td class="tablaEstiloDatos">${capital}</td><td class="tablaEstiloDatos">${montoRestante}</td></tr>`;
  // };
  const tableHeader = `<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas" colspan="${numColumns}">${descripcion}</th></tr>`;
  const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
  document.body.insertAdjacentHTML("beforeend", table);
  // Borrar detallesCuotas
  detallesCuotas = [];
}

// Clear form
function clearForm() {
  document.getElementById("montoPrestamo").value = "";
  document.getElementById("meses").value = "";
  document.getElementById("tasaInteres").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("filtroMes").value = "";
  clearTable()
}

function clearTable() {
  document.getElementById("filtroMes").value = "";
  const oldTables = document.querySelectorAll("#tablaMostrar");
  if (oldTables) {
    oldTables.forEach((table) => table.remove());
  }
}

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
  document.getElementById("filtroMes").value = "";
  if (!detallesCuotas || detallesCuotas.length === 0) {
    console.warn("No hay data guardada.");
    alert("No hay data guardada.");
    return;
  }
  const oldTables = document.querySelectorAll("#tablaMostrar");
  if (oldTables) {
    oldTables.forEach((table) => table.remove());
  }
  const numColumns = Object.keys(detallesCuotas[0]).length;
  const tableRows = detallesCuotas.map((data) => {
    return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
  });
  const tableHeader = `<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas" colspan="${numColumns}">Última Data Guardada</th></tr>`;
  const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
  document.body.insertAdjacentHTML("beforeend", table);
}

function mostrarTodosLosPrestamos() {
  if (!cuotasGuardadas || cuotasGuardadas.length === 0) {
    console.warn("No hay préstamos guardados.");
    alert("No hay préstamos guardados.");
    return;
  }
  clearTable()
  cuotasGuardadas.forEach((prestamo) => {
    const descripcion = prestamo.descripcion;
    const detallesCuotas = prestamo.data;
    const numColumns = Object.keys(detallesCuotas[0]).length;
    const tableRows = detallesCuotas.map((data) => {
      return `<tr><td class="tablaEstiloDatos">${data.mes}</td><td class="tablaEstiloDatos">${data.fecha}</td><td class="tablaEstiloDatos">${data.cuota}</td><td class="tablaEstiloDatos">${data.interes}</td><td class="tablaEstiloDatos">${data.capital}</td><td class="tablaEstiloDatos">${data.montoRestante}</td></tr>`;
    });
    const tableHeader = `<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas" colspan="${numColumns}">${descripcion}</th></tr>`;
    const table = `<table id="tablaMostrar" style="border-collapse: collapse; width:100%;">${tableHeader}<tr style="background-color:#f2f2f2;"><th class="tablaEstiloColumnas">Mes</th><th class="tablaEstiloColumnas">Fecha</th><th class="tablaEstiloColumnas">Cuota</th><th class="tablaEstiloColumnas">Interés</th><th class="tablaEstiloColumnas">Capital</th><th class="tablaEstiloColumnas">Monto Restante</th></tr>${tableRows.join("")}</table>`;
    document.body.insertAdjacentHTML("beforeend", table);
  });
}

// Filtrar detalles de las cuotas por mes
function filtrarPorMes(mes) {
  const detallesFiltrados = detallesCuotas.filter(detalle => detalle.mes === mes);
  if (detallesFiltrados.length > 0) {
    console.log("Detalles de las cuotas para el mes " + mes + ":");
    console.table(detallesFiltrados, ["cuota", "interes", "capital", "montoRestante"]);
  } else {
    console.log("No se encontró ningún detalle para el mes " + mes + ".");
  }
}

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


console.log("Para usar la Calculadora de Préstamos, por favor llama a la función 'calcularCuota()'.");
console.log("También puedes utilizar la función 'filtrarPorMes(mes)' para filtrar los detalles de las cuotas por mes.");

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  calcularCuota();
});
