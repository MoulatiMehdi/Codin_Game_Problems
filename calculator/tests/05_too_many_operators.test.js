/** @format */

const handleTest = require("./testFuntion");
const input = ["3", "1", "5", "6", "-", "2", "7", "4", "=", "7", "9", "x", "1", "2", "+", "3", "=", "2", "AC", "7", "9", "/", "3", "="];
const output = ["3", "31", "315", "3156", "3156", "2", "27", "274", "2882", "7", "79", "79", "1", "12", "948", "3", "951", "2", "0", "7", "79", "79", "3", "26.333"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

