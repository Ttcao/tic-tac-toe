// var board = document.getElementById('game-board');
var wrapperDOMelement = document.getElementById('wrapper');

// mark refers to player
var crossMark = "X";
var noughtMark = "O";
var numOfturns = 0;

// game state
var gameOver = false;
var currentPlayer = true;

// create gameboard data structure
var gameBoard = [];

// board = new Array();

var createBoard = function(){
  var maxRow = 3;
  var maxColumn = 3;
  var startingValue = 0;
  var emptyRow = [];
  for (var i = 0; i < maxColumn; i++){
    emptyRow.push(startingValue); // [0, 0, 0]
  }
  for (var j = 0; j < maxRow; j++){
    gameBoard.push(emptyRow); // push one emptyRow into each row
  }
}

// creates board in UI
var renderBoard = function(){
  var maxTiles = 3;
  for (var i = 0; i < maxTiles; i++){
    var rowElement = document.createElement('div');
    // rowElement.setAttribute('data-value', );
    rowElement.className = 'row';

    for (var j = 0; j < maxTiles; j++) {
      var tileElement = document.createElement('div');
      tileElement.setAttribute('data-row', i);
      tileElement.setAttribute('data-column', j);
      tileElement.className = 'tile';
      tileElement.addEventListener('click', placeMark);
      rowElement.appendChild(tileElement);
    }
    // rows with tiles have been created to append to wrapper - UI.
    wrapperDOMelement.appendChild(rowElement);
  }
}

// gameplay - places the mark on the board and alternates players
var placeMark = function(event) {
    var clickedElement = event.target;
    //disables click event listener of target
    clickedElement.removeEventListener('click', placeMark);
    var indexRow = clickedElement.getAttribute('data-row');
    var indexColumn = clickedElement.getAttribute('data-column');
    // placeValue(indexRow, indexColumn);

    numOfturns++;
    if (numOfturns % 2 !== 0){
      console.log(event.target);
      gameBoard[indexRow][indexColumn] = "X";
      event.target.innerHTML = '<img src="images/pacman.png" alt="pacman"/>';
    }

    else if (numOfturns % 2 == 0) {
        console.log(event.target);
        gameBoard[indexRow][indexColumn] = "O";
        event.target.innerHTML = '<img src="images/ghost.png" alt="ghost"/>';
    }
  checkResult();
}

// var placeValue = function(indexRow, indexColumn) {
//     if ((numOfturns % 2 !== 0)) {
//         gameBoard[indexRow][indexColumn] = "O";
//         // gameBoard[i][j] = gameBoard[indexRow][indexColumn]
//     }
//     if (numOfturns % 2 == 0) {
//         gameBoard[indexRow][indexColumn] = "X";
//     }
//     checkResult();
// }

// checks win
var checkResult = function() {
    if ((winRow() == true) || (winColumn() == true) || (winDiagonal() == true)) {
        resultTextDOMelement.innerHTML = "PacMan Wins!";
        gameOver !== false;

        // stops game play by disabling 'click' event listener on tiles
        arrTileDOMelements.forEach(function(tile) {
            tile.removeEventListener('click', placeMark);
        })
    // } else if ((winRowO() == true) || (winColumnO() == true) || (winDiagonalO() == true)) {
    //     resultTextDOMelement.innerHTML = "Blinky Wins!";

        // stops game play by disabling 'click' event listener on tiles
        arrTileDOMelements.forEach(function(tile) {
            tile.removeEventListener('click', placeMark);
        })
    // } else {
    //     checkDraw();
    }
}

// //checks draw // if board is full
var checkDraw = function() {
    if ((gameBoard[0] !== 0) && (gameBoard[1] !== 0) && (gameBoard[2] !== 0) && (gameBoard[3] !== 0) && (gameBoard[4] !== 0) && (gameBoard[5] !== 0) && (gameBoard[6] !== 0) && (gameBoard[7] !== 0) && (gameBoard[8] !== 0)) {
        resultTextDOMelement.innerHTML = "It's a draw!";
    }
}

var winRow = function() {
    if ((gameBoard[0][0] === gameBoard[0][1] === gameBoard[0][2])) {
        return true;
    }
    if ((gameBoard[1][0] === gameBoard[1][1] === gameBoard[1][0])) {
        return true;
    }
    if ((gameBoard[2][0] === gameBoard[2][1] === gameBoard[2][0])) {
        return true;
    }
}

// var winRowO = function() {
//     if ((gameBoard[0] === noughtMark) && (gameBoard[1] === noughtMark) && (gameBoard[2] === noughtMark)) {
//         return true;
//     }
//     if ((gameBoard[3] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[5] === noughtMark)) {
//         return true;
//     }
//     if ((gameBoard[6] === noughtMark) && (gameBoard[7] === noughtMark) && (gameBoard[8] === noughtMark)) {
//         return true;
//     }
// }

var winColumn = function() {
    if ((gameBoard[0][0] === gameBoard[1][0] === gameBoard[2][0])) {
        return true;
    }
    if ((gameBoard[0][1] === gameBoard[1][1] === gameBoard[2][1])) {
        return true;
    }
    if ((gameBoard[0][2] === gameBoard[1][2] === gameBoard[2][2])) {
        return true;
    }
}

// var winColumnO = function() {
//     if ((gameBoard[0] === noughtMark) && (gameBoard[3] === noughtMark) && (gameBoard[6] === noughtMark)) {
//         return true;
//     }
//     if ((gameBoard[1] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[7] === noughtMark)) {
//         return true;
//     }
//     if ((gameBoard[2] === noughtMark) && (gameBoard[5] === noughtMark) && (gameBoard[8] === noughtMark)) {
//         return true;
//     }
// }

var winDiagonal = function() {
    if ((gameBoard[0][0] === gameBoard[1][1] === gameBoard[2][2])) {
        return true;
    }
    if ((gameBoard[0][2] === gameBoard[1][1] === gameBoard[0][2])) {
        return true;
    }
}

// var winDiagonalO = function() {
//     if ((gameBoard[0] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[8] === noughtMark)) {
//         return true;
//     }
//     if ((gameBoard[2] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[6] === noughtMark)) {
//         return true;
//     }
// }

// resets the board
var newGame = function() {
    for (var index = 0; index < gameBoard.length; index++) {
        // gameBoard[index] = null;
        location.reload();
    }
    // resultTextDOMelement.innerHTML = "";
    // arrTileDOMelements.forEach(function(tile) {
    //     tile = undefined;
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

createBoard();
renderBoard();
