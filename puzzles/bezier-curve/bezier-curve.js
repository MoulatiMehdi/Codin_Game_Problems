getLine  = ()        =>  readline().split(' ').map(Number)
formula  = (x1,x2,t) =>(x1 * (1 - t) + x2 * t)
getCoord = (arr = getLine()) => { return {x: arr[0],y: arr[1]}}
linear   = (P,Q,t=0) => { return {x: formula(P.x,Q.x,t) , y: formula(P.y,Q.y,t)}} 

const [W,H]     = [10,10]
const steps     = 10

const [A,B,C,D] = Array.from(Array(4),getCoord)
let curve       = Array.from(Array(H), ()=>[".",..." ".repeat(W - 1)])
i = 0
while(i < steps){
    let P1 = bezeirPoint(i/(steps - 1))    
    curve[H - P1.y - 1][P1.x] = "#"
    i++
}

console.log(curve.map(c => c.join('').replace(/\s+$/g,"")).join('\n'))

function bezeirPoint(t){

    let points = [A,B,C,D]
    let next   = []
    
    while(points.length > 1){
        next.push(linear(points.shift(),points[0],t))
        if(points.length == 1){
            points = next
            next = []
        }
    }
    return {x: Math.round(points[0].x) ,y: Math.round(points[0].y) }
}