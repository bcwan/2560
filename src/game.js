let Board = require("./board"); 
let Block = require('./block');

class Game {
  constructor() {
    this.board = new Board();
    this.setUpBoard();
    this.setUpBlockContainer();
  }

  setUpBoard() {  
    const grid = document.createElement("div");
    grid.id = "grid-container";

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

    document.getElementById("board").appendChild(grid);
  }

  setUpBlockContainer() {
    const blockContainer = document.createElement('div');
    blockContainer.id = "block-container";
    document.getElementById("board").appendChild(blockContainer);
  }


  // returns the class with the transform position
  // moveVerticalUp (classPos) {
  //   let parseClass = classPos.split("-");

  // }

  // moveVerticalDown (classPos) {
  //   let parseClass = classPos.split("-");
  // }

  // moveHorizontalLeft (classPos) {
  //   let parseClass = classPos.split("-");
  // }
 
  // moveHorizontalRight (classPos) {
  //   let parseClass = classPos.split("-");
  // }

}

module.exports = Game;