/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */



const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];


function sortedByVowels(wordsArr) {
  const vowels = "aeiou";

  function countVowels(word) {
    let count = 0;
    for (const letter of word.toLowerCase()) {
      if (vowels.includes(letter)) { count++ };
    }
    return count;
  }

  return [...wordsArr].sort((a, b) => countVowels(a) - countVowels(b));

}

export { sortedByVowels };
