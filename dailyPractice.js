// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
//Still broken, but seriously, I need to go back to homework now
numArr = [1, 2, 3, 4, 5];
function myFunction(a, n) {
  const lastItemInArray = Math.max(...a);
  for (let i = n; i > 0; i--) {
    return lastItemInArray - i;
  }
  console.log(lastItemInArray);
}
console.log(myFunction(numArr, 2));
