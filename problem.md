<!-- @format -->
<style>
  
/** @format */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,800;1,900&display=swap');
:root {
	--text-color: #fff;
   --title-color : #838891;
	--color-const: #18a1ea;
	--color-var: #f2bb13;
	--bg-var: #333;
   --bg-main : #252e38;
   --bg-secondary : #363e48; 
   --bg-thirth : #454c55;
   --bg-fourth : ;
}
* {
	font-family: "Nunito", sans-serif;
   font-weight : 500;
}


.blk {
	border-bottom: 1px solid #41454a;
	padding-bottom: 15px;
	background-color: inherit;
}

body {
	background-color: var(--bg-main) !important;
	color: var(--text-color) !important;
}

h2 span{
   color : var(--text-color)
}
var {
	display: inline-block;

	background-color: var(--color-var);
	color: var(--bg-var);

	padding-left: 4px;
	padding-right: 4px;
	padding-top: 1px;
	padding-bottom: 1px;

	font-weight: 600;
	font-size: 14px;
	font-style: normal;

	border-radius: 3px;
}
const {
	color: var(--color-const);

	padding-left: 4px;
	padding-right: 4px;
	padding-top: 2px;

	font-size: 14px;
	font-weight: 600;
}
.statement-body .statement-section {
	padding-left: 15px;
	padding-right: 15px;
	padding-bottom: 30px;
}

.title {
	font-size: 20px;
	font-weight: 800;

	padding-top: 15px;
	padding-bottom: 15px;
   
	color: var(--title-color);
	background-color: inherit;
	font-family: "Roboto", sans-serif;
}
.statement-body .statement-protocol {
	padding: 20px 30px;
	border-radius: 10px;
	border-top: 1px solid var(--bg-thirth);
   background-color: var(--bg-secondary);

}
.question-statement-input,
.question-statement-constraints,
.question-statement-output,
.statement-inout {
	background-color: inherit;
}
.question-statement-input strong {
	color: inherit;
	font-family: "Roboto", "sans serif";
}

.statement-inout-in,
.statement-inout-out {
	border-radius: 10px;
	background-color: var(--bg-thirth) !important;
	color: var(--text-color);
	flex: 1;
	flex-basis: auto;
	margin: 5px;
	padding: 10px;
	max-width: 50%;
}
.statement-inout {
	display: -webkit-flex;
	display: flex;
	width: calc(100% + 10px);
	margin-left: -5px;
	margin-right: 0;
	padding: 0;
}
.statement-inout pre {
	border: none;
	background-color: rgba(0, 0, 0, 0);
	font-family: inconsolata, monospace;
	font-size: 20px;
	line-height: 20px;
	font-weight: 600;
	margin: 0;
	padding: 0;
	display: inline-block;
	width: 100%;
	overflow-x: auto;
}



</style>

<div class="statement-body">
<div class="statement-section statement-goal">
   <h2><span class="icon icon-goal">&nbsp;</span><span>🎯 Goal </span></h2>
   <span class="question-statement">In this challenge, you are given <var>N</var> servers. Each server has a current load <var>Li</var> jobs running on it. Then a batch <var>k</var> jobs comes and must be distributed on the <var>N</var> servers. Your job is to design a program that will distribute the incoming <var>k</var> jobs on the servers such that the difference of the number of jobs in the server with the highest load and the one with the lowest load is minimal. Let’s call this metric Minimal Imbalance.<br>For example if we have <var>N</var>=<const>4</const> and the initial loads as follows [5,0,2,1]. For <var>k</var>=3 arriving jobs, distributing the jobs to get the following [5,2,2,2] achieves the Minimal Imbalance. The result here is 3 (5-2)<br>This challenge was one of the problems in Amazon Last Mile 22.</span>
</div>
<div class="statement-section statement-protocol">
   <div class="blk">
      <div class="title">Input</div>
      <div class="question-statement-input"><strong>Line 1:</strong> <var>N</var> An integer denoting the number of servers<br><strong>Line 2:</strong> <var>k</var> An integer denoting the number of jobs to be scheduled<br><strong>Line 3:</strong> One line containing integers <var>Li</var> where each integer denotes the server current load</div>
   </div>
   <div class="blk">
      <div class="title">Output</div>
      <div class="question-statement-output">An integer denoting the minimum achievable imbalance after scheduling the <var>k</var> jobs.</div>
   </div>
   <div class="blk">
      <div class="title">Constraints</div>
      <div class="question-statement-constraints">1&lt;=<var>N</var>&lt;10000<br>0&lt;=<var>Li</var>&lt;=10000<br>0&lt;=<var>k</var>&lt;=100000000</div>
   </div>
   <div class="blk">
      <div class="title">Example</div>
      <div class="statement-inout">
         <div class="statement-inout-in">
            <div class="title">Input</div>
            <pre class="question-statement-example-in">4
3
5 0 2 1</pre>
         </div>
         <div class="statement-inout-out">
            <div class="title">Output</div>
            <pre class="question-statement-example-out">3</pre>
         </div>
      </div>
   </div>
</div></div>
