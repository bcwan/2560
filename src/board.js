class Board {
  constructor() {
    this.grid = Board.makeGrid();
  }

  makeGrid() {
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

  


}