// Calculator.js

const OPERATION = '=-*/+'

let keys =
`2
6
7
9
x
-
7
+
AC

8
/
3
+
5
=
8
2
5
7
-
5
4
=
=
+
1
2
=`.split(/\n/g)

let screen = ""
let result =  "0+"


let lastKey = ""
const n = keys.length;

lastOpp = ""

for (let i = 0; i < n; i++){
    let key = keys[i]
    
    // is a digits ?
    if(key == +key){
        if(lastKey == "="){
            result = ""
        }
        screen = (screen+key)/1
        console.log(screen)
    }
    else{
        

        if(key == "x") key = "*"

        if(key == "AC"){
            screen = "0"
            result = ""
        }else if(lastKey == "=" && key == "="){
            
            let j = i - 2
            let num = ""
            while(!OPERATION.includes(keys[j])){
                
                num+=keys[j]
                if(+keys[j] != keys[j]) num = ""

                j--
            }
            
            result = result.replace(/=/g,keys[j])

            while(keys[i + 1] == "="){
                
                screen = format(eval( result  + num))
                result = screen + keys[j]
                console.log(screen)
                i++
                
            }
            screen = format(eval( result  + num))

        }else{
            if(OPERATION.includes(lastKey) ^ OPERATION.includes(key))
                screen = format(eval(result+screen) )
            result = screen + key
            
        }
         
        console.log(screen)
        if(OPERATION.includes(key) ^ OPERATION.includes(keys[i+1]))
            screen = ""
    }
    lastKey = key
}

function format(str){
    return Math.round(str* 1000)/1000
}
