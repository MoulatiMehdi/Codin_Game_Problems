console.time('render')
const [len,k] = "5 1".split(' ').map(c => +c)
const arr = "1 2 3 4 5".split(' ').sort((a,b)=> a - b)

start = arr[0];
count = 1;
max = 0 

for(let i = 1; i < arr.length ; i ++){
    
    if(arr[i]-start <= k ) count ++
    else  {
        if(max < count){
            max = count
        }

        count = 1
        start = arr[i]
    }  

}

console.log(max)
console.timeEnd('render')