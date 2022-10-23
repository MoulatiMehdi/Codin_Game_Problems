import { Node } from "./decisionTree.js"

export const HUMAN = 'O' // player 1
export const AI    = 'X'  // player 2
export const E     = '.'  // empty cell

let tree = new Node(10);
const INF = Infinity

/* all winning positions
    0 1 2
    3 4 5
    6 7 8
*/
const WIN  = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const SCORES = {
    [AI]: 10,  // X
    [HUMAN]: -10, // O
    tie: 0,
}

export function isWinner(B){

        let count_E = 0  // count empty cell 

        for(let row of WIN){
    
            let C1 = B[row[0]]
            let C2 = B[row[1]]
            let C3 = B[row[2]]
            
            if(C1 === C2 && C1=== C3){

                // is there a Winner ?
                if(C1 !== E ) 
                    return C1;
            }
            
            if(C1 == E) count_E++;
            if(C2 == E) count_E++;
            if(C3 == E) count_E++;
        }

        //  is Still Playing ?
        if(count_E != 0) 
            return null
        
        // Draw Game
        return 'tie';
}



export function bestMove(board){
    console.time('best move start ')
    // AI turn to make the Move
    let bestScore = -INF
    let move;
    for(let i = 0 ; i < 9 ; i ++){
        // Is the cell available ?
        if(board[i] == E){
            
            board[i] = AI
            let score = minimax(board, 0, false,i+'')
            board[i] = E
            tree.addChild(score,i+'')

            console.log(`index : ${i} , score ${score}, bestScore`)
            if(score > bestScore){
                move = i;
                bestScore = score
            }
            
           
        }
    }
    console.log(tree)
    console.log('------------')
    console.timeEnd('best move start ')
        return move
}


function minimax(board,depth,isMax,key=""){

    let result = isWinner(board)

    if(result != null){
        return  SCORES[result];
    }

    if(isMax){
        let value =  - INF
        for(let i = 0 ; i < 9 ; i++){
            if(board[i] == E){
                board[i] = AI
                let score  = minimax(board,depth + 1,false,key+i+'')
                value = Math.max(value,score)
                tree.addChild(score ,key+i+'')
                board[i] = E
            }
        }
        return value
    } else {
        let value = INF
        for(let i = 0 ; i < 9 ; i ++){
            if(board[i] == E){
                board[i] = HUMAN
                let score = minimax( board, depth + 1,true,key+i+'')
                board[i] = E


                value = Math.min(value,score)
                
            }
        }
        return value
    }
}