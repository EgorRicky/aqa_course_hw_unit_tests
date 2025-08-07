/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';
const trimmedAndLoweredString = word.trim().toLowerCase();
let countOfVowels = 0;
let countOfConsonants = 0;
const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vowelsAndConsonantsResult = '';

for (let i = 0; i < trimmedAndLoweredString.length; i++) {
    if (vowels.includes(trimmedAndLoweredString[i])) {
        countOfVowels++;
    }

    else if (consonants.includes(trimmedAndLoweredString[i])) {
        countOfConsonants++;
    }
}
vowelsAndConsonantsResult = `${word} contains ${countOfVowels} vowels and ${countOfConsonants} consonants`;
console.log(vowelsAndConsonantsResult);
// export { vowelsAndConsonantsResult };
