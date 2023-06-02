/** @format */

const handleTest = require("./testFuntion");
const input = ["3", "A 24", "B 8", "C 48", "[ ( A B ) [ C A ] ]"];
const output = "10.7";

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

