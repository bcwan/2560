//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    // test code
    let testBlock = new Block();
    game.board.grid[0][0] = testBlock;
    let blockContainer = document.querySelector("#block-container");
    blockContainer.appendChild(testBlock.block);
    

    function onKeyPressed (event) {

        switch (event.which) {
            case 37: 
                game.updateBoardMovement("left");
                break;
            case 39:  
                game.updateBoardMovement("right");
                break;
            case 38:  
                game.updateBoardMovement("up");
                break;
            case 40: 
                game.updateBoardMovement("down");
                break;
        }
    }

    window.onkeydown = onKeyPressed;
    
});

