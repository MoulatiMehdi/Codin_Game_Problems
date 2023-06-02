/** @format */

const handleTest = require("./testfuntion");
const input = ["2", "A 20", "B 10", "( A B )"];
const output = "30.0";

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));
