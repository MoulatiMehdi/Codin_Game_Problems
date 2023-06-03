import sys
import math

min=""
max=""
length = 0

def LN( depth = 0, digits = "", prob = 1) :
    
    eight = digits.count('8')
    six   = digits.count('6')
    
    # is 8 and 6 exist ?
    if eight * six > 0 :

        return 0

    # is all digit has been placed ?
    if depth == 0 :     
        
        # is no 6 or 8 in the number
        if eight + six == 0: 

            return 0

        else :

            return prob
    
    count = int(0)

    start = 0
    end = 9

    s_min = min.startswith(digits)
    s_max = max.startswith(digits)
    

    if  s_max or s_min:
        T = 0
        

        if(s_min) : 

            start = int(min[length - depth ])
            count = count + LN(depth - 1,digits + str(start),prob)
            T = T - 1

        if(s_max) :
            

            end = int(max[length - depth ])

            if start != end or not s_min  : 

                count = count + LN(depth - 1,digits + str(end),prob) 
                T = T - 1

        T = T +  end - start + 1
        
        if(start < 6 and end > 6):  

            count = count + LN( depth - 1,digits + '6',prob)
            T = T - 1

        if start < 8 and end > 8:

            count = count + LN(depth - 1,digits + '8',prob)
            T = T - 1

        if( T > 0 and start != end):
            
            count = count + LN(depth - 1,digits + '@',prob * T)
        
    else : 
            count = count + LN(depth - 1, digits + '8', prob )
            count = count + LN(depth - 1, digits + '6', prob )
            count = count + LN(depth - 1, digits + '@', prob* 8)

        
    return count


def countLN(L = 0,R = 0):

    if(L == R):
        return 0

    
    
    global min,max,length    
    
    min = str(L)
    max = str(R )

    length = len(max)

    min = min.zfill(length)
    return  LN( length, "", 1)

    
l, r = [int(i) for i in input().split()]


print(countLN(l,r))
