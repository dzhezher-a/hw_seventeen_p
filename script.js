const buttonGenerate = document.querySelector(".btn-generate");
const buttonDelete = document.querySelector(".btn-delete");

buttonGenerate.addEventListener("click", generateMultiplicationTable);
buttonDelete.addEventListener("click", deleteMultiplicationTable);

function generateMultiplicationTable() {
  const table = document.createElement("table");
  const tableContainer = document.querySelector(".table-container");

  for (let i = 1; i < 11; i++) {
    let addRow = table.insertRow();
    let addCell = addRow.insertCell();
    addCell.textContent = i;
    for (j = 2; j < 11; j++) {
      let addCell = addRow.insertCell();
      addCell.textContent = i * j;
    }
  }

  tableContainer.appendChild(table);
}

function deleteMultiplicationTable() {
  const table = document.querySelector("table");

  table.remove();
}
