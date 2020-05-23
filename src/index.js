//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    let testBlock = new Block();
    let blockContainer = document.querySelector("#block-container");
    blockContainer.appendChild(testBlock.block);
    debugger;
    testBlock.block.classList.add("grid-4-4");
    // debugger;
    // testBlock.block.classList.remove("grid-4-4");
    debugger;
    testBlock.block.classList.add("grid-0-4");
    testBlock.block.classList.remove("grid-4-4");

    
});

