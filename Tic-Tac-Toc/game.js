import { 
    isWinner , bestMove ,
    AI , HUMAN , E

} from "./AI.js"

const CONTAINER_NAME = "grid-container"
const ITEM_NAME      = "grid-item"
let   board          =  restart()



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

for(let i = 0 ; i < 9 ; i ++){

    let id = ITEM_NAME + '-' + i    
    document.getElementById(id).onclick = function (){
        if(isWinner(board) !== null) {
            console.log("the game is finished")
        }else{

            if(board[i] != E) return
            move(i,HUMAN)
            move(bestMove(board),AI)
        }
    }
            
}
