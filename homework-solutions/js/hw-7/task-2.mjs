/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (word === "") {
    return true
  }
  else if (typeof (word) !== "string") {
    return false
  }
  else {
    const wordToTrimAndLowerCase = word.trim().toLowerCase();
    for (let i = 0; i < wordToTrimAndLowerCase.length; i++) {
      if (wordToTrimAndLowerCase[i] !== wordToTrimAndLowerCase[wordToTrimAndLowerCase.length - 1 - i]) {
        console.log('not a palindrom');
        return false
      }
      return true;
    }
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (sentence === "" || typeof (sentence) !== "string") { return [] }
  const arrOfWords = sentence.split(' ');
  const finalRes = [];
  let indexOfLongest = 0;
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > arrOfWords[indexOfLongest].length) {
      finalRes.splice(0, finalRes.length, arrOfWords[i]);
      indexOfLongest = i;
    }
    else if (arrOfWords[i].length === arrOfWords[indexOfLongest].length) {
      finalRes.push(arrOfWords[i]);
    }
  }
  return finalRes;
}

export { isPalindrom, findLongestWords };
