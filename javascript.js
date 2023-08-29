const container = document.querySelector('.container');

function createGrid(amountSquares = 16) {
  for (let i = 1; i <= amountSquares; i++) {
    let row = document.createElement('div');
    container.appendChild(row);
    row.classList.add('row');
    for (let i = 1; i <= amountSquares; i++) {
      let square = document.createElement('div');
      row.appendChild(square);
      square.classList.add('square');
    }
  }
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', fillSquare));
}

createGrid();

function fillSquare() {
  this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

function clearGrid() {
  container.innerHTML = '';
}

function editGrid() {
  const userChoice = +prompt("How many squares would you like per side? (min: 2, max: 100)");
  if (userChoice < 2 || userChoice > 100) {
    alert('Input Cancelled');
  } else {
    clearGrid();
    createGrid(userChoice);
  };
}

const editBtn = document.querySelector('.editButton');
editBtn.addEventListener('click', editGrid);

