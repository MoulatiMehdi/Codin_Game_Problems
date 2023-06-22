/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "07-7-1)-multi-line-INSERT-instructions",
    "input":  [
                  "27",
                  "CREATE TABLE acheteur (",
                  "    id character integer NOT NULL,",
                  "    date_creation timestamp without time zone,",
                  "    name text,",
                  "    id_createur character varying(32),",
                  "    amount double precision,",
                  ");",
                  "INSERT INTO benchmark.snapshot ",
                  "VALUES (2124, 2, 606, \u00272020-07-03 11:20:51.6388\u0027, NULL, \u00272020-07-02 00:00:00\u0027, 14478, 3036, 2570, 0, 0, 0, 0, ",
                  "3.35999999999999988, 3.25, 3.45999999999999996, 3.60000000000000009, 3.70999999999999996, 3.45999999999999996, ",
                  "3.39999999999999991, \u00278.3.17.1\u0027,\u0027v0.2.0\u0027, 3, 0, 0, 0, 2, NULL, 1, NULL, 104, NULL, 104,   NULL, 0);",
                  "INSERT INTO benchmark.snapshot VALUES (2122, 2, 606, \u00272020-07-02 15:49:54.3911\u0027, NULL, \u00272020-07-02 00:00:00\u0027, ",
                  "14478, 3036, 2570, 0, 0, 0, 0, 3.35999999999999988, 3.25, 3.45999999999999996, 3.60000000000000009, 3.70999999999999996, ",
                  "3.45999999999999996, 3.39999999999999991, \u00278.3.17.1\u0027, \u0027v0.2.0\u0027, 1, 0, 0, 0, 0, NULL, 1,  NULL, NULL, NULL, NULL,  NULL, 0);",
                  "INSERT INTO benchmark.snapshot VALUES (2121, 1, 606, \u00272020-07-02 11:00:08.0201\u0027, NULL, \u00272020-07-01 00:00:00\u0027, ",
                  "12450, 2962, 2216, 0, 0, 0, 0,3.33000000000000007, 3.2200000000000002, 3.43000000000000016, 3.58000000000000007, ",
                  "3.72999999999999998, 3.45999999999999996, 3.37999999999999989, \u00278.3.17.1\u0027, \u0027v0.1.0\u0027, 3, ",
                  "0, 0, 0, 0, NULL, 1,  NULL, NULL,  NULL, NULL, NULL, 0);",
                  "INSERT INTO benchmark.snapshot VALUES (2206, 7, 523, \u00272020-09-24 15:01:16.8051\u0027, NULL, \u00272020-09-24 00:00:00\u0027, ",
                  "172017, 37835, 27125, 0, 0, 0, 0, 3.10000000000000009, 2.9700000000000002, 3.06999999999999984, 2.93000000000000016,",
                  " 3.4700000000000002, 2.89999999999999991, 2.93999999999999995,\u00278.3.12.1\u0027, \u0027V1.3.10\u0027, 1, 21, 0, 0, 0, NULL, 1, 61,",
                  " NULL, 434, 495, NULL, NULL, NULL, 0);",
                  "CREATE TABLE benchmark.prestataire (",
                  "    id integer NOT NULL,",
                  "    name text,",
                  "\tinsert_date_string_format text",
                  ");"
              ],
    "output":  [
                   "CREATE TABLE acheteur (",
                   "    id character integer NOT NULL,",
                   "    date_creation timestamp without time zone,",
                   "    name text,",
                   "    id_createur character varying(32),",
                   "    amount double precision,",
                   ");",
                   "CREATE TABLE benchmark.prestataire (",
                   "    id integer NOT NULL,",
                   "    name text,",
                   "\tinsert_date_string_format text",
                   ");"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

