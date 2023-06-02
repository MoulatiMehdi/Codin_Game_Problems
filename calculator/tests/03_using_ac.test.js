/** @format */

const handleTest = require("./testfuntion");
const input = ["3", "/", "4", "AC", "7", "/", "4", "x", "8", "="];
const output = ["3", "3", "4", "0", "7", "7", "4", "1.75", "8", "14"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

