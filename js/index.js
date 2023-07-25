import { calcularCuota } from './calcularCuota.js';

//console.log("Para usar la Calculadora de Préstamos, por favor llama a la función 'calcularCuota()'.");

// Calcular cuota mensual

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  Swal.fire({
    title: "Deseas calcular la cuota?",
    showCancelButton: true,
    confirmButtonText: "Si, calcular!",
    cancelButtonText: "No!"
  }).then((result) => {
    if (result.isConfirmed) {
      calcularCuota();
      const timer = parseInt(Math.random() * 4000);
      const calcularButton = document.querySelector("#calcular");
      const loader = document.createElement("div");
      loader.classList.add("loader");
      calcularButton.replaceWith(loader);
      // document.querySelector("#calcular").innerHTML = "Calculando..."
    
      setTimeout(()=>{
        calcularCuota();
        // document.querySelector("#calcular").innerHTML = "Calcular";
        loader.replaceWith(calcularButton);
      }, timer)
    }
  });
});