//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    let testBlock = new Block([15, 375]);
    let grid = document.querySelector("#grid");
    grid.appendChild(testBlock.block);
    setTimeout(() => {
        testBlock.slideHorizontal([15, 105])
    }, 1500);
    
})