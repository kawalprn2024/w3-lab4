// Example 1

const array0 = [1, 4, 9, 16];

const cb=function (x) {
    return x * 3;
}

// Pass a function to map
const map0 = array0.map(cb)

console.log("array0: ", array0);
console.log("map0: ", map0);

// Example 2

const words = ["apple", "banana", "cherry", "date"];
cb2= function(word) {
    return word.length;
  }
const lengths = words.map(cb2);

console.log(lengths);