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
    this.color = "#C1FF00";//COLORS_BY_NUMBER[this.number];
    this.textColor = "#000000";
    this.block = document.createElement("div");
    this.createBlock(pos);
  }


  updateNumber() {
    this.number *= 2;
    if (COLORS_BY_NUMBER[this.number]) {
      this.color = COLORS_BY_NUMBER[this.number];
    }
  }

  createBlock(pos) {
    this.block.id = "block";
    this.block.style.backgroundColor = this.color;

    this.block.appendChild(this.createBlockNumber(this.number));
    
    this.block.style.top = `${pos[0]}px`;
    this.block.style.left = `${pos[1]}px`;

  }

  createBlockNumber(number) {
    let blockNum = document.createElement("p");
    blockNum.id = "block-num";

    blockNum.innerHTML = number;
    blockNum.textColor = this.textColor;

    return blockNum;
  }

  slideHorizontal(pos) {
    if (pos[0] !== this.block.offsetTop) {
      throw "x-axis positions do not match";
    }

    let translate = pos[1] - this.block.offsetLeft;
    this.block.style.transform = "translateX(" + translate + "px" + ")";

  }

  slideVertical(pos) {
    if (pos[1] !== this.block.offsetLeft) {
      throw "y-axis positions do not match";
    }

    let translate = pos[0] - this.block.offsetTop;
    this.block.style.transform = "translateY(" + translate + "px" + ")";

  }

}

module.exports = Block;