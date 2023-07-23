import { getInputValues } from './variablesInput.js';
import { clearTable } from './clearTable.js';
import { validarInput } from './validarInput.js';
import { cuotaMensualCalc } from './cuotaMensualCalc.js';
import { guardarCuota } from './guardarCuota.js';
import { guardarLocal } from './guardarLocal.js';
import { tablaHTML } from './tablaHTML.js';

function calcularCuota() {
  let detallesCuotas = []; 

  const { montoPrestamo, meses, tasaInteres, descripcion } = getInputValues();

  clearTable()

  if (validarInput(montoPrestamo, meses, tasaInteres)) {
    console.log("Valores de entrada: \nNúmero de meses: " + meses + " - Fecha Actual: " + fechaActual.toLocaleDateString() + " - Tasa de interés: " + tasaInteres + "%" + " - Monto del préstamo: $ " + montoPrestamo);

    cuotaMensualCalc(montoPrestamo, meses, tasaInteres, detallesCuotas);
  
    guardarCuota(descripcion, detallesCuotas);
  
    console.log("Detalles de las cuotas:", detallesCuotas);
    console.table(detallesCuotas);
  
    guardarLocal(detallesCuotas, montoPrestamo, meses, tasaInteres, descripcion)
  
    tablaHTML(detallesCuotas, descripcion)
    
    detallesCuotas = [];
  } else {
    
  }    
}

  export { calcularCuota };