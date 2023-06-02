/** @format */

const handleTest = require("./testFuntion");
const input = ["3", "Alef 30", "Bet 20", "Vet 10", "( Alef [ ( Bet Bet Bet ) ( Vet [ ( Vet Vet ) ( Vet [ Bet Bet ] ) ] ) ] )"];
const output = "45.0";

// Mocking user input and capturing console.log output

test("Simpe Operations Test", () => handleTest(input, output));

