/** @format */

const solve = require("../main");
const handleTest = require("d:/Programming/Solve_Puzzles/codin-game-problems/shared/testfuntion");
const object = {
    "name":  "05-Test-5",
    "input":  [
                  "30",
                  "YENZRGRNFKINMCAGFMMGJWVZZRVCWQ",
                  "KKBAQPBNSWUXIDFHDZYNTOGTSAEKVS",
                  "EGTLNXYWRHLLYTNGOYBLULNOIGVMFV",
                  "WKNZBYVPCWLXZSESPZKIACDBLGNTJZ",
                  "MUREWDLLJVTOGPOHWPGIRUDOLEGTRL",
                  "LZKAVBAYBMNMOAAQGQKDCHGNOIBNNZ",
                  "URHBKIZDYSCPSGEHRIGIFEUYAWLYLX",
                  "YASRATWMWKORQIJYHKCYSWRLZIYBYX",
                  "YCDYJTUOFHCWTEXEWIOJFUVVFSJLWL",
                  "GUAWVRQETAUNHQLMARPFPFXCRRGVOI",
                  "TGMCABQJLFBRCYDQMWEKZJBYBFMADN",
                  "GZMUVJKJFZSEWAMIIZWPMWLOQRQJJH",
                  "JOCNZHLCORENIIJQINMRKZDOKPYJNW",
                  "MDGUSXCCKXWQGCFZRBDFGTCHHBFGSB",
                  "QYAZGXUEUMZFUDCSGJZUFGHGUUBWIH",
                  "NUVZDLUUYJYRGQSYHJJUKIAJGEKUQN",
                  "CNBQBDXAFDXNMLSZUOCLOCGYKVOVNE",
                  "PARZOFUPFZTGRITQXCMOZKXHCKBRMA",
                  "IVOKPXQGEHOMLSWIEATJUXAEDBKUFJ",
                  "XVLSZSAOWZOEQCZWBKOTWHNGFQNOQN",
                  "ORYFEBJITOHJHJZHCLJNFZRGLHQRJA",
                  "KZYENAUZGROOZIPCBKRBUNJWUPJRIG",
                  "YNEPCOUEPQFEGGXSTLKWKJJJJORUZB",
                  "GFNHOUWLRQVESEOFDMBQQDCACXLGYF",
                  "EBNNJKZYYOGGVUIDIEROUTFNNSBBXB",
                  "BHRKDBVBBLEMPYVOOKGUPUGAQNMBGT",
                  "ZDOLHRCSCLHTIXRPCTZMFQXCRNNMUT",
                  "SXBRAATOMKNRFGEMNEZKCSXMPKKMJV",
                  "DKMJHUYLWSHBIXJHMXEOSTLMEXUPQB",
                  "SZJSOCBQVELVOOWHGJCTSQOYNFTOKP"
              ],
    "output":  [
                   "2440"
               ]
};
const readline = () => {
	return object.input.shift();
};
// Mocking user input and capturing console.log output
test(object.name, () => handleTest(object.output, solve, readline));

