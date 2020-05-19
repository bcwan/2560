let Board = require("./board"); 

class Game {
  constructor() {
    this.board = new Board();
    this.setUpBoard();
  }

  setUpBoard() {
    const grid = document.getElementById("grid");
    for (let i = 0; i < this.board.grid.length; i++) {
      let row = document.createElement("div");
      row.className = `row row-${i}`;
      for (let j = 0; j < this.board.grid[i].length; j++) {
        let square = document.createElement("div");
        square.className = `square square-${i}-${j}`;
        row.appendChild(square);
      }
      grid.appendChild(row);
    }
  }

}

module.exports = Game;