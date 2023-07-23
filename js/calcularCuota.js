import { getInputValues } from './variablesInput.js';
import { clearTable } from './clearTable.js';
import { validarInput } from './validarInput.js';
import { cuotaMensualCalc } from './cuotaMensualCalc.js';
import { guardarCuota } from './guardarCuota.js';
import { guardarLocal } from './guardarLocal.js';
import { tablaHTML } from './tablaHTML.js';

function calcularCuota() {
  let detallesCuotas = []; 

  const { fechaActual, montoPrestamo, meses, tasaInteres, descripcion } = getInputValues();
  const fechaActualDate = new Date(fechaActual);

  clearTable()

  if (validarInput(montoPrestamo, meses, tasaInteres)) {
    console.log("Valores de entrada: \nNúmero de meses: " + meses + " - Fecha Actual: " + fechaActualDate.toLocaleDateString() + " - Tasa de interés: " + tasaInteres + "%" + " - Monto del préstamo: $ " + montoPrestamo);

    cuotaMensualCalc(fechaActualDate, montoPrestamo, meses, tasaInteres, detallesCuotas);
  
    guardarCuota(descripcion, detallesCuotas);
  
    console.log("Detalles de las cuotas:", detallesCuotas);
    console.table(detallesCuotas);
  
    guardarLocal(detallesCuotas, montoPrestamo, meses, tasaInteres, descripcion, fechaActualDate)
  
    tablaHTML(detallesCuotas, descripcion)
    
    detallesCuotas = [];
  } else {}    
}

export { calcularCuota };