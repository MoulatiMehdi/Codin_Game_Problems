export const X = 'X' // player 1
export const O = 'O' // player 2
export const E = '.'  // empty cell
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

        var count_E = 0  // count empty cell 

        for(var row of WIN){
    
            var C1 = B[row[0]]
            var C2 = B[row[1]]
            var C3 = B[row[2]]
            
            if(C1 === C2 && C1=== C3){

                // is there a Winner ?
                if(C1 !== E ) 
                    return SCORES[C1];
            }
            
            if(C1 == E) count_E++;
            if(C2 == E) count_E++;
            if(C3 == E) count_E++;
        }

        //  is Still Playing ?
        if(count_E != 0) 
            return null
        
        // Draw Game
        return SCORES.tie;
}

function minimax(board,depth,isMax){

    let winner = isWinner(board)

    if(winner != null){
    
            return  winner
        

    }
    
    if(isMax){

        let value =  -INF

        for(var i=0 ; i < 9 ; i++){

            if(board[i] == E){

                board[i] = O
                value = Math.max(value,minimax(board,depth + 1,false))
                board[i] = E
            }

        }
        return value

    } else{

        let value = INF

        for(var i = 0 ; i < 9 ; i ++){

            if(board[i] == E){

                board[i] = X
                value = Math.min(value,minimax( board, depth + 1,true))
                board[i] = E
            }

        }
        return value

    }
}

export class TicTacToc {

    /**
     * Initialization of the Tic-Tac-Toc board
     * @returns void
     */
    constructor(){

        this.B = [
            E,E,E,
            E,E,E,
            E,E,E
        ];
    }
    setMove(index,player){

            this.B[index] = player

    }  


    bestMove(){

        let bestScore = -INF
        let move = null

        for(var i = 0 ; i < 9 ; i ++){

            if(this.B[i] == E){

                this.B[i] = X
                var score = minimax( this.B, 1, false)
                
                if(score > bestScore){
                    move = i;
                    bestScore = score
                }
                
                this.B[i] = E

            }
        }
            return move
    }
    print_board(){

        for(let i = 0 ; i < 9 ; i ++){

            var row = "\t Board :"
            if(i % 3 == 0){

                console.log(row + ' |')
                console.log(' +---+---+---+')
                row = ""
            }
            row += ' | ' + this.B[i]
        }
    }
}


