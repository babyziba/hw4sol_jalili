// JavaScript Foundations Coding Assignment Solutions
// Run with: node solutions.js

console.log('Exercise 1: Formatting and Naming');
var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  console.log('The variable equals 10.');
}

console.log('\nExercise 2: Defining Core Data Types');
let studentName = `Anita`;
let itemPrice = 19.99;
let isActive = true;
console.log(studentName);
console.log(itemPrice);
console.log(isActive);

console.log('\nExercise 3: Single-Line Comments');
// Stores the user's current score in the assignment or game.
let currentScore = 95;
console.log(currentScore);

console.log('\nExercise 4: Equality Comparison');
console.log('100' == 100);
console.log('100' === 100);

console.log('\nExercise 5: Ternary Operator');
let isWeekend = false;
let schedule;
schedule = isWeekend ? 'Day off' : 'Work day';
console.log(schedule);

console.log('\nExercise 6: If/Else Structure');
let userAge = 16;
if (userAge >= 18) {
  console.log('Access Granted');
} else {
  console.log('Access Denied');
}

console.log('\nExercise 7: Logical AND Operator');
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log('Ready to process');
}

console.log('\nExercise 8: For Loop');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log('\nExercise 9: Loop Control');
for (let i = 0; i <= 9; i++) {
  if (i === 7) {
    break;
  }

  console.log(i);
}

console.log('\nExercise 10: Ensuring Execution');
let counter = 10;
do {
  console.log('Running once');
  counter++;
} while (counter < 10);

console.log('\nExercise 11: Function Definition');
function calculateArea(width, height) {
  return width * height;
}

let resultArea = calculateArea(5, 10);
console.log(resultArea);

console.log('\nExercise 12: Array Manipulation');
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));
console.log(fruitList);

console.log('\nExercise 13: Array Copying');
let originalData = ['red', 'blue', 'green'];
let clonedData = originalData.slice();
console.log(clonedData);
console.log('slice() makes a shallow copy, so nested objects or arrays are still shared by reference.');

console.log('\nExercise 14: Object Constructor');
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}

console.log('\nExercise 15: Object Instantiation');
let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');
let animalArray = [dog, cat];
console.log(animalArray);
