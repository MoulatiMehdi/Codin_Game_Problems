/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "04-4-1)-with-function",
    "input":  [
                  "12",
                  "CREATE FUNCTION benchmark.fs_insertcheckmarxactionplan(pid_app integer, nb_object integer, pmetric_id integer, id_snapshot integer, status text) RETURNS integer",
                  "    LANGUAGE plpgsql",
                  "    AS $",
                  "declare",
                  "\tv_metric_id integer;",
                  "begin ",
                  "\tv_metric_id := 0;",
                  "    set search_path=benchmark;",
                  "    Select metric_id into v_metric_id from ref_metric rm where rm.metric_id = pMetric_id;",
                  "    insert into action_plan(id_application, nb_object, id_metric, comment_action, id_snapshot, status, id_outil) values ( pid_app, nb_object, v_metric_id, \u0027N/A\u0027, id_snapshot, status, 2);",
                  "return 1;",
                  "end;"
              ],
    "output":  [
                   "CREATE FUNCTION benchmark.fs_insertcheckmarxactionplan(pid_app integer, nb_object integer, pmetric_id integer, id_snapshot integer, status text) RETURNS integer",
                   "    LANGUAGE plpgsql",
                   "    AS $",
                   "declare",
                   "\tv_metric_id integer;",
                   "begin ",
                   "\tv_metric_id := 0;",
                   "    set search_path=benchmark;",
                   "    Select metric_id into v_metric_id from ref_metric rm where rm.metric_id = pMetric_id;",
                   "    insert into action_plan(id_application, nb_object, id_metric, comment_action, id_snapshot, status, id_outil) values ( pid_app, nb_object, v_metric_id, \u0027N/A\u0027, id_snapshot, status, 2);",
                   "return 1;",
                   "end;"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

