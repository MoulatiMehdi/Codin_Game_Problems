const HIGH  = 18
const WIDTH = 40
const G = '#'
const E = Infinity
const T = 'T'


let [TX,TY] = [30,11]

// game loop
while (true) {
    let map = newMap() 
    let [CX,CY] = [0,0]
    GAINTS = 1
    for (let i = 0; i < GAINTS; i++) {
        const [X,Y] = [5,5]
        map[Y][X] = G
        
        CY += Y
        CX += X

    }

    CY = Math.floor(CY/GAINTS)
    CX = Math.floor(CX/GAINTS)

    console.error(CY,CX)
    
    console.error(findPath(CX,CY,map) )               
    printMap(map)

    console.log('WAIT');
}

function findPath(X,Y,map){
    let searched = []
    let search = [[X,Y]]

    map[Y][X] = 0
    while(search.length > 0){
        let [x,y] = search.shift()
        let key = x+','+y
        if(searched[key] == undefined && map[y][x] != G){
            searched[key] = 1
            if(x == TX && TY == y){
                return 
            }else{
                let sX = Math.max(0,x - 1)
                let eX =Math.min(WIDTH,x + 2)
                
                let sY = Math.max(0,y - 1)
                let eY =Math.min(HIGH,y + 2)

                for(let j =sY; j < eY ; j ++ ){
                    for(let i = sX; i < eX; i++){
                        if(searched[i+','+j] == undefined){
                            if(map[j][i] == T ) return {i:x,j:y}
                            search.push([i,j])
                            map[j][i] = Math.min(map[y][x] + 1,map[j][i])
                        }
                    }
                }
            }
        }
    }
}
function getLine(){

    return readline().split(' ').map(c=> +c);
}
function newMap(){
    var map = []

    for(var j = 0 ; j < HIGH ; j ++){
        map[j] = []
        for(var i = 0 ; i < WIDTH ; i++){
            map[j][i] = E
        }
    }

    map[TY][TX] = T
    return map
}

function printMap(map){    
    for(var j = 0 ; j < HIGH ; j ++){
        console.error(map[j].map(c=> (c+'').padStart(2,'0')).join(' ').replace(/Infinity/g,'.'))
    }
}