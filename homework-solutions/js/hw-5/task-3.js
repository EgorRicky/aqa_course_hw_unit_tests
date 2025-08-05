/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let countOfVowels = 0;
let countOfConsonants = 0;

let vowelsAndConsonantsResult = '';
for (let i = 0; i <= 4; i++) {
    if (word[i].includes('e') || word[i].includes('o')) {
        countOfVowels = ++countOfVowels;
    }
    else if (word[i].includes('h') || word[i].includes('l')) {
        countOfConsonants = ++countOfConsonants;
    }
}
vowelsAndConsonantsResult = `hello contains ${countOfVowels} vowels and ${countOfConsonants} consonants`;
console.log(vowelsAndConsonantsResult);
export { vowelsAndConsonantsResult };
