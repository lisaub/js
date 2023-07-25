import {sweetAlert} from './sweetAlert.js';

function validarInput(montoPrestamo, meses, tasaInteres) {
  return (isNaN(montoPrestamo) || isNaN(meses) || !(meses >= 1 && meses <= 60) || montoPrestamo <= 0 || meses <= 0 || isNaN(tasaInteres)) ? (console.warn("⛔ Entrada inválida. Por favor, ingresa números válidos."),
  sweetAlert()) : true;

  // if (isNaN(montoPrestamo) || isNaN(meses) || !(meses >= 1 && meses <= 60) ||montoPrestamo <= 0 || meses <= 0 || isNaN(tasaInteres)) {
  //     console.warn("Entrada inválida. Por favor, ingresa números válidos.");
  //     alert("Entrada inválida. Por favor, ingresa números válidos.");
  //   } else {
  //     return true;
  //   }
}

  export { validarInput };