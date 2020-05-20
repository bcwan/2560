//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    let block1 = new Block();
    let grid = document.querySelector("#grid");
    grid.appendChild(block1.block);
})