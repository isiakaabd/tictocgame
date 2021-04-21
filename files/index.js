        const cellElements = document.querySelectorAll(".cell");
        const board = document.getElementById("board");
        const resultmessage = document.getElementById("resultmessage");
        const message = document.getElementById("messages");
        const resetbutton = document.getElementById("resetbutton");
        const X_CELL= "x";
        const Circle = "circle";
        const show = "message"


        var possibleWins = [
        [0, 1, 2], //horizontal 1
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], //horizontal 2
        [1, 4, 7],
        [2, 5, 8], //vertical   [cells[0], [4], cells[8]], //diagonal 1
        [0, 4, 8], //vertical 2       //horizontal   [cells[0], [3], cells[6]], //vertical 1
        [2, 4, 6]  //diagonal 2
        ]


        startGame ()

        function startGame (){
            cellElements.forEach((cell,index) =>{
            cell.addEventListener("click", ()=> handleClick(index))
            cell.classList.remove(Circle);
            cell.classList.remove(X_CELL);
        })
        message.classList.remove(show)
    
        }

        resetbutton.addEventListener("click", startGame)



        function handleClick(index){
            if (!cellElements[index].classList.contains(Circle) && !cellElements[index].classList.contains(X_CELL) ) {
                cellElements[index].classList.add(Circle)
                
                pickRandom(index)
            } 
            if (checkforWinner(cellElements)){
                resultmessage.innerText = "O wins!!"
                message.classList.add(show)
                
                
            }
            else if (checkforComputerWin(cellElements)){
                resultmessage.innerText = "X wins!!"
                message.classList.add(show)

            }
            else if(draw(cellElements)){
                message.classList.add(show)
                resultmessage.innerText = "DRAW!!"
            }
    
        }



        function pickRandom(){
            var emptyCells = undefined
            
            emptyCells =[...cellElements].filter(( circles) =>!circles.classList.contains(Circle) && !circles.classList.contains(X_CELL) )
            
            var emptyCell = emptyCells[Math.floor(Math.random() * (emptyCells.length))]
            
            if(emptyCells.length > 1 ){
                computerTurn(emptyCell)
            }
        }


        function  computerTurn(emptyCell){
        
            emptyCell.classList.add(X_CELL)
            
        }

        // check for player win
        function checkforWinner(cellElements){
        
            return possibleWins.some(combination =>{
                    return combination.every(index =>{
                            return cellElements[index].classList.contains(Circle) 
                    })
            })
    
        }
         // check for  computer win
        function checkforComputerWin(cellElements){
    
            return possibleWins.some(combination =>{
                    return combination.every(index =>{
                        return cellElements[index].classList.contains(X_CELL)
                    
                    })
            })        
        
        
        }
        // draw game
        function   draw(cellElements){

            return [...cellElements].every(elem =>elem.classList.contains(Circle) || elem.classList.contains(X_CELL)) 
        
        }
        

            
        