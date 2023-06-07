
<div class="statement-body">
<div class="statement-section statement-goal">
   <h2><span class="icon icon-goal">&nbsp;</span><span>Goal </span></h2>
   <span class="question-statement">In this challenge, you are given `N` servers. Each server has a current load Li jobs running on it. Then a batch `k` jobs comes and must be distributed on the `N` servers. Your job is to design a program that will distribute the incoming `k` jobs on the servers such that the difference of the number of jobs in the server with the highest load and the one with the lowest load is minimal. Let’s call this metric Minimal Imbalance.<br>For example if we have `N`=<const>4</const> and the initial loads as follows [5,0,2,1]. For `k`=3 arriving jobs, distributing the jobs to get the following [5,2,2,2] achieves the Minimal Imbalance. The result here is 3 (5-2)<br>This challenge was one of the problems in Amazon Last Mile 22.</span>
</div>
<div class="statement-section statement-protocol">
   <div class="blk">
      <div class="title">Input</div>
      <div class="question-statement-input"><strong>Line 1:</strong> `N` An integer denoting the number of servers<br><strong>Line 2:</strong> `k` An integer denoting the number of jobs to be scheduled<br><strong>Line 3:</strong> One line containing integers `Li` where each integer denotes the server current load</div>
   </div>
   <div class="blk">
      <div class="title">Output</div>
      <div class="question-statement-output">An integer denoting the minimum achievable imbalance after scheduling the `k` jobs.</div>
   </div>
   <div class="blk">
      <div class="title">Constraints</div>
      <div class="question-statement-constraints">1&lt;=`N`&lt;10000<br>0&lt;=`Li`&lt;=10000<br>0&lt;=`k`&lt;=100000000</div>
   </div>
   <div class="blk">
      <div class="title">Example</div>
      <div class="statement-inout">
         <div class="statement-inout-in">
            <div class="title">Input</div>
            
```
4
3
5 0 2 1
```

         </div>
         <div class="statement-inout-out">
            <div class="title">Output</div>
            
```
3
```

         </div>
      </div>
   </div>
</div></div>