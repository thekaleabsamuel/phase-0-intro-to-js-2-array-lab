// index.js

// You can define the cats array here or import it from another file if needed
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Creating a new array by concatenating the original cats array with the new cat
  return cats.concat(name);
}

function prependCat(name) {
  // Creating a new array by concatenating the new cat with the original cats array
  return [name].concat(cats);
}

function removeLastCat() {
  // Creating a new array by slicing the original cats array excluding the last element
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Creating a new array by slicing the original cats array excluding the first element
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};