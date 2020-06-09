const COLORS_BY_NUMBER = {
  5: "#DDEFE9",
  10: "#CEE2DC",
  20: "#A4DECB",
  40: "#97D297",
  80: "#78BBFFAD",
  160: "#449FFBA1",
  320: "#D5F181",
  640: "#C1FF00",
  1280: "#F0E68C",
  2560: "#FFD700"
};

// the first numbers places will determine the font-size
const FONT_SIZE_BY_NUMBER = {
  5: "45px",
  1280: "32px",
  10240: "25px",
  163840: "22px"
};

class Block {
  // pass in coordinates of block on grid
  constructor(pos, number) {
    this.number = number;
    //this.color = COLORS_BY_NUMBER[this.number];
    this.color = this.colorByNumber(this.number);
    this.textColor = "#000000";
    //this.fontSize = 
    this.block = document.createElement("div");
    this.row = pos[0];
    this.column = pos[1];
    this.positionClass = `grid-${pos[0]}-${pos[1]}`;
    this.createBlock();
  }

  colorByNumber(number) {
    if (COLORS_BY_NUMBER[number]) {
      return COLORS_BY_NUMBER[number];
    } else {
      return "#FF8C00";
    }
  }

  fontSizeByNumber(number) {
    if (FONT_SIZE_BY_NUMBER[number]) {
      return FONT_SIZE_BY_NUMBER[number];
    } else {
      return "20px";
    }
  }

  createBlock() {
    this.block.id = "block";
    this.block.style.backgroundColor = this.color;
    this.block.classList.add(this.positionClass);
    this.block.appendChild(this.createBlockNumber(this.number));

  }

  createBlockNumber(number) {
    let blockNum = document.createElement("p");
    blockNum.id = "block-num";
    blockNum.innerHTML = number;
    blockNum.style.fontSize = FONT_SIZE_BY_NUMBER[number];
    blockNum.textColor = this.textColor;
    return blockNum;
  }


}

module.exports = Block;