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
  // pass in coordinates of block on grid
  constructor(pos) {
    this.number = 5;
    this.color = COLORS_BY_NUMBER[this.number];
    this.position = pos;
  }


  updateNumber() {
    this.number *= 2;
    if (COLORS_BY_NUMBER[this.number]) {
      this.color = COLORS_BY_NUMBER[this.number];
    }
  }

  setPosition() {
    let block = document.createElement("div");
    block.className = "block";
    document.getElementsByClassName('block')[0]
            .style
            .backgroundColor = this.color;
    let blockNum = document.createElement("p");
    block.className = "block-num";
    document.getElementsByClassName("block-num")
            .innerHTML = this.number;
  }

  deleteBlock() {

  }

}

module.exports = Block;