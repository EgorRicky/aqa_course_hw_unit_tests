/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось,
  преобразовываясь в number

*/

/*
1. получаем тип age
2. если number, завершаем if и идём дальше
3. если string, то делаем преобразование в number
   если после преобразования получили NaN - заканчиваем - тут не обработал
   если после преобразования получили число - идём дальше
4. оставшийся код
*/

const minAge = 18;
const maxAge = 60;
let age = "";
const ageType = typeof (age);

if (ageType !== "number" && ageType !== "string") {
  console.log('Please re-check age value, it should be string or number');
}

else {
  console.log("type defined as string or number");
  if (ageType === "string") {
    age = Number(age);
    console.log("age is changed to number");
  }
  else if (ageType === "number") {
    console.log("age is already number");
  }
  else {
    console.log("something is wrong");
  }

  if (age < minAge) {
    console.log("You don't have access cause your age is " + age + " It's less then " + maxAge);
  }

  else if (minAge <= age && age < maxAge) {
    console.log("Welcome  !");
  }

  else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  }

  else {
    console.log("technical work")
  }
}
