/** @format */

const handleTest = require("./testFuntion");
const input = ["2", "1", "x", "3", "-", "/", "9", "="];
const output = ["2", "21", "21", "3", "63", "63", "9", "7"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

