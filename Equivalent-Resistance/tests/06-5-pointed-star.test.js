/** @format */

const handleTest = require("./testFuntion");
const input = ["1", "Star 78", "[ ( [ Star ( Star Star ) ] [ Star ( Star Star ) ] Star ) ( [ Star ( Star Star ) ] [ Star ( Star Star ) ] Star ) ]"];
const output = "91.0";

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

