let Board = require("./board"); 

class Game {
  constructor() {
    this.board = new Board();
  }

  // let header = document.createElement("li");
  // header.textContent = "2560 rules!"
  // grid.appendChild(header);
  setUpBoard() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < this.board.grid.length; i++) {
      let row = document.createElement("ul");
      row.className = `row row-${i}`;
      for (let j = 0; j < this.board.grid[i].length; j++) {
        let block = document.createElement("li");
        block.className = `block block-${i}-${j}`;
        block.textContent = `Block - ${i} - ${j}`;
        row.appendChild(block);
      }
      grid.appendChild(row);
    }
  }

}

module.exports = Game;