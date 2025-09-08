/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/


function countOccurrences(arr) {
  const obj = {};
  for (const val of arr) {
    if (obj[val] === undefined) {
      obj[val] = 1;
    }
    else {
      obj[val]++
    }
  }
  return obj;
}

export { countOccurrences };
