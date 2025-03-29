// Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function myTest(array) {
//     for (const element of arr) {
//     console.log(element);
//   }
// }

// Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

// function test(arr) {
//     for (const element of arr) {
//         if (element % 2 === 0) {
//             console.log(element);
//         }
//     }
//     }

// Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль.

// function test(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//         }
//     }
// }

// Напиши функцію, яка приймає два параметри(arr, max).Де arr - це масив чисел.
// Потрібно вивести лише ті елементи масиву які більші за max.

// function someNum(arr, max) {
//     for (const num of arr) {
//         if (num > max) console.log(num);
//     }
// }

// Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sum([1, 2, 3, 4, 5]));

// Напиши функцію яка приймає масив та елемент для пошуку.
// Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

// function countOccurrences(arr, target) {
//     let count = 0;
//     for (const num of arr) {
//         if (num === target) {
//             count++;
//         }
//     }
//     return count;
// }

// Напиши функцію яка приймає масив чисел. 
// Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

function nunArr(arr) {
    let newArr = [];
    for (const num of arr) {
        if (num >= 0) { 
            newArr.push(num);
        }
    }
    return newArr;
}


console.log(nunArr([1, 3, 8, -10, 30, -2]));
