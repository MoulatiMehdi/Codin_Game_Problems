/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "05-5-1)-many-insert-statements",
    "input":  [
                  "16",
                  "CREATE TABLE acheteur (",
                  "    id character integer NOT NULL,",
                  "    date_creation timestamp without time zone,",
                  "    name text,",
                  "    id_createur character varying(32),",
                  "    amount double precision,",
                  ");",
                  "insert into acheteur(id,date_creation, name, id_createur, amount) values(1,\u002712/08/2020\u0027,\u0027John\u0027,1,100);",
                  "Insert INTO benchmark.ticket VALUES (62, 21805, 51, \u0027SI Quality model empty\u0027, \u00272020-02-12 00:00:00\u0027);",
                  "INSeRt INTO benchmark.snapshot VALUES (1615, 11, 79, \u00272019-11-18 13:51:20.2641\u0027, NULL, \u00272019-10-22 01:00:00\u0027, 1715, 5594, 3909, 0, 0, 0, 0, 3.16, 3.08, 3.22, 3.18, 3.41, 3.70, 3.25, \u00278.3.12.1\u0027, \u0027v2.5.8\u0027, 1, 15, 0, 0, 685,  \u0027ETAT1 - v2.5.8 - dev - aip1 - e\u0027, 0);",
                  "iNSERT INTO benchmark.ticket VALUES (61, 21798, 1, \u0027false positive for \"Avoid unreferenced Classes\", due to FacesConverter annotation (21739 suite)\u0027, \u00272020-02-12 00:00:00\u0027);-- premier comment OK OK",
                  "INSERT INTO benchmark.snapshot VALUES (500044, 26, 68, \u00272014-10-17 00:03:00\u0027, 0, \u00272014-10-17 00:03:00\u0027, 1247000, \u00277.3.0\u0027, \u0027V1.c7 (730 migrées)\u0027, 3, 1, 0, 0, 1145, 1145,  14, 194, 4136, 54947, 22, 142, 467, 3765, 0.004, 0.316, 6.9043, 92.6, 0.5, 3.2, 10.612, 85.65);",
                  "INSERT INTO benchmark.snapshot VALUES (1170, 3, 429, \u00272019-02-04 00:00:00\u0027, NULL, \u00272019-01-16\u0027, 743428, 272, 9, 64, 3585, 1355, 7256, 3.16, 2.991, 2.91, 2.19, 3.14, 3.14, 2.956, \u00278.3.8.1\u0027, \u0027v6.0.0_reprise\u0027, 3, 0, 0, 0, 954, 1, 213, 2213,  309, 823, 1.23, \u002723 - v6.0 poids 0\u0027);",
                  "INSERT INTO benchmark.ref_metric VALUES (1007248, \u0027Use sufficient SSL\\TLS context (PHP)\u0027, \u0027TQI\u0027, 1, \u0027NOT CRITICAL\u0027, NULL);--petit comment qu\u0027il faut garder",
                  "INSERT INTO benchmark.snapshot VALUES (750000, 4, 489, \u00272013-11-06 00:00:00\u0027, 0, \u00272013-11-06 00:00:00\u0027, 134674, 63542, 300698, 0, 0, 0, 0, 3.22, 3.31, 2.77, 3.5, 2.640012, 2.087, 2.95, \u00277.0.19.1\u0027, \u0027Partage V1.2 + lib\u0027,0);",
                  "INSERT INTO benchmark.snapshot VALUES (8, 9, 780, \u00272022-06-29 13:49:11.8066\u0027, NULL, \u00272022-06-29 12:08:00\u0027, 400598, 210702, 68729, 0, 0, 0, 0, 3.27, 2.93, 3.27, 2.74, 3.64, 2.79, 3.02, \u00278.3.30.1\u0027, \u0027V3.1\u0027, 1, 12, \u0027exde 175 PA à la demande du projet\u0027, 6, 269, 275, \u0027backup.zip\u0027);"
              ],
    "output":  [
                   "CREATE TABLE acheteur (",
                   "    id character integer NOT NULL,",
                   "    date_creation timestamp without time zone,",
                   "    name text,",
                   "    id_createur character varying(32),",
                   "    amount double precision,",
                   ");",
                   "-- premier comment OK OK",
                   "--petit comment qu\u0027il faut garder"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

