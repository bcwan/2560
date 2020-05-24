//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    let blockContainer = document.querySelector("#block-container");
    // test code
    let testBlock = new Block([0, 0]);
    game.board.grid[0][0] = testBlock;
    blockContainer.appendChild(testBlock.block);

    let testBlock2 = new Block([0, 1]);
    game.board.grid[0][1] = testBlock2;
    blockContainer.appendChild(testBlock2.block);
    
    console.log(game.board.grid);

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

