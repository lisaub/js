import { clearTable } from './clearTable.js';

// Clear form
function clearForm() {
    document.getElementById("montoPrestamo").value = "";
    document.getElementById("meses").value = "";
    document.getElementById("tasaInteres").value = "";
    document.getElementById("fechaInicio").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("filtroMes").value = "";
    clearTable()
}

const boton = document.querySelector("#borrarForm");
boton.addEventListener("click", clearForm);

export { clearForm };

