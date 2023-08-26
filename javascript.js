// 16x16 grid of square divs
// 256 squares in total

// maybe need 16 horizontal containers (rows)

const container = document.querySelector('.container');

function createGrid() {
  for (let i = 1; i <= 16; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.classList.add('row');
    for (let i = 1; i <= 16; i++) {
      const square = document.createElement('div');
      row.appendChild(square);
      square.classList.add('square');
    }
  }
}

createGrid();

function fillSquare(e) {
  console.log(this);
  this.classList.add('hovered');
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('mouseover', fillSquare));


