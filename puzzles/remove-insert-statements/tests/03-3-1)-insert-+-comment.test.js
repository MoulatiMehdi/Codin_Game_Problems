/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "03-3-1)-insert-+-comment",
    "input":  [
                  "9",
                  "CREATE TABLE acheteur (",
                  "    id character integer NOT NULL,",
                  "    date_creation timestamp without time zone,",
                  "    name text,",
                  "    id_createur character varying(32),",
                  "    amount double precision,",
                  ");",
                  "--insertion of data",
                  "insert into acheteur(id,date_creation, name, id_createur, amount) values(2,\u002712/08/2020\u0027,\u0027Johnny\u0027,2,120);"
              ],
    "output":  [
                   "CREATE TABLE acheteur (",
                   "    id character integer NOT NULL,",
                   "    date_creation timestamp without time zone,",
                   "    name text,",
                   "    id_createur character varying(32),",
                   "    amount double precision,",
                   ");",
                   "--insertion of data"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

