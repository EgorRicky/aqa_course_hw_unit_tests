/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds 
*/
function delayTwoSeconds(delay) {
    setTimeout(delay, 2000);
}

/* 
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. 
Обработайте промис методом .then и выведите результат его резолва в консоль 
*/

const resolvedPromise = new Promise((resolve) => {
    resolve(1)
});

resolvedPromise.then((val) => {
    console.log(`Promise resolved with ${val}`);
})

/*
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
*/

const rejectedPromist = new Promise((resolve, reject) => {
    reject('Promise failed')
});

rejectedPromist.catch((val) => {
    console.log(`Promise failed with the message ${val}`);
})

/*
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
*/
function promiseNumber(num) {
    const resolvedPromise = new Promise(resolve => {
        resolve(num)
    })
    return resolvedPromise.then((num) => num)
}

/*
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
*/
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => console.log(results));

/*
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
*/

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => console.log(results));

/*
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/
async function promiseAll() {
    try {
        await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => console.log(results));
    }

    catch {
        console.error()
    }
}

async function promiseAllSettled() {
    try {
        await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => console.log(results));
    }
    catch {
        console.error()
    }
}