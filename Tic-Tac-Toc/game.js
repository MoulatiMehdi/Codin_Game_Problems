import {isWinner,TicTacToc, E, O, X} from "./AI.js";

const CONTAINER_NAME = "grid-container"
const ITEM_NAME      = "grid-item"
const Board          = new TicTacToc()

function move(index,player){
    
    if(isWinner(Board.B) !== null) {
        console.log("the game is finished")
        return
    }

    Board.setMove(index,player);
    document.getElementById(ITEM_NAME + '-' + index).innerText = player
    console.log(player +` choose cell number : ${index}`)
}

function chooseCell(index){
    if(Board.B[index] != E) return
    
    move(index,X)

    move(Board.bestMove(),O)

    

}




for(let i = 0 ; i < 9 ; i ++){

    var id = ITEM_NAME + '-' + i    
        
        let el = document.getElementById(id)
        el.onclick = function (){
            if(isWinner(Board.B) !== null) {
                console.log("the game is finished")
            }else
                chooseCell(i)
        }
            
}
