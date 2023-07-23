import { calcularCuota } from './calcularCuota.js';

console.log("Para usar la Calculadora de Préstamos, por favor llama a la función 'calcularCuota()'.");
console.log("También puedes utilizar la función 'filtrarPorMes(mes)' para filtrar los detalles de las cuotas por mes.");

// Calcular cuota mensual

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  calcularCuota();
});