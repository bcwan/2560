//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    let grid = document.querySelector("#grid");
    let block = new Block();
    console.log(grid);
    block.setPosition(grid);
})