/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  return [].concat(...arr);
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const arrOfWords = sentence.split(' ');
  const arrOfWordsFiltered = [];
  for (const arrOfWord of arrOfWords) {
    if (arrOfWord) {
      arrOfWordsFiltered.push(arrOfWord);
    }
  }
  const toLowerCaseWords = [];
  for (const word of arrOfWordsFiltered) {
    toLowerCaseWords.push(word.toLowerCase());
  }
  const wordsStartWithUpperCase = [];
  for (let i = 1; i < toLowerCaseWords.length; i++) {
    const newWord = toLowerCaseWords[i][0].toUpperCase() + toLowerCaseWords[i].slice(1);
    wordsStartWithUpperCase.push(newWord);
  }
  const newSentenceArr = [toLowerCaseWords[0], ...wordsStartWithUpperCase];
  const newSentence = newSentenceArr.join('_');
  console.log(newSentence);
  return newSentence;
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const arr = [0, 1];
  if (n < 2) {
    return arr[n];
  }
  for (let i = 2; i <= n; i++) {
    let firstDig = arr[i - 2];
    let secondDig = arr[i - 1];
    let resDig = firstDig + secondDig;
    arr.push(resDig);
  }
  return arr[n];
}

export { mergeArrays, fibonacci, devideBy };
