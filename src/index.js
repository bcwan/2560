//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    let testBlock = new Block([105, 105]);
    let grid = document.querySelector("#grid");
    grid.appendChild(testBlock.block);
})