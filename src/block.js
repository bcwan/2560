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
    this.positionClass = "grid-0-0";
    this.createBlock();
  }


  updateNumber() {
    this.number *= 2;
    if (COLORS_BY_NUMBER[this.number]) {
      this.color = COLORS_BY_NUMBER[this.number];
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
    blockNum.textColor = this.textColor;

    return blockNum;
  }

  // // test moving algorithm
  // // help with DRY code for changing positions
  // updateClassPosition (indexToChange, number) {
  //   let parseClass = this.positionClass.split("-");
  //   parseClass[indexToChange] = number.toString();
  //   parseClass = parseClass.join("-");

  //   this.block.className = "";
  //   this.block.classList.add(parseClass);
  //   this.positionClass = parseClass;
  // }
}

module.exports = Block;