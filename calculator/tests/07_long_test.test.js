/** @format */

const handleTest = require("./testfuntion");
const input = ["7", "9", "x", "-", "7", "+", "AC", "8", "/", "3", "+", "5", "=", "8", "2", "5", "7", "-", "5", "4", "=", "=", "+", "1", "2", "="];
const output = ["7", "79", "79", "79", "7", "72", "0", "8", "8", "3", "2.667", "5", "7.667", "8", "82", "825", "8257", "8257", "5", "54", "8203", "8149", "8149", "1", "12", "8161"];

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

