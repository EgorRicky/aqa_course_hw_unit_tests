/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/
const upperCase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase: string = upperCase.toLowerCase();
const numbers: string = '1234567890';

function validatePassword(password: string): boolean {
    if (password.length < 8) return false;
    if (password.trim() === "") return false;

    let hasUpper: boolean = false;
    let hasLower: boolean = false;
    let hasNumber: boolean = false;

    for (let i = 0; i < password.length; i++) {
        if (upperCase.includes(password[i])) {
            hasUpper = true;
        }
        if (lowerCase.includes(password[i])) {
            hasLower = true;
        }
        if (numbers.includes(password[i])) {
            hasNumber = true;
        }
    }

    return hasUpper && hasLower && hasNumber;
}
