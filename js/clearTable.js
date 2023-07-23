// Clear Table
function clearTable() {
    document.getElementById("filtroMes").value = "";
    const oldTables = document.querySelectorAll("#tablaMostrar");
    if (oldTables) {
      oldTables.forEach((table) => table.remove());
    }
  }

 export { clearTable };
