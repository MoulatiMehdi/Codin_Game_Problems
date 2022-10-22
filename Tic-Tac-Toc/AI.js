export const HUMAN = 'X' // player 1
export const AI = 'O' // player 2
const EMPTY = '.'  // empty cell
const INF = Infinity

// all winning positions
const WIN  = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const SCORES = {
    X: 10,
    O: -10,
    tie: 0,
}

export function isWinner(B){

        let count_E = 0  // count empty cell 

        for(let row of WIN){
    
            var C1 = B[row[0]]
            var C2 = B[row[1]]
            var C3 = B[row[2]]
            
            if(C1 === C2 && C1=== C3){

                // is there a Winner ?
                if(C1 !== EMPTY ) 
                    return C1;
            }
            
            if(C1 == EMPTY) count_E++;
            if(C2 == EMPTY) count_E++;
            if(C3 == EMPTY) count_E++;
        }

        //  is Still Playing ?
        if(count_E != 0) 
            return null
        
        // Draw Game
        return 'tie';
}


function minimax(board,depth,isMax){

    let winner = isWinner(board)

    if(winner != null){
    
        return  SCORES[winner];

    }
    
    if(isMax){

        let value =  - INF
        for(let i=0 ; i < 9 ; i++){

            if(board[i] == EMPTY){

                board[i] = AI
                value = Math.max(value,minimax(board,depth + 1,false))
                board[i] = EMPTY
            }

        }
        return value
    } else {

        let value = INF
        for(let i = 0 ; i < 9 ; i ++){

            if(board[i] == EMPTY){

                board[i] = HUMAN
                value = Math.min(value,minimax( board, depth + 1,true))
                board[i] = EMPTY
            }

        }
        return value
    }
}

export function bestMove(board){
    // AI turn to make the Move
    let bestScore = -INF
    let move = null
    for(let i = 0 ; i < 9 ; i ++){
        // Is the cell available ?
        if(board[i] == EMPTY){
            board[i] = AI
            let score = minimax(board, 0, false)
            
            if(score > bestScore){
                move = i;
                bestScore = score
            }
            
            board[i] = EMPTY
        }
    }
        return move
}