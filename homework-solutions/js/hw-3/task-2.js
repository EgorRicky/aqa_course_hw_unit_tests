/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

const n = 2;
const moveToString = String(n);
const secondNum = Number(moveToString + moveToString);
const thirdNum = Number(moveToString + moveToString + moveToString);
console.log(n, secondNum, thirdNum);
const finalRes = n + secondNum + thirdNum;
console.log(finalRes);
