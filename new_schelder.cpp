#include<stdio.h>
enum{ NO,YES};

int main(){
	
	int TASKS,CORES;
	int arr [100] = {0};
	int ans = YES;
	
	scanf("%d%d",&TASKS,&CORES);
	for(int i = 0 ; i < TASKS && ans != NO; i++){
		
		int start , end;
		scanf("%d%d",&start,&end);
		
		for(int j = start ; j < end ; j++){
			
			arr[j]++;
			if(arr[j] > CORES){
				ans = NO;
				break;
			}
		}
		
	}  
	printf("%s \n",ans == YES?"YES":"NO");
	return 0;
}
