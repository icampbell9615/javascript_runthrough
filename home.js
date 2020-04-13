// console.log('hello');
// //alert('yo');
// //Prompt a number and change it
// var age = prompt('What is your age?');

// document.getElementById('sometext').innerHTML = age;

// //Numbers in Javascript
// var num1 = 10;

// // Increment num1 by 1
// num1++;
// console.log(num1);

// //Decrement num1 by 1
// num1--;
// console.log(num1);

// // Divide, multiply *, remainder %
// console.log(num1 % 6);

// //Increment/decrement by any number you want
// num1 += 20;
// console.log(num1)

/*Functions
1. Create a function
2. Call the function
*/
//Create
// function fun(){
//    alert('this is a function');
// }

//Call
// fun();

/* Let's create a function that take in a 
name and says hello followed by your name. 

For example

Name: "Qazi"
Return: "Hello Qazi"

*/
// var name = prompt('What is your name');

// function greeting(yourName) {
//     var result = 'Hello' + yourName; //String Concatenation
//     console.log(result);
// }

// var name = prompt('What is your name?');
// greeting(name);

/*How do Arguments work in a function?
The function is depending on an input

*/

// function sumNumbers(num1, num2){
//     var result = num1 + num2;
//     console.log(num1 + 2);
// }

// sumNumbers(10, 10);

/*While loops (can potentially run infinitely, for loop stops at a point)

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}
*/

//For loop
// for (let num = 0; num <= 100; num++) {
//     console.log(num);
// }

//Data types
// let yourAge = 18; //number
// let yourName = 'Bob'; //string
// let name = {first: 'Jane', last: 'Doe'}; //object
// let truth = false; //boolean
// let groceries = ['apple', 'banana', 'oranges']; array
// let random;  //undefined
// let nothing = null; //value null

//Strings in Javascript (common methods)
// let fruit = 'banana, appler, orange, blackberry';
// let moreFruits = 'banana\napple'; //escape or new line

// console.log(fruit.length);
// console.log(fruit.indexOf('nan')); //gives you the number of array in word
// console.log(fruit.slice(2,6)); //slices the number up to 6 from 2
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toLowerCase());
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(',')); //split array by a comma
// console.log(fruit.split('')); //split array by a character

//Array
// let fruits = ['banana', 'apple', 'orange', 'pineapple'];
// fruits = new Array ['banana', 'apple', 'orange', 'pineapple'];
// alert(fruits[1]); //acceess value at index 2nd

// fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // array common methods
// console.log('to string', fruits.toString());
// console.log(fruits.join('-')); //joings everything with hyphen
// console.log(fruist, fruits.pop(), fruits); //pop off the last thing of the array, and returns 
// console.log(fruits.push('blackberres'), fruits); //appends
// console.log(fruits[4]);
// fruits[4] = "new fruit";
// fruits[fruits.length] = 'new fruit'; //same as push
// console.log(fruits);
// fruits.shift(); //remove first element from a list
// console.log(fruits);
// fruits.unshift('kiwi'); //add first element to an array
// console.log(fruits);

// let vegetables = ['asparagus', 'tomato', 'broccoli'];
// let allGroveries = fruits.concat(vegetables); //combine arrays
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4)); //1 through 4
// console.log(allGroceries.reverse()); //reverse order
// console.log(allGroceries.sort());

// let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumbers.sort(function(a,b) {return a-b})); //ascending order
// console.log(someNumbers.sort(function(a,b) {return b-a})); //descending order

// let emptyArray = new Array();
// for (let num = 0; num < 10; num++) {
//     emptyArray.push(num);
// }
// console.log(emptyArray);

//Objects in Javascript
//Dictionaries in Python

// student = {
// first: 'Rafeh', 
// last: 'Qazi', 
// age:25, 
// height: 170,
// studentInfo: function (){
//     return this.first + '\n' + this.last + '\n' + this.age;
// }
// };

// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh'; //change value
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo())

//Conditionals, Control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR 
// var age = 45; //prompt('what is your age?'); let usually doesnt work with prompt

// if ((age >= 18) && (age <= 35) ) {
//    status = 'target demo'; 
//    console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }

//Switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday --> weekend
// day 1 --> Monday --> weekday
// day 2 --> Tuesday --> weekday
// day 3 --> Wednesday --> weekday
// day 4 --> Thursday --> weekday
// day 5 --> Friday --> weekdend
// day 6 --> Saturday --> weekend

// switch (2) {
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
//     default:
//         text = 'weekday';
// }
// console.log(text);












