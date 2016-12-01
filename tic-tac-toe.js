var board = document.getElementById('game-board');
var wrapper = document.getElementById('wrapper');

// create the board
var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// mark refers to player
var crossMark = "X";
var noughtMark = "O";
var numOfturns = 0;

// create board data structure


var gameBoard = [];

// creates the board - arrays of arrays
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


//
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
      rowElement.appendChild(tileElement);
    }
    // row completed
    wrapper.appendChild(rowElement);
  }
}


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
    if ((winRowX() == true) || (winColumnX() == true) || (winDiagonalX() == true)) {
        resultTextDOMelement.innerHTML = "PacMan Wins!";

        // stops game play by disabling 'click' event listener on tiles
        arrTileDOMelements.forEach(function(tile) {
            tile.removeEventListener('click', placeMark);
        })
    } else if ((winRowO() == true) || (winColumnO() == true) || (winDiagonalO() == true)) {
        resultTextDOMelement.innerHTML = "Blinky Wins!";

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

var winRowX = function() {
    if ((gameBoard[0] === crossMark) && (gameBoard[1] === crossMark) && (gameBoard[2] === crossMark)) {
        return true;
    }
    if ((gameBoard[3] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[5] === crossMark)) {
        return true;
    }
    if ((gameBoard[6] === crossMark) && (gameBoard[7] === crossMark) && (gameBoard[8] === crossMark)) {
        return true;
    }
}

var winRowO = function() {
    if ((gameBoard[0] === noughtMark) && (gameBoard[1] === noughtMark) && (gameBoard[2] === noughtMark)) {
        return true;
    }
    if ((gameBoard[3] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[5] === noughtMark)) {
        return true;
    }
    if ((gameBoard[6] === noughtMark) && (gameBoard[7] === noughtMark) && (gameBoard[8] === noughtMark)) {
        return true;
    }
}

var winColumnX = function() {
    if ((gameBoard[0] === crossMark) && (gameBoard[3] === crossMark) && (gameBoard[6] === crossMark)) {
        return true;
    }
    if ((gameBoard[1] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[7] === crossMark)) {
        return true;
    }
    if ((gameBoard[2] === crossMark) && (gameBoard[5] === crossMark) && (gameBoard[8] === crossMark)) {
        return true;
    }
}

var winColumnO = function() {
    if ((gameBoard[0] === noughtMark) && (gameBoard[3] === noughtMark) && (gameBoard[6] === noughtMark)) {
        return true;
    }
    if ((gameBoard[1] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[7] === noughtMark)) {
        return true;
    }
    if ((gameBoard[2] === noughtMark) && (gameBoard[5] === noughtMark) && (gameBoard[8] === noughtMark)) {
        return true;
    }
}

var winDiagonalX = function() {
    if ((gameBoard[0] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[8] === crossMark)) {
        return true;
    }
    if ((gameBoard[2] === crossMark) && (gameBoard[4] === crossMark) && (gameBoard[6] === crossMark)) {
        return true;
    }
}

var winDiagonalO = function() {
    if ((gameBoard[0] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[8] === noughtMark)) {
        return true;
    }
    if ((gameBoard[2] === noughtMark) && (gameBoard[4] === noughtMark) && (gameBoard[6] === noughtMark)) {
        return true;
    }
}

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
