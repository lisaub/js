// Calcular cuota mensual

const detallesCuotas = []; 

function calcularCuota() {
  const montoPrestamo = parseFloat(prompt("Ingresa el monto del préstamo:"));
  const meses = parseInt(prompt("Ingresa el número de meses:"));
  const tasaInteres = parseFloat(prompt("Ingresa la tasa de interés (porcentaje):"));

  if (isNaN(montoPrestamo) || isNaN(meses) || montoPrestamo <= 0 || meses <= 0 || isNaN(tasaInteres)) {
    console.warn("Entrada inválida. Por favor, ingresa números válidos.");
    alert("Entrada inválida. Por favor, ingresa números válidos.");
    return;
  }

  const tasaInteresMensual = tasaInteres / (100 * 12);

  const cuotaMensual = montoPrestamo * (tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -meses)));

  console.log("Cuotas Mensuales:");
  let mes = 1;
  let montoRestante = montoPrestamo;

  while (mes <= meses) {
    const interesMensual = montoRestante * tasaInteresMensual;
    const capitalMensual = cuotaMensual - interesMensual;
    
    montoRestante -= capitalMensual;
    
    const detalleCuota = {
      mes: mes,
      cuota: cuotaMensual.toFixed(2),
      interes: interesMensual.toFixed(2),
      capital: capitalMensual.toFixed(2),
      montoRestante: montoRestante.toFixed(2)
    };

    detallesCuotas.push(detalleCuota); 

    console.log("Mes " + mes + ": Cuota: $" + detalleCuota.cuota + " - Interés: $" + detalleCuota.interes + " - Capital: $" + detalleCuota.capital + " - Monto Restante: $" + detalleCuota.montoRestante);

    mes++;
  }

  console.log("Detalles de las cuotas:", detallesCuotas);
  console.table(detallesCuotas);
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

console.log("Para usar la Calculadora de Préstamos, por favor llama a la función 'calcularCuota()'.");
console.log("También puedes utilizar la función 'filtrarPorMes(mes)' para filtrar los detalles de las cuotas por mes.");

calcularCuota()
