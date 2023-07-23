export const getInputValues = () => {
    return {
        fechaActual: document.getElementById("fechaInicio").value,
        montoPrestamo: parseFloat(document.getElementById("montoPrestamo").value),
        meses: parseInt(document.getElementById("meses").value),
        tasaInteres: parseFloat(document.getElementById("tasaInteres").value) || 5,
        descripcion: document.getElementById("descripcion").value
    };
}

// const montoPrestamo = parseFloat(document.getElementById("montoPrestamo").value);
// const meses = parseInt(document.getElementById("meses").value);
// const tasaInteres = parseFloat(document.getElementById("tasaInteres").value);
// const descripcion = document.getElementById("descripcion").value;

// const montoPrestamo = parseFloat(prompt("Ingresa el monto del préstamo:"));
// const meses = parseInt(prompt("Ingresa el número de meses (hasta 60):"));
// const tasaInteres = parseFloat(prompt("Ingresa la tasa de interés (porcentaje):"));
// const descripcion = prompt("¿Nombre del prestamo / Para qué es este préstamo?:");