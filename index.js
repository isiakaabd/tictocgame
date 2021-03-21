const cellElements = document.querySelectorAll(".cell");
const board = document.getElementById("board");
var selector;
const X_CELL= "x";
const Circle = "circle";


var possibleWins = [
    [[0], [1], [2]], //horizontal 1
    [[3], [4], [5]], //horizontal 2
    [[6], [7], [8]], //horizontal   [cells[0], [3], cells[6]], //vertical 1
    [[1], [4], [7]], //vertical 2
    [[2], [5], [8]], //vertical   [cells[0], [4], cells[8]], //diagonal 1
    [[6], [4], [2]]  //diagonal 2
]


stateGame()
function stateGame(){
  selector = false;
    cellElements.forEach(cell =>{
        cell.addEventListener("click", handleClick, {once: true})
    })
    // to hover at the load of the game
    boardHover()
}


function handleClick(e) {
    cell = e.target
    const selectorValue = selector? X_CELL: Circle
   cell.classList.add(selectorValue)
    switchValue()
    boardHover()
}
 

// for switching elector
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