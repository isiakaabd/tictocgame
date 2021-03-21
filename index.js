const cellElements = document.querySelectorAll(".cell");
const board = document.getElementById("board");
var selector= false;
const X_CELL= "x";
const Circle = "circle"



cellElements.forEach(cell =>{
    cell.addEventListener("click", handleClick, {once: true})
})


function handleClick(e) {
    cell = e.target
    const selectorValue = selector? X_CELL: Circle
     placeMark(cell, selectorValue)
    // cell.classList.add(selectorValue)
    switchValue()
    boardHover()
}
  function placeMark(cell,selectorValue){
cell.classList.add(selectorValue)
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