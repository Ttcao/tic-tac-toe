// create the board
var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// mark refers to player
var crossMark = "X";
var noughtMark = "O";

// show board output on console
var boardOutput = function() {
    console.log((gameBoard[0] + " " + gameBoard[1] + " " + gameBoard[2] + "\n" + gameBoard[3] + " " + gameBoard[4] + " " + gameBoard[5] + "\n" + gameBoard[6] + " " + gameBoard[7] + " " + gameBoard[8]));
}

// gameplay - places the mark on the board
var placeMark = function(index, mark) {
    gameBoard[index] = mark;
    boardOutput();
    checkWinner();
}

// checks winner
var checkWinner = function() {
    return winRow() || winColumn() || winDiagonal();
}

var winRow = function() {
    if ((gameBoard[0] && gameBoard[1] && gameBoard[2]) === (crossMark)) {
        console.log("winner");
    } else if ((gameBoard[0] && gameBoard[1] && gameBoard[2]) === (noughtMark)) {
        console.log("winner");
    }
    if ((gameBoard[3] && gameBoard[4] && gameBoard[5]) === (crossMark)) {
        console.log("winner");
    } else if ((gameBoard[3] && gameBoard[4] && gameBoard[5]) === (noughtMark)) {
        console.log("winner");
    }
    if ((gameBoard[6] && gameBoard[7] && gameBoard[8]) === (crossMark)) {
        console.log("winner");
    } else if ((gameBoard[6] && gameBoard[7] && gameBoard[8]) === (noughtMark)) {
        console.log("winner");
    }
}

var winColumn = function() {
    if ((gameBoard[0] && gameBoard[3] && gameBoard[6]) === (crossMark || noughtMark)) {
        console.log("winner");
    } else if ((gameBoard[0] && gameBoard[3] && gameBoard[6]) === (noughtMark)) {
        console.log("winner");
    }
    if ((gameBoard[1] && gameBoard[4] && gameBoard[7]) === (crossMark || noughtMark)) {
        console.log("winner");
    } else if ((gameBoard[1] && gameBoard[4] && gameBoard[7]) === (noughtMark)) {
        console.log("winner");
    }
    if ((gameBoard[2] && gameBoard[5] && gameBoard[8]) === (crossMark || noughtMark)) {
        console.log("winner");
    } else if ((gameBoard[2] && gameBoard[5] && gameBoard[8]) === (noughtMark)) {
        console.log("winner");
    }
}

var winDiagonal = function() {
    if ((gameBoard[0] && gameBoard[4] && gameBoard[8]) === (crossMark || noughtMark)) {
        console.log("winner");
    } else if ((gameBoard[0] && gameBoard[4] && gameBoard[8]) === (noughtMark)) {
        console.log("winner");
    }
    if ((gameBoard[2] && gameBoard[4] && gameBoard[6]) === (crossMark || noughtMark)) {
        console.log("winner");
    } else if ((gameBoard[2] && gameBoard[4] && gameBoard[6]) === (noughtMark)) {
        console.log("winner");
    }
}

// reset board
