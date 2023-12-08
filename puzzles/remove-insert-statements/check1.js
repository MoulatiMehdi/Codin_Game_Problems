/** @format */

const solve = require("./main");
const arr = [
	"create function",
	"end;",
	"insert into ();",
	"--",
	"insert into ();",
	"--insert into ();",
	"-- insert into ();",
	"insert into ();",
	"create function",
	"\tinsert into ();",
	"\tinsert into ();",
	"end;",
	"insert into ();",
	"insert into ();",
];

arr.unshift(arr.length)

const readline = () => arr.shift();

solve(readline);
