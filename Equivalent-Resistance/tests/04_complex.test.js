/** @format */

const handleTest = require("./testFuntion");
const input = ["7", "Alfa 1", "Bravo 1", "Charlie 12", "Delta 4", "Echo 2", "Foxtrot 10", "Golf 8", "( Alfa [ Charlie Delta ( Bravo [ Echo ( Foxtrot Golf ) ] ) ] )"];
const output = "2.4";

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

