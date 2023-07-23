// Guardar cuota / Ejemplo con "this"
// function DetalleCuotaExtra(descripcion, data) {
//     this.descripcion = descripcion;
//     this.data = data;
// }
// function guardarCuota(descripcion, data) {
//     const cuota = new DetalleCuotaExtra(descripcion, data);
//     cuotasGuardadas.push(cuota);
// }

function guardarCuota(descripcion, detallesCuotas) {
    const cuotasConDescripcion = detallesCuotas.map(detalle => ({ ...detalle, descripcion }));
    cuotasGuardadas.push(cuotasConDescripcion);
}

export { guardarCuota };