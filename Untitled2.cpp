const LEN =   5
const ARR  =  "10 11 14 11 10".split(' ')

lastEven = ''
lastOdd  = ''

eJump = 0
oJump = 0

for(let i = 0 ;i < LEN; i++){

    var num = +ARR[i]
    
    if(num % 2 == 0){
        if (lastEven = '' || lastEven > num){
            eJump++;
        }else{
            eJump = 1;
        }

        lastEven = num
    }else{

        if (lastOdd = '' || lastOdd < num){
            oJump++;
        }else{
            oJump = 1;
        }

        lastOdd = num

    }
}

console.log("ZigZag jump is : " + Math.max(eJump,oJump))


