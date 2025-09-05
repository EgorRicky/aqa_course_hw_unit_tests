/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 40 },
  { name: 'Jack', age: 49 },
];

function getCharacter(name) {
  for (const char of characters) {
    if (Object.values(char).find(el => el === name)) { return char }
  }
}

function addCharacter(character) {
  if (typeof character !== 'object' || character == null || Array.isArray(character)) { throw new Error };
  if (!("name" in character) || !("age" in character)) { throw new Error }
  characters.push(character);
}


function getCharactersByAge(minAge) {
  // Ваш код
}

function updateCharacter(name, newCharacter) {
  // Ваш код
}

function removeCharacter(name) {
  // Ваш код
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
