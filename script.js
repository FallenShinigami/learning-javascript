// let marks = 70;
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 40) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// let loggedIn = true;
// let ispremium = false;
// if (loggedIn) {
//   if (ispremium) {
//     console.log("Premium Dashboard");
//   } else {
//     console.log("Free Dashboard");
//   }
// } else {
//   console.log("Please Login");
// }
// let temperature = 38;
// if (temperature >= 40) {
//   console.log("Very Hot");
// } else if (temperature >= 30) {
//   console.log("Hot");
// } else if (temperature >= 20) {
//   console.log("Pleasent");
// } else {
//   console.log("Cold");
// }
// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// let c1 = counter();

// c1(); // 1
// c1(); // 2
// c1(); // 3

// function counter() {
//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// let c1 = counter();
// let c2 = counter();

// c1();
// c1();
// c2();
// c1();

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// let c1 = counter();

// c1(); // 1
// c1(); // 2
// c1(); // 3

// let a = [10 ,20 ,30 , 40]
// for (let i = 0 ;i < a.length; i++){
//   a[i] = a[i] * 2;
//   console.log(a)
// }

// let numbers = [10 ,20 ,30 , 40]
// for(let number of numbers){
//   console.log(number + 5)
// }
// console.log(numbers)

// let array = [5 ,10,15,20]
// for (let i = 0; i < array.length ; i++){
//   console.log(array + 5)
// }

// let array = [5, 10, 15, 20];
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] + 5;
//   console.log(array);
// }

// let array = [5, 10, 15, 20, 25];
// for (let i = 0; i < array.length; i += 2) {
//   array[i] = array[i] + 10;
//   console.log(array);
// }

// let numbers = [10, 20, 30, 40, 50]
// for(let i = 0; i < numbers.length; i++){
//   numbers[i]= numbers[i] + 5;
//  console.log(numbers)
// }

// let numbers = [5, 10, 15, 20, 25, 30]
// for (let i = 0; i < numbers.length; i+=2){
//   numbers[i]= numbers[i]*2 ;
//   console.log(numbers)
// }

// let numbers = [5, 10, 15, 20, 25, 30];
// for (let i = 1; i < numbers.length; i += 2) {
//   numbers[i] = numbers[i] * 2;
//   console.log(numbers);
// }

// alert( "I'm JavaScript!" );
let name = prompt("What is your name?", "");
let age = prompt("What is your age?", "");
if (age >= 18) {
  alert("Welcome");
  confirm(`Your name is ${name} and your age is ${age}`);
} else {
  alert("You should be above 18 years to enter");
}
