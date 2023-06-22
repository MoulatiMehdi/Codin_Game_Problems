/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "08-8-1)-many-insert-on-same-line",
    "input":  [
                  "1",
                  "delete from lk_vendeur_acheteur;insert into lk_vendeur_acheteur(id,id_vendeur,id_acheteur) values(1,1,1);insert into lk_vendeur_acheteur(id,id_vendeur,id_acheteur) values(2,1,2);insert into lk_vendeur_acheteur(id,id_vendeur,id_acheteur) values(3,2,3);"
              ],
    "output":  [
                   "delete from lk_vendeur_acheteur;"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

