// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

numArr = [1, 2, 3, 4, 5];
function myFunction(a, n) {
  return a.slice(a.length - n);
}
console.log(myFunction(numArr, 2));
