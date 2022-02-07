// однострочный комментарий //
/* 
многострочные комментарии
 */
/**
 * JSDoc комментарии
 */

/**
 * Типы данных:
 * 1. Примитивные
 * - Number: 2019, 1.5, NaN, Infinity
 * - String: 'Hello', "Hello", `Hello`
 * - Boolean: true, false
 * - Null: null
 * - Undefined: undefined,
 * - Symbol()
 
console.log(2022, 1.5);
console.log(20 * 'kjbklh');
console.log(1 / 0);
String;

console.log('Hello', "Hello", `Hello`);

Boolean;

console.log(true, false);

console.log(null);

console.log(undefined);

console.log(Symbol());
*/

/**
 * Типы данных:
 * 2. Объекты. (Reference type) Передаються по ссылке.
 * - Object: { name: 'Denis', age: 30 }
 *  * Array: [1, 2, 3]
 *  * Function: function foo() {}
 *  * Date: new Date()
 *  ....
 

console.table({ name: 'Bob', age: 44 });


console.log([1, 2, 3, 4]);
*/

/**
 * Особености:
 * 1. JS динамически типизированный язык
 * 2. Одна и та же переменная может хранить в себе любой тип данных
 * 3. Нам не нужно определять тип данных при создании переменных
 * 4. Если мы хотим использовать статическую типизацию мы можем использовать TypeScript или Flow
 */

/* переменные 
// var, let, const
 var name = 'Bob';
console.log(name);
name = 'Den';
console.log(name);

var age;
console.log(age);
age = 30;
console.log(age);

var $name = 'Ivan';
var _name = 'Bobik';

var userAge = 30;
var user_age = 52;
console.log(user_age);
var UserAge = 44;
var userage = 22;


var car;
console.log(car);
car = 'lada';
// var car = 'mers';
console.log(car);
console.clear();

//console.log(nickName);
let nickName = 'dmgame';
nickName = "dm";
console.log(nickName);

const firstName = 'Bobick';
//firstName = "Bobi";
//const lastName;
console.log(firstName);

const user = {
    name: 'Dod',
    age: 30
};
user.age = 41;
 console.log(user); 

// 8. преобразование типов

let value;

// Number to string
value = String(10);
value = String(10 + 40);
value = (40).toString();

// Boolean to String
value = String(true);

// Array to String
value = String([1, 2, 3]);
//Object to string
value = String({ name: "Dodd" });

value = 30 + "" + 30;
value = 30 - "120";
value = false + 20;

//String to number
value = Number("22");
value = Number(true);
value = Number(false);
value = Number(null);
value = Number("false");
value = Number([1, 2, 3]);

value = parseInt("200lkjnhlkj");
value = parseFloat("200.2014lkjnhlkj");

//Boolean
value = Boolean("hello");
value = Boolean("");
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);

console.log(value);
console.log(typeof value);

// Numbers

const num1 = 10;
const num2 = 20;
let value;

// + * / - %
value = num1 + num2;
value = value + 100;
value += 100;
//value = 5 % 2;
value++;
value--;
++value;
--value;


value = 0.6 + 0.7;
//value = parseFloat(value.toFixed(1));
value = ( 0.6 * 10 + 0.7 * 10 ) / 10;

// Math
value = Math.PI;
value = Math.random(); 
value = Math.round(2.9);
value = Math.ceil(2.1);
value = Math.floor(2.9);
value = Math.min(22, 14, 128, 3, 968);
value = Math.floor(Math.random() * 10 + 1);

const arr = ['black', 'red', 'blue', 'orange', 'pink', 'green'];
value = Math.floor(Math.random() * arr.length);

console.log(arr[value]);

console.log(value);
*/
let num3 = Math.PI;
console.log( +num3.toFixed(2));

let num1 = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(num1);
let num2 = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(num2);

console.log( parseInt('100$'));

let value = 0.6 + 0.7;
let summ2 = parseFloat(value.toFixed(1));
console.log(summ2);

let hw4First = Math.random();
console.log(+hw4First.toFixed(2));

let hw4Second = Math.random() * 10 + 1;
console.log(Math.floor(hw4Second));


