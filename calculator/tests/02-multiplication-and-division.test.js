/** @format */

const handleTest = require("./testFuntion");
const input = ["9", "3", "x", "1", "2", "/", "5", "="];
const output = ["9", "93", "93", "1", "12", "1116", "5", "223.2"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

