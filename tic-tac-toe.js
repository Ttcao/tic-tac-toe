// create the board
var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// mark refers to player
var crossMark = "X";
var noughtMark = "O";
var numOfturns = 0;

// gameplay - places the mark on the board and alternates players
var placeMark = function(event) {
    var clickedElement = event.target;
    //disables click event listener of target
    clickedElement.removeEventListener('click', placeMark);
    var index = clickedElement.getAttribute('value');

    placeValue(index);

    numOfturns++;
    event.target.innerHTML = '<img src="images/pacman.png" alt="pacman"/>';

    if (numOfturns % 2 == 0) {
        event.target.innerHTML = '<img src="images/ghost.png" alt="ghost"/>';
    }
}

var placeValue = function(index) {
    if ((gameBoard[index] == 0)) {
        gameBoard[index] = "O";
    }
    if (numOfturns % 2 == 0) {
        gameBoard[index] = "X";

    }
    checkResult();
}

// checks win
var checkResult = function() {
    if ((winRow() == true) || (winColumn() == true) || (winDiagonal() == true)) {
        resultTextDOMelement.innerHTML = "You Win!";

        // stops game play by disabling 'click' event listener on tiles
        arrTileDOMelements.forEach(function(tile) {
            tile.removeEventListener('click', placeMark);
        })
    } else {
      checkDraw();
    }
}

// //checks draw // if board is full
var checkDraw = function() {
    if ((gameBoard[0] !== 0) && (gameBoard[1] !== 0) && (gameBoard[2] !== 0) && (gameBoard[3] !== 0) && (gameBoard[4] !== 0) && (gameBoard[5] !== 0) && (gameBoard[6] !== 0) && (gameBoard[7] !== 0) && (gameBoard[8] !== 0)) {
        resultTextDOMelement.innerHTML = "It's a draw!";
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
        gameBoard[index] = null;
        location.reload();
      }
    // resultTextDOMelement.innerHTML = "";
    // arrTileDOMelements.forEach(function(tile) {
    //     tile.innerHTML = "";
    // })
    numOfturns = 0;
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
resultTextDOMelement.className = "blink";
