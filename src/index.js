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
                testBlock.moveHorizontalLeft();
                break;
            // right
            case 39:  
                testBlock.moveHorizontalRight();
                break;
            // up
            case 38:  
                testBlock.moveVerticalUp();
                break;
            // down
            case 40: 
                testBlock.moveVerticalDown();
                break;
        }
    }

    window.onkeydown = onKeyPressed;
    
});

