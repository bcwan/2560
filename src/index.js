//console.log("Webpack is working!");
let Game = require("./game"); 
let Block = require("./block");

document.addEventListener("DOMContentLoaded", function () {
    const game = new Game();
    
    let blockContainer = document.querySelector("#block-container");
    // test code
    let testBlock = new Block([0, 0], 5);
    game.board.grid[0][0] = testBlock;
    blockContainer.appendChild(testBlock.block);

    let testBlock2 = new Block([0, 1], 6);
    game.board.grid[0][1] = testBlock2;
    blockContainer.appendChild(testBlock2.block);

    let testBlock3 = new Block([1, 0], 7);
    game.board.grid[1][0] = testBlock3;
    blockContainer.appendChild(testBlock3.block);

    function onKeyPressed (event) {

        switch (event.which) {
            case 37: 
                game.updateBoardMovementLeftUp("left");
                console.log(game.board.grid);
                break;
            case 39:  
                game.updateBoardMovementRightDown("right");
                console.log(game.board.grid);
                break;
            case 38:  
                game.updateBoardMovementLeftUp("up");
                console.log(game.board.grid);
                break;
            case 40: 
                game.updateBoardMovementRightDown("down");
                console.log(game.board.grid);
                break;
        }
    }

    window.onkeydown = onKeyPressed;
    
});

