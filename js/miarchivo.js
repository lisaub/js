// Calcular cuota mensual
function calcularCuota() {
  const montoPrestamo = parseFloat(prompt("Ingresa el monto del préstamo:"));
  const meses = parseInt(prompt("Ingresa el número de meses:"));

  if (isNaN(montoPrestamo) || isNaN(meses) || montoPrestamo <= 0 || meses <= 0) {
    console.warn("Entrada inválida. Por favor, ingresa números válidos.");
    return;
  }

  const tasaInteres = 0.05;
  const tasaInteresMensual = tasaInteres / 12;

  const cuotaMensual = montoPrestamo * (tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -meses)));

  console.log("Cuotas Mensuales:");
  let mes = 1;
  let montoRestante = montoPrestamo;

  const detallesCuotas = []; 

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

console.log("Para usar la Calculadora de Préstamos, por favor llama a la función 'calcularCuota()'.");

calcularCuota()
