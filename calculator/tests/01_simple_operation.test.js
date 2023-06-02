/** @format */

const handleTest = require("./testfuntion");
const input = ["2", "5", "+", "6", "-", "7", "="];
const output = ["2", "25", "25", "6", "31", "7", "24"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

