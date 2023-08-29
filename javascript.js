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
}

createGrid();

function fillSquare() {
  console.log(this);
  this.classList.add('hovered');
}

let squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('mouseover', fillSquare));

const editBtn = document.querySelector('.editButton');

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
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', fillSquare));
  };
}

editBtn.addEventListener('click', editGrid);

