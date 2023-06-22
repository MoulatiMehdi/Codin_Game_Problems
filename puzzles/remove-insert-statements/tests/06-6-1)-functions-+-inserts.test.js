/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "06-6-1)-functions-+-inserts",
    "input":  [
                  "29",
                  "--",
                  "-- TOC entry 49331 (class 1255 OID 11620988)",
                  "-- Name: fs_insertcheckmarxactionplan(integer, integer, integer, text);",
                  "--",
                  "CREATE FUNCTION benchmark.fs_insertcheckmarxactionplan(nb_object integer, pmetric_id integer, id_snapshot integer, status text) RETURNS integer",
                  "    LANGUAGE plpgsql",
                  "    AS $",
                  "declare",
                  "\tv_metric_id integer;",
                  "begin ",
                  "\tv_metric_id := 0;",
                  "    set search_path=benchmark;",
                  "    Select metric_id into v_metric_id from ref_metric rm where rm.metric_id = pMetric_id;",
                  "    insert into action_plan(nb_object, id_metric, comment_action, id_snapshot, status, id_outil) values ( nb_object, v_metric_id, \u0027N/A\u0027, id_snapshot, status, 2);",
                  "return 1;",
                  "end;",
                  "$;",
                  "--",
                  "-- TOC entry 182322 (class 0 OID 11621003)",
                  "-- Dependencies: 16626",
                  "-- Data for Name: action_plan; Type: TABLE DATA; Schema: benchmark; Owner: -",
                  "--",
                  "INSERT INTO benchmark.action_plan VALUES (8911, 1, 1, 1, 1020810, \u0027PRESTATAIRE\u0027, 1166, \u0027NEW\u0027, 1);",
                  "INSERT INTO benchmark.action_plan VALUES (100000, 1, 1, 129, 7788, \u0027PRESTATAIRE\u0027, 100001, \u0027STILL_VIOLATION\u0027, 1);",
                  "INSERT INTO benchmark.action_plan VALUES (100001, 1, 1, 109, 8106, \u0027PRESTATAIRE\u0027, 100001, \u0027STILL_VIOLATION\u0027, 1);",
                  "INSERT INTO benchmark.action_plan VALUES (100002, 2, 1, 37, 7670, \u0027PRESTATAIRE\u0027, 100001, \u0027STILL_VIOLATION\u0027, 1);",
                  "INSERT INTO benchmark.action_plan VALUES (100003, 2, 1, 49, 7518, \u0027PRESTATAIRE\u0027, 100001, \u0027STILL_VIOLATION\u0027, 1);",
                  "INSERT INTO benchmark.action_plan VALUES (100004, 2, 1, 6, 7532, \u0027PRESTATAIRE\u0027, 100001, \u0027STILL_VIOLATION\u0027, 1);",
                  "-- END Batch"
              ],
    "output":  [
                   "--",
                   "-- TOC entry 49331 (class 1255 OID 11620988)",
                   "-- Name: fs_insertcheckmarxactionplan(integer, integer, integer, text);",
                   "--",
                   "CREATE FUNCTION benchmark.fs_insertcheckmarxactionplan(nb_object integer, pmetric_id integer, id_snapshot integer, status text) RETURNS integer",
                   "    LANGUAGE plpgsql",
                   "    AS $",
                   "declare",
                   "\tv_metric_id integer;",
                   "begin ",
                   "\tv_metric_id := 0;",
                   "    set search_path=benchmark;",
                   "    Select metric_id into v_metric_id from ref_metric rm where rm.metric_id = pMetric_id;",
                   "    insert into action_plan(nb_object, id_metric, comment_action, id_snapshot, status, id_outil) values ( nb_object, v_metric_id, \u0027N/A\u0027, id_snapshot, status, 2);",
                   "return 1;",
                   "end;",
                   "$;",
                   "--",
                   "-- TOC entry 182322 (class 0 OID 11621003)",
                   "-- Dependencies: 16626",
                   "-- Data for Name: action_plan; Type: TABLE DATA; Schema: benchmark; Owner: -",
                   "--",
                   "-- END Batch"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

