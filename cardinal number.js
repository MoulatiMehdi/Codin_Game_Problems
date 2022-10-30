const digit = ['','one','two','three','four','five','six','seven','eight','nine']
const teen  = 'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ')
const ion   = ['','thousand','million','billion','trillion','quadrillion','quintillion'] 
const ty    = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

const n = 150000;

console.log(cardinal(n))


/**
 *  convert a number to words 
 * @param {number} X 
 * @returns string
 */
function cardinal(X){
    X = X+''
    if(X == '0') return 'zero'

    len  = 3 - X.length% 3 + X.length 
    sign = /^-/g.test(X) ? - 1 : 1
    
    X = X.replace(/^-/g,'').padStart(len,0)
    
    let ans = []
    let i   = - 1


    while(-i <  len){

        a = X.at(i)
        b = X.at(i - 1)
        c = X.at(i - 2)

        if(Math.max(a,b,c) > 0) ans.unshift(ion[-(i + 1)/3])

        if(b > 1)       ans.unshift(ty[b] + (a>0?'-'+digit[a]:''))
        else if(b == 1) ans.unshift(teen[a])
        else if(a != 0) ans.unshift(digit[a])
        
        if(c > 0)       ans.unshift(digit[c],'hundred')

        i -= 3;
    }

    if(sign == - 1) ans.unshift('negative')
    return ans.filter(c => c != '').join(' ')

}