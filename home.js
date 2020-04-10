console.log('hello');
//alert('yo');
//Prompt a number and change it
var age = prompt('What is your age?');

document.getElementById('sometext').innerHTML = age;

//Numbers in Javascript
var num1 = 10;

// Increment num1 by 1
num1++;
console.log(num1);

//Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 6);

//Increment/decrement by any number you want
num1 += 20;
console.log(num1)

/*Functions
1. Create a function
2. Call the function
*/
//Create
function fun(){
   alert('this is a function');
}

//Call
fun();

/* Let's create a function that take in a 
name and says hello followed by your name. 

For example

Name: "Qazi"
Return: "Hello Qazi"

*/

function greeting() {
    var name = prompt('What is your name');
    var result = 'Hello' + name;
    console.log(result);

}

greeting();










