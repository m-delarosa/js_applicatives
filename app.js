const everyonesPets = [
  "Bucky",
  "Deejae",
  "Terra",
  "Freckles",
  "Kona",
  "Buckles",
  "Jezebel",
  "Scout",
  "Landon",
  "Igby",
  "Luna",
  "Sevie",
  "Maja",
  "Gusu",
  "Mr. Knox"
];
const everyonesCars = ["subaru", "ford", "toyota", "chevy"];
const integerArray = [1, 2, 3, 4, 5];

console.log("everyonesPets", everyonesPets);
console.log("everyonesCars", forEveryonesPets(everyonesCars));

forEveryonesPets(everyonesPets);

console.log("possesivePets", forEveryonesPets(everyonesPets));

function forEveryonesPets(everyonesPets) {
  return everyonesPets.map(pet => {
    return pet + "'s";
  });
}
// console.log("bananas", bananas);
// first return applies to the outer function
// second return saves

consoleLogEveryonesPets(everyonesPets);

function consoleLogEveryonesPets(everyonesPets) {
  return everyonesPets.forEach(pet => {
    console.log("pet", pet);
  });
}
// console.log does not need a return, it is built in to its own function
// this is only used for its side effects, just like in Ruby.

console.log("findTylersPet", findTylersPet(everyonesPets));

function findTylersPet(pets) {
  return pets.filter(pet => {
    return pet === "Deejae";
  });
}
//If there are multiple in will return all of them.

console.log("fxaddOne", addOne(integerArray));

function addOne(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, int) => {
    return acc + int;
  }, 0);
}
// The zero at the end is the starting value for the accumulator

console.table(copyAnArray(everyonesCars));
//console.table logs in table format for arrays and objects, but you
//cannot include a label.

function copyAnArray(everyonesCars) {
  return everyonesCars.reduce((acc, car) => {
    acc.push(car);
    return acc;
  }, []);
}
// This is taking apart an array and then putting it back together as a new one.
