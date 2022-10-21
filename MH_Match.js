const str  = "mhmmhmhh"

let p =str.split('')


i = 1

matches = 0
move = 0
max = 0


while(p.length != 1){

   p.pop()

   let count = 0;
   let t = str.split('')
   
   for(let j = 0 ; j <= str.length - p.length; j++){

        

        if( t.join('').startsWith(p.join('')) ){

           count+= p.length
        }
        t.shift()
   }

   if(max < count ){
        max = count
        move = i
        matches = p.length
   }
   console.error(i,count,str,p.join(''))
   i ++;

   
}


console.log(move,matches)