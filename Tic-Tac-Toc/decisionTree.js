export class Node{
    constructor(score){
        this.score = score;
        this.children = []
    }
    
    setValue(value){
        this.value = value
    }

    addChild(score,key=""){
        var node = this

        for(var i of key){
            if(node.children[i] == undefined){

                node.children[i] = new Node()
            }
            node = node.children[i]
        }
        node.score = score
    }
}