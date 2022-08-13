// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
//this is broken but I need to return to HW lol
numArr = [1, 2, 3, 4, 5];
newArr = [];
function myFunction(a, n) {
  for (let i = n; i > 0; i--) {
    newArr.push(a[i]);
  }
}
myFunction(numArr, 2);
console.log(newArr);
