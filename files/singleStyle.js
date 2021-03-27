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
    [0, 3, 6],
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

var f=[]
function handleClick(e) {
    cell = e.target
    const selectorValue = selector? X_CELL : Circle
    placeValue(cell, selectorValue)
  
    pickRandom(selectorValue)
    switchValue() 
    var emptyCell =[...cellElements].filter(cell =>{
        return !cell.classList.contains(X_CELL) && !cell.classList.contains(Circle) 
    })  
     console.log(emptyCell)
    var celling= emptyCell[Math.floor(Math.random() * emptyCell.length)] 
    celling.classList.add(X_CELL)
    if(celling){

        f.push(X_CELL)
    }
    
  
    console.log(f)
    if (pickWinner(selectorValue, f)){
        endGame(false)
    } else if(drawGame()){
        endGame(true)
    }else{
        switchValue()     
        boardHover()
    }
}

//computerTurn

function pickRandom(selectorValue,emptyCell ){
//  if(selectorValue){ 
    //         var emptyCell =[...cellElements].filter(cell =>{
//            return !cell.classList.contains(X_CELL) && !cell.classList.contains(Circle) 
//         })  
//         //  console.log(emptyCell.length)      
//         // var celling= emptyCell[Math.floor(Math.random() * emptyCell.length)] 
//         // celling.classList.add(X_CELL)
//     }
//     // console.log(emptyCell)

//     // console.log(f)
}
// console.log(f)

// end Game
function endGame(draw){
    if (draw){
        resultmessage.innerText = "DRAW!!"
    }else{
        resultmessage.innerText = `${selector ? "O" : "X"} wins!!!`  
    }
    message.classList.add(show)
}

// function to add value to the cells
function placeValue(cell, selectorValue){
    
    if( !cell.classList.contains(X_CELL)){
        cell.classList.add(selectorValue)
    }
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
function pickWinner  (f,Circle) {
    return possibleWins.some(combination =>{
        return combination.every(index =>{
            // console.log(cellElements[index])
        //    console.log(cellElements[index].classList.contains(f))
            return  cellElements[index].classList.contains(f)
            // cellElements[index].classList.contains(Circle) ||
        })
})
}



function computerTurn(selectorValue){
    if (selectorValue){
        pickRandom()
    }
}

// draw game 

function drawGame(){
    return  [...cellElements].every(cell => {
        return cell.classList.contains(X_CELL) || cell.classList.contains(Circle)
    })    
}