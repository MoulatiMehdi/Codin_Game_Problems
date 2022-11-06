#include<stdio.h>
#include<conio.h>
enum{NO,YES,NEITHER};
int main(){
	
	int min = 3625;
	int max = 3632;
	int mid = (min + max) / 2;
	do{
		int ans = 0;
		printf("is the number lowest than %d ?\n0 : no\n1: yes\n\t ans : ",mid);
		scanf("%d",&ans);
		if(ans == YES){
			max = mid - 1;
		} else if(ans == NO){
			min = mid + 1;
		} 
		mid = max + min ;
		mid = mid / 2;
	}while(min <=max);
	
		printf("the number is %d",max);
	return 0;
	
}
