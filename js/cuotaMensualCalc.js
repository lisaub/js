function cuotaMensualCalc(montoPrestamo, meses, tasaInteres, detallesCuotas) {
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
}

export { cuotaMensualCalc };