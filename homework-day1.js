// // episode 1
// const name = 'Keith';
//
// const printName = function () {
//   console.log(`My name is ${ name }`);
// }
// //const function prints out a string of "My name is Keith"
// printName();
//
// //episode 2
//
// const score = 5;
//
// const result = function () {
//   const score = 3;
//   return score;
// }
//
// //prints out score constant variable inside the constant variable function result that is called inside console.log
// console.log(result());

//episode 3
// const myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// const listAnimals = function () {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//
//   for (const i = 0; i < myAnimals.length; i++) {
//     console.log(`${ i }: ${ myAnimals[i] }`);
//   }
// }

//returns an error message, not sure why
// listAnimals();

//episode 4

// const suspectOne = 'Jay';
// const suspectTwo = 'Val';
// const suspectThree = 'Keith';
// const suspectFour = 'Rick';
//
// const allSuspects = function () {
//   const suspectThree = 'Harvey';
//   console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
// }
//
// //returns a string of 4 constant variables, suspectThree is a new constant variable inside the function which takes precedence over the constant suspectThree outside the function
// allSuspects();
//
// //returns a constant variable suspectThree that is outside the function scope as the one inside the function scope is not seen outside the scope
// console.log(`Suspect three is: ${ suspectThree }`);

//episode 5

// const detective = {
//   name: 'Ace Ventura',
//   pet: 'monkey'
// };
//
// const printName = function (detective) {
//   return detective.name;
// }
//
// const detectiveInfo = function () {
//   detective['name'] = 'Poirot';
//   return printName(detective);
// }
//
// //returns 'Poirot' as the name of the detective because in JS it is possible to modify a value of a constant object which in this case is constant detective object
// console.log(detectiveInfo());

//episode 6
const murderer = 'rick';

const outerFunction = function () {
  const murderer = 'marc';

  const innerFunction = function () {
    murderer = 'valerie';
  }

  innerFunction();
}

//returns an error message as it is not possible to reassign values to constant variables in JS
outerFunction();
console.log(`The murderer is: ${ murderer }`);
