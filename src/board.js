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

}

const COOR_TO_GRID = {
  "grid-0-0": { "x": 0, "y": 0 },
  "grid-0-1": { "x": 0, "y": 1 },
  "grid-0-2": { "x": 0, "y": 2 },
  "grid-0-3": { "x": 0, "y": 3 },
  "grid-0-4": { "x": 0, "y": 4 },
  "grid-1-0": { "x": 1, "y": 0 },
  "grid-1-1": { "x": 1, "y": 1 },
  "grid-1-2": { "x": 1, "y": 2 },
  "grid-1-3": { "x": 1, "y": 3 },
  "grid-1-4": { "x": 1, "y": 4 },
  "grid-2-0": { "x": 2, "y": 0 },
  "grid-2-1": { "x": 2, "y": 1 },
  "grid-2-2": { "x": 2, "y": 2 },
  "grid-2-3": { "x": 2, "y": 3 },
  "grid-2-4": { "x": 2, "y": 4 },
  "grid-3-0": { "x": 3, "y": 0 },
  "grid-3-1": { "x": 3, "y": 1 },
  "grid-3-2": { "x": 3, "y": 2 },
  "grid-3-3": { "x": 3, "y": 3 },
  "grid-3-4": { "x": 3, "y": 4 },
  "grid-4-0": { "x": 4, "y": 0 },
  "grid-4-1": { "x": 4, "y": 1 },
  "grid-4-2": { "x": 4, "y": 2 },
  "grid-4-3": { "x": 4, "y": 3 },
  "grid-4-4": { "x": 4, "y": 4 },
};




module.exports = Board;