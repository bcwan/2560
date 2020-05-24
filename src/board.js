class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  static makeGrid() {
    const grid = [];
    for (let i = 0; i < 5; i++) {
      grid.push([]);
      for (let j = 0; j < 5; j++) {
        grid[i].push(null);
      }
    }
    return grid;
  }

  isEmptyPos(pos) {
    if (!Board.isValidPos(pos))
      throw `Invalid position x: ${pos[0]}, y: ${pos[1]}`;
    return (this.grid[pos[0]][pos[1]] === null);
  }

  static isValidPos(pos) {
    return ((0 <= pos[0]) && (pos[0] < 5) && (0 <= pos[1]) && (pos[1] < 5));
  }

  currentScore() {
    let score = 0;
    for(let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] !== null) {
          score += this.grid[i][j];
        }
      }
    }
    return score;
  }

  clearBoard() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] !== null) {
          this.grid[i][j] = null;
        }
      }
    }
  }

  lastEmptyPosUp(posClass) {
    let pos = posClass.split("-");

    let row = pos[1] - 1;
    let currentCol = pos[2];
    // find best empty position going up
    while (row > 0) {
      if (this.grid[row][currentCol] === null) {
        row--;
      } else {
        return row + 1;
      }
    }
    return 0;
  }

  lastEmptyPosDown(posClass) {
    let pos = posClass.split("-");

    let row = pos[1] + 1;
    let currentCol = pos[2];
    

    return bestEmptyPos;
  }

  lastEmptyPosLeft(posClass) {

  }

  lastEmptyPosRight(posClass) {

  }

}




module.exports = Board;