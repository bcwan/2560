const COLORS_BY_NUMBER = {
  5: "#DDEFE9",
  10: "#CEE2DC",
  20: "#A4DECB",
  40: "#97D297",
  80: "#78BBFFAD",
  160: "#449FFBA1",
  320: "#D5F181",
  640: "#C1FF00"
};

class Block {
  constructor() {
    this.number = 5;
    this.color = COLORS_BY_NUMBER[this.number];
    this.position = [];
  }


  updateNumber() {
    this.number *= 2;
    if (COLORS_BY_NUMBER[this.number]) {
      this.color = COLORS_BY_NUMBER[this.number];
    }
  }

  deleteBlock() {

  }

}

module.exports = Block;