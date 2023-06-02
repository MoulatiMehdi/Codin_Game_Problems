/** @format */

const handleTest = require("./testFuntion");
const input = ["2", "C 20", "D 25", "[ C D ]"];
const output = "11.1";

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

