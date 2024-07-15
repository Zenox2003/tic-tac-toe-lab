/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(`.sqr`)
const messageEl = document.getElementById(`message`)
const resetBtnEl = document.getElementById(`reset`)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
    board = [``, ``, ``, ``, ``, ``, ``, ``, ``]
    turn = `P1`
    winner = false
    tie = false
    render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((cell, idx) => {
        if (cell === `P1`) {
            squareEls[idx].textContent = `P1`
            squareEls[idx].style.backgroundColor = `green`
        } else if (cell === `P2`) {
            squareEls[idx].textContent = `P2`
            squareEls[idx].style.backgroundColor = `blue`
        } else {
            squareEls[idx].textContent = ``
            squareEls[idx].style.background = `white`
        }
        squareEls[idx].textContent = cell
    });
}

function updateMessage () {
    if (!winner && !tie) {
        messageEl.textContent = `It is ${turn}'s turn`
    } else if (!winner && tie) {
        messageEl.textContent = "Outplayed by each other!"
    } else {
        messageEl.textContent = `${turn} wins the game`
    }
}

function handleClick(evt) {
const squareIndex = evt.target.id
if(board[squareIndex] === `P1` || board[squareIndex] === `P2` || winner)
    {
    return
    }
    placePiece(squareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}

function placePiece(index) {
    board[index] = turn
}

function checkForWinner() {
    if (
        (board[0] != `` && board[0] === board [1] && board[0] === board[2]) ||
        (board[3] != `` && board[3] === board [4] && board[3] === board[5]) ||
        (board[6] != `` && board[6] === board [7] && board[6] === board[8]) ||
        (board[0] != `` && board[0] === board [3] && board[0] === board[6]) ||
        (board[1] != `` && board[1] === board [4] && board[1] === board[7]) ||
        (board[2] != `` && board[2] === board [5] && board[2] === board[8]) ||
        (board[0] != `` && board[0] === board [4] && board[0] === board[8]) ||
        (board[2] != `` && board[2] === board [4] && board[2] === board[6]) 
    ) {
        winner = true
    }
}

function checkForTie() {
    if (winner) {
        return
    }
    if (!board.includes(``)) {
        tie = true
    }
}

function switchPlayerTurn() {
    if (winner) {
        return
    }
    if (turn === `P1`) {
        turn = `P2`
    } else {
        turn = `P1`
    }
}

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((squareEl) => {
    squareEl.addEventListener(`click`, handleClick)
})

resetBtnEl.addEventListener(`click`, init)

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
