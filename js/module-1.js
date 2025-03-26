// Створіть змінну з ім'ям name і присвойте їй ваше ім'я. Виведіть це ім'я в консоль.

// Створіть змінну age і присвойте їй ваш вік. Виведіть в консоль рядок, що містить ваш вік у такому форматі: "Мені {вік} років".

// Створіть змінні x і y і присвойте їм довільні числа. Виведіть в консоль результати додавання, віднімання, множення та ділення цих чисел.

// Створіть змінну city і присвойте їй назву вашого міста. Створіть рядок, який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

// Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в консоль.

// Створіть змінну price і присвойте їй число. Створіть рядок, що містить ціну з символом гривні, наприклад: "Ціна: 500 грн".

// const userName = "Iryna";
// console.log(userName);

// const userAge = Number("37");
// console.log(`Мені ${userAge} років`);

// const nam = (x, y) => x + y;

// let x = 10;
// let y = 3;

// console.log(nam(x, y));

// console.log(5 + 3);
// console.log(10 - 2);
// console.log(20 * 2);
// console.log(10 / 5);

// const city = "Odesa";
// console.log(`Я живу в місті ${city}`);

// const userEmail = "buhelairyna@icloud.com";
// let part1 = userEmail.slice(0, 11);
// let part2 = userEmail.slice(12)
// console.log(part1);
// console.log(part2);

// const price = Number(300);
// const message = String(`Ціна: ${price} грн`)
// console.log(message);

// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.

const firstName = "Iryna";
const lastName = "Buhela";
const fullName = firstName.concat(" ", lastName);

console.log(fullName);

// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.

let a = 6;
let b = 13;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.

let radius = 5;
const area = 3.14 * radius * radius;

console.log(area);

// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.

// const someString = "Hello world";
// console.log(someString.length);

// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.

// const someString = "Hello world";
// const firstLetter = someString[0];
// const lastLetter = someString[someString.length - 1];

// console.log(firstLetter);
// console.log(lastLetter);

// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"

const str1 = "HELLO";
const str2 = "WORLD";

const lastLetter1 = str1[str1.length - 1];
const lastLetter2 = str2[str2.length - 1];

const fullName1 = lastLetter1.concat(lastLetter2);
console.log(fullName1);

// Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

const userValue1 = 10;
const numberOfDigits = userValue1.toString().length; 
const result = userValue1 * Math.pow(5, numberOfDigits);  

console.log(result);



















