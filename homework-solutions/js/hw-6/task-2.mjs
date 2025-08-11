/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
resultUnique = [];
resultNull = [];
let uniqueCounter = 0;
let competitorPizzasToLowerCase = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasToLowerCase.push(competitorPizzas[i].toLowerCase());
}

for (const myPizza of myPizzasT1) {
  if (competitorPizzasToLowerCase.indexOf(myPizza.toLowerCase()) === -1) {
    resultUnique.push(myPizza);
    uniqueCounter++;
  }
}
if (!uniqueCounter) {
  resultNull = null;
}

uniqueCounter = 0;


for (const myPizza of myPizzasT2) {
  if (competitorPizzasToLowerCase.indexOf(myPizza.toLowerCase()) === -1) {
    resultUnique.push(myPizza);
    uniqueCounter++;
  }
}

if (!uniqueCounter) {
  resultNull = null;
}



console.log('Уникальный массив', resultUnique);
console.log('Нуловый', resultNull);

export { resultNull, resultUnique };
