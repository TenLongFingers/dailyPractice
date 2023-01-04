// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 || i % 5) {
      sum += i;
    }
    console.log(sum);
  }
  //loop through all numbers under number {
  // if divisible by 3 OR 5, increment sum by divisible number}
}

console.log(solution(10));
