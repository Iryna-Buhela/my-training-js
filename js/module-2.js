// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function compareStrings(str1, str2) {
//     if (str1[0] === str2[str2.length - 1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(compareStrings("apple", "elephant")); // true
// console.log(compareStrings("cat", "dog"));        // false
// console.log(compareStrings("hello", "octo"));     // true

// Задача-4
// Напишіть функцію яка приймає число num.
// Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.
// В іншому випадку функція повинна повернути булеве значення false.

// function someNumber(num) {
//     const length = Math.abs(num).toString().length;
//     return length % 2 === 0;
// }

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2.
// Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2.
// В іншому випадку функція повинна повернути булеве значення false.

// function someNumber(num1, num2) {
//     if (num1 > num2) {
//         return true;
//     }
//     return false;
// }

// Задача-7
// Напишіть функцію, яка приймає число num.
// Функція повинна повернути булеве значення true, якщо num є непарним числом.
// В іншому випадку функція повинна повернути булеве значення false.

// function isOdd(num) {
//     return num % 2 !== 0;
// }

// Задача-8
// Напишіть функцію, яка приймає параметр str.
// Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру.
// В іншому випадку функція повинна повернути булеве значення false.

//     Підказка: допоможе toLowerCase();

// function someString(str) {
//     if (str !== str.toLowerCase()) {
//         return true;
//     }
//     return false;
// }

// console.log(someString("hello"));
// console.log(someString("Hello"));



// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2.
// Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2.
// В іншому випадку функція повинна повернути булеве значення false.

// function someString(str1, str2) {
//     if (str1.length > str2.length) {
//         return true;
//     }
//     return false;
// }

// console.log(someString("hello, Iryna", "hello, world!"));
// console.log(someString("JavaScript", "JS"));



// Задача-12
// Напишіть функцію, яка приймає рядок str.
// Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл.
// В іншому випадку функція повинна повернути булеве значення false.

function someString(str) {
    if (str.includes(" ")) {
        return true;
    }
    return false;
}

