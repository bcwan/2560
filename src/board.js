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
    return (this.grid[pos[0]][pos[1]] === null);
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
          this.grid[i][j] == null;
        }
      }
    }
  }

}