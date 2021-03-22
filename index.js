const cellElements = document.querySelectorAll(".cell");
const board = document.getElementById("board");
const resultmessage = document.getElementById("resultmessage");
const message = document.getElementById("messages");
const resetbutton = document.getElementById("resetbutton");
var selector;
const X_CELL= "x";
const Circle = "circle";
const show = "message"


var possibleWins = [
    [0, 1, 2], //horizontal 1
    [3, 4, 5], //horizontal 2
    [6, 7, 8], //horizontal   [cells[0], [3], cells[6]], //vertical 1
    [0, 4, 8], //vertical 2
    [2, 5, 8], //vertical   [cells[0], [4], cells[8]], //diagonal 1
    [6, 4, 2]  //diagonal 2
]

// to start game
startGame()


function startGame(){
    selector = false;
    cellElements.forEach(cell =>{
        cell.addEventListener("click", handleClick, {once: true})
        cell.classList.remove(Circle);
        cell.classList.remove(X_CELL)
    })
    // to hover at the load of the game
    message.classList.remove(show);
    boardHover()
}



//  to reset game
resetbutton.addEventListener("click", startGame)


function handleClick(e) {
    cell = e.target
    const selectorValue = selector ? X_CELL : Circle
    placeValue(cell, selectorValue)
   
    if (pickWinner(selectorValue)){
        endGame(false)
    } else if(drawGame()){
        endGame(true)
    }else{
        switchValue()     
        boardHover()
    }
    
}

// end Game
function endGame(draw){
    if (draw){
        resultmessage.innerText = "DRAW!!"
    }else{
        resultmessage.innerText = `${selector ? "X" : " O"} wins!!!`  
    }
    message.classList.add(show)
    }

// function to add value to the cells
function placeValue(cell, selectorValue){
    cell.classList.add(selectorValue)
}
 
// for switching game player
function switchValue (){
    selector = !selector
}

function boardHover() {
    board.classList.remove(X_CELL)
    board.classList.remove(Circle)

    if (selector){
    
        board.classList.add(X_CELL);
    }else{
      
        board.classList.add(Circle)
    }
}

// check for winner
function pickWinner  (selectorValue) {
return possibleWins.some(combination =>{
    return combination.every(index =>{
        return cellElements[index].classList.contains(selectorValue)
    })
})
}

// draw game 

function drawGame(){
    return  [...cellElements].every(cell => {
        return cell.classList.contains(X_CELL) || cell.classList.contains(Circle)
    })    
}