export class Node{
    
    constructor(move=null,score=0){
        this.bestMove = move;
        this.score = score
        this.children = {}
    }

    addChild(key="",move,score){
        
        let node = this
        for(var i of key){
            if(node.children[i] == undefined){
                node.children[i] = new Node()
            }
            
            node = node.children[i]
        }
        node.bestMove = move
        node.score = score
    }
}