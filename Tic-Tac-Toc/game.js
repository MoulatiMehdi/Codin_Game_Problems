import { 
    isWinner , bestMove ,
    AI , HUMAN , E

} from "./AI.js"

const CONTAINER_NAME = "grid-container"
const ITEM_NAME      = "grid-item"
let   board          =  restart()


// restart the game
function restart(){
    return  [
        E,E,E,
        E,E,E,
        E,E,E
    ];
}

function move(index,player){
    if(isWinner(board) !== null) {
        console.log("the game is finished")
        return
    }
    board[index] = player
    document.getElementById(ITEM_NAME + '-' + index).innerText = player
}



// add event listenner to the grid item
for(let i = 0 ; i < 9 ; i ++){
 
    document.getElementById(ITEM_NAME + '-' + i   ).onclick = function (){
        
        if(isWinner(board) !== null) {
            console.log("the game is finished")
        }else{

            if(board[i] != E) return
            move(i,HUMAN)
            move(bestMove(board),AI)
        }
    }
            
}

// restart button
document.getElementById('reset').onclick = function(){
    board = restart()
    for(let i = 0 ; i < 9 ; i ++){
        document.getElementById(ITEM_NAME + '-' + i).innerText = ""
    }
}
