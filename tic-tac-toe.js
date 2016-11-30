// create the board
var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// mark refers to player
var crossMark = "X";
var noughtMark = "O";
var numOfturns = 0;

// show board output on console
var boardOutput = function() {
    console.log((gameBoard[0] + " " + gameBoard[1] + " " + gameBoard[2] + "\n" + gameBoard[3] + " " + gameBoard[4] + " " + gameBoard[5] + "\n" + gameBoard[6] + " " + gameBoard[7] + " " + gameBoard[8]));
}

// gameplay - places the mark on the board and alternates players
var placeMark = function(event) {
    var clickedElement = event.target;
    var index = clickedElement.getAttribute('value');
    placeValue(index);
    numOfturns++;
    event.target.innerHTML = '<img src="images/X-mark.png" alt="X"/>';

    if (numOfturns % 2 == 0) {
      event.target.innerHTML = '<img src="images/O-mark.png" alt="O"/>';
    }
}

var placeValue = function(index) {
    if ((gameBoard[index] == 0)) {
      gameBoard[index] = "O";
    }
    if (numOfturns % 2 == 0) {
      gameBoard[index] = "X";
    }
    boardOutput();
    checkWinner();
    // checkDraw();
}

// // checks draw // if board is full
// var checkDraw = function() {
//     if ((gameBoard[0] !== 0) && (gameBoard[1] !== 0) && (gameBoard[2] !== 0) && (gameBoard[3] !== 0) && (gameBoard[4] !== 0) && (gameBoard[5] !== 0) && (gameBoard[6] !== 0) && (gameBoard[7] !== 0) && (gameBoard[8] !== 0)) {
//         console.log("It's a draw!")
//     }
// }

// checks winner
var checkWinner = function() {
    if ((winRow() == true) || (winColumn() == true) || (winDiagonal() == true)) {
        return resultTextDOMelement.innerHTML = "Winner";
    }
}

var winRow = function() {
    if ((gameBoard[0] === crossMark) && (gameBoard[1] === crossMark) && (gameBoard[2] === crossMark)) {
        return true;
    } else if ((gameBoard[0] === noughtMark) && (gameBoard[1] === noughtMark) && (gameBoard[2] === noughtMark)) {
        return true;
    }
    if ((gameBoard[3] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[5] === crossMark)) {
        return true;
    } else if ((gameBoard[3] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[5] === noughtMark)) {
        return true;
    }
    if ((gameBoard[6] === crossMark) && (gameBoard[7] === crossMark) && (gameBoard[8] === crossMark)) {
        return true;
    } else if ((gameBoard[6] === noughtMark) && (gameBoard[7] === noughtMark) && (gameBoard[8] === noughtMark)) {
        return true;
    }
}

var winColumn = function() {
    if ((gameBoard[0] === crossMark) && (gameBoard[3] === crossMark) && (gameBoard[6] === crossMark)) {
        return true;
    } else if ((gameBoard[0] === noughtMark) && (gameBoard[3] === noughtMark) && (gameBoard[6] === noughtMark)) {
        return true;
    }
    if ((gameBoard[1] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[7] === crossMark)) {
        return true;
    } else if ((gameBoard[1] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[7] === noughtMark)) {
        return true;
    }
    if ((gameBoard[2] === crossMark) && (gameBoard[5] === crossMark) && (gameBoard[8] === crossMark)) {
        return true;
    } else if ((gameBoard[2] === noughtMark) && (gameBoard[5] === noughtMark) && (gameBoard[8] === noughtMark)) {
        return true;
    }
}

var winDiagonal = function() {
    if ((gameBoard[0] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[8] === crossMark)) {
        return true;
    } else if ((gameBoard[0] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[8] === noughtMark)) {
        return true;
    }
    if ((gameBoard[2] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[6] === crossMark)) {
        return true;
    } else if ((gameBoard[2] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[6] === noughtMark)) {
        return true;
    }
}

// resets the board
var newGame = function() {
    for (var index = 0; index < gameBoard.length; index++) {
        gameBoard[index] = 0;
    }
    numOfturns = 0;
    boardOutput();
}

// UI

var boardDOMelement = document.getElementById('new-game');
boardDOMelement.addEventListener('click', newGame);

var tileDOMelements = document.getElementsByClassName('tile');
var arrTileDOMelements = Array.prototype.slice.call(tileDOMelements)
arrTileDOMelements.forEach(function(tile) {
  tile.addEventListener('click', placeMark);
})

var resultTextDOMelement = document.getElementById('result-text');
