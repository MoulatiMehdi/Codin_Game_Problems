getLine  = ()    => readline().split(' ');
series   = (A,B) => (+A) + (+B)
parallel = (A,B) => 1/ (1 /A + 1 / B)

const N = +readline();
const R = {}

for (let i = 0; i < N; i++) {
    const[name,ohm]= getLine()
    R[name] = +ohm
}

let circuit = getLine().map(c => R[c]? R[c] : c).join(' ')

while(isNaN(+circuit)){
    C = circuit.match(/\([^\(\)\[\]]+\)|\[[^\(\)\[\]]+\]/g)
    for(let i of C){
        var A = i.match(/(\d\.)?\d+/g).reduce(i.startsWith('(')?series:parallel)
        circuit = circuit.replaceAll(i,A)
    }
}
console.log((+circuit).toFixed(1))