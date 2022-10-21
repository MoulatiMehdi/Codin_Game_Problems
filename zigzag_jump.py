
LEN =   int(input())
A  =  input().split(' ')
INFINITY = float('inf')


odd = []
even = []
cost = {}

maximum = 0

for j in range(0,LEN):
    
    Aj = int(A[j])
    cost[Aj] = 1    

    if(Aj % 2 != 0):  

        Ai = 0
        
        #find the maximum number Ai  where : Ai < Aj and i < j
        for N in odd:
            if Ai < N and N < Aj:
                Ai = N

        # if the number found ?
        if Ai != 0:
            cost[Aj] = max(cost[Aj],cost[Ai] + 1) 
            # find the longest valid starting positions
            if(maximum < cost[Aj]):
                maximum = cost[Aj]
            
        odd.append(Aj)
    else: 

        Ai = INFINITY

        for N in even:
            if Ai > N and N > Aj:
                Ai = N

        if Ai != INFINITY:
            cost[Aj] = max(cost[Aj],cost[Ai] + 1) 

        even.append(Aj)

    if(maximum < cost[Aj]):
                maximum = cost[Aj]

print(cost)
print(maximum)
