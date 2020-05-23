let Board = require("./board"); 
let Block = require('./block');

const BOARD_TO_GRID = {
  "0,0": "grid-0-0",
  "0,1": "grid-0-1",
  "0,2": "grid-0-2",
  "0,3": "grid-0-3",
  "0,4": "grid-0-4",
  "1,0": "grid-1-0",
  "1,1": "grid-1-1",
  "1,2": "grid-1-2",
  "1,3": "grid-1-3",
  "1,4": "grid-1-4",
  "2,0": "grid-2-0",
  "2,1": "grid-2-1",
  "2,2": "grid-2-2",
  "2,3": "grid-2-3",
  "2,4": "grid-2-4",
  "3,0": "grid-3-0",
  "3,1": "grid-3-1",
  "3,2": "grid-3-2",
  "3,3": "grid-3-3",
  "3,4": "grid-3-4",
  "4,0": "grid-4-0",
  "4,1": "grid-4-1",
  "4,2": "grid-4-2",
  "4,3": "grid-4-3",
  "4,4": "grid-4-4"
};

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