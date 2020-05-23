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
    
    console.log(game.board);
    function onKeyPressed (event) {

        switch (event.which) {
            // left
            case 37: 
                //testBlock.updateClassPosition(2, 0);
                game.updateBoardMovement("left");
                console.log(game.board.grid);
                break;
            // right
            case 39:  
                //testBlock.updateClassPosition(2, 4);
                game.updateBoardMovement("right");
                console.log(game.board.grid);
                break;
            // up
            case 38:  
                //testBlock.updateClassPosition(1, 0);
                game.updateBoardMovement("up");
                console.log(game.board.grid);
                break;
            // down
            case 40: 
                //testBlock.updateClassPosition(1, 4);
                game.updateBoardMovement("down");
                console.log(game.board.grid);
                break;
        }
    }

    window.onkeydown = onKeyPressed;
    
});

