function guardarLocal (detallesCuotas, montoPrestamo, meses, tasaInteres, descripcion, fechaActual) {
    // Store the data in local storage
    localStorage.setItem("detallesCuotas", JSON.stringify(detallesCuotas));
    localStorage.setItem("montoPrestamo", montoPrestamo);
    localStorage.setItem("meses", meses);
    localStorage.setItem("tasaInteres", tasaInteres);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("fechaActual", fechaActual);
}

export { guardarLocal };