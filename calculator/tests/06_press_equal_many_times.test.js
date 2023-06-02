/** @format */

const handleTest = require("./testfuntion");
const input = ["8", "x", "3", "+", "2", "=", "=", "=", "2", "7", "9", "/", "9", "-", "4", "=", "=", "="];
const output = ["8", "8", "3", "24", "2", "26", "28", "30", "2", "27", "279", "279", "9", "31", "4", "27", "23", "19"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

