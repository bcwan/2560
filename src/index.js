//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    let testBlock = new Block();
    let blockContainer = document.querySelector("#block-container");
    blockContainer.appendChild(testBlock.block);

    function onKeyPressed (event) {

        switch (event.which) {
            // left
            case 37: 
                testBlock.updateClassPosition(2, 0);
                break;
            // right
            case 39:  
                testBlock.updateClassPosition(2, 4);
                break;
            // up
            case 38:  
                testBlock.updateClassPosition(1, 0);
                break;
            // down
            case 40: 
                testBlock.updateClassPosition(1, 4);
                break;
        }
    }

    window.onkeydown = onKeyPressed;
    
});

