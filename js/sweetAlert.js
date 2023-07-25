function sweetAlert () {
    Swal.fire({
      title: 'Error!',
      text: '⛔ Entrada inválida. Por favor, ingresa números válidos.',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
}

function ohNo () {
    Swal.fire({
      title: 'Error!',
      text: '⛔ No hay préstamos guardados.',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
}

export { sweetAlert , ohNo};