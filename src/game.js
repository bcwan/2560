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
    // add two initial blocks
    this.addNewBlock();
    this.addNewBlock();
  }

  addNewBlock () {
    let blockContainer = document.getElementById('block-container');
    let randRow = Math.floor(Math.random() * 5);
    let randCol = Math.floor(Math.random() * 5);
    let added = false;
    while (!added){
      if (this.board.isEmptyPos([randRow, randCol])) {
        let newBlock = new Block([randRow, randCol], 5);
        this.board.grid[randRow][randCol] = newBlock;
        blockContainer.appendChild(newBlock.block);
        added = true;
      } else {
        randRow = Math.floor(Math.random() * 5);
        randCol = Math.floor(Math.random() * 5);
      }
    }
  }

  // only works for up, left
  updateBoardMovementLeftUp(direction) {
    for (let row = 0; row < this.board.grid.length; row++) {
      for (let col = 0; col < this.board.grid[row].length; col++) {

        let blk = this.board.grid[row][col];
        if (blk !== null) {
          switch(direction) {
            case "up":
              this.updateClassPosition(blk, 1, 
                this.board.lastEmptyPosUp(blk.positionClass)
              );
              break;
            case "left":
              this.updateClassPosition(blk, 2, 
                this.board.lastEmptyPosLeft(blk.positionClass)
              );
              break;
          }
        }

      }
    }
  }

  // works for down and right
  updateBoardMovementRightDown(direction) {
    for (let row = this.board.grid.length - 1; row >= 0; row--) {
      for (let col = this.board.grid[row].length - 1; col >= 0; col--) {
        let blk = this.board.grid[row][col];
        if (blk !== null) {
          switch (direction) {
            case "right":
              this.mergeBlockRight(blk.positionClass)
              this.updateClassPosition(blk, 2,
                this.board.lastEmptyPosRight(blk.positionClass)
              );
              break
            case "down":
              this.updateClassPosition(blk, 1,
                this.board.lastEmptyPosDown(blk.positionClass)
              );
              break;
          }
        }

      }
    }
  }

  updateClassPosition(blk, indexToChange, number) {
    let parseClass = blk.positionClass.split("-");

    let oldX = parseClass[1];
    let oldY = parseClass[2];

    parseClass[indexToChange] = number.toString();

    let newX = parseClass[1];
    let newY = parseClass[2];

    parseClass = parseClass.join("-");

    this.updateGridPosition(oldX, oldY, newX, newY);

    blk.block.className = "";
    blk.block.classList.add(parseClass);
    blk.positionClass = parseClass;
  }

  updateGridPosition(oldX, oldY, newX, newY) {
    let block = this.board.grid[oldX][oldY];
    this.board.grid[oldX][oldY] = null;
    this.board.grid[newX][newY] = block;
  }

  //merging

  mergeBlockRight(posClass) {
    //find the closest block
    let pos = posClass.split("-");
    let currentRow = parseInt(pos[1]);
    let col = parseInt(pos[2]);
    let currentBlock = this.board.grid[currentRow][col];

    let oldCol = col;
    col = col + 1;
    let oldRow = currentRow;
    let nextBlock = null;

    while (col < this.board.grid[currentRow].length) {
      if (this.board.grid[currentRow][col] === null) {
        col++;
      } else {
        nextBlock = this.board.grid[currentRow][col];
        break;
      }
    }

    if (nextBlock !== null && currentBlock.number === nextBlock.number) {
      // delete current block

      console.log(`Before remove div: ${this.board.grid}`);
      let currentNextBlockNumber = nextBlock.number;

      currentBlock.block.remove();
      this.board.grid[oldRow][oldCol] = null;

      nextBlock.block.remove();
      this.board.grid[currentRow][col] = null;

      // add new block in place of old one
      let upgradedBlock = new Block([currentRow, col], currentNextBlockNumber * 2);
      this.board.grid[currentRow][col] = upgradedBlock;
      console.log(`After remove div: ${this.board.grid}`);

      let blockContainer = document.getElementById('block-container');
      blockContainer.appendChild(upgradedBlock.block);
    }
  }



  mergeBlockLeft() {

  }

  mergeBlockUp() {

  }

  mergeBlockDown() {

  }
 

}

module.exports = Game;