// // Write a function that takes an array (a) and a number (n) as arguments
// // It should return the last n elements of a

// numArr = [1, 2, 3, 4, 5];
// function myFunction(a, n) {
//   return a.slice(a.length - n);
// }

// // mirror box problem 8/18/22
// /* ---------------------------------------------------------------
//     CHALLENGE 1:
//       -Return an object with two properties, "x" and "y", which will be the index positions of the point in our box that is is occupied by a "1"

//       EXAMPLE:
//         -Input:
//         [
//           [1, 0, 0, 0],
//           [0, 0, 0, 0],
//           [0, 0, 0, 0],
//           [0, 0, 0, 0],
//         }

//         -Return:
//         {x: 1, y: 1}
//   */
// /* ---------------------------------------------------------------
//     CHALLENGE 2:
//       -Return a string that is the quadrant position of the point within the box EXAMPLE: "bottom right", or "top center", or "center left", etc...

//        EXAMPLE:
//       -Input:
//       [
//         [1, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//       }

//       -Return:
//       "top left"
//   */
// /* ---------------------------------------------------------------
//     CHALLENGE 3:
//       -Return a new box with only a single point occupying the exact opposite position within the box.

//       EXAMPLE:
//       -Input:
//       [
//         [1, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//       ]

//       -Return:
//       [
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 0],
//         [0, 0, 0, 1],
//       ]
//   */
// const box1 = [
//   [1, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];

// const box2 = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

// const box3 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

// const box4 = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

// function mirrorBox(box) {
//   for (let y in box) {
//     for (let x in box[y]) {
//       if (box[y][x] === 1) {
//         let coordinates = { x, y };
//         return coordinates;
//       }
//     }
//   }
// }

// console.log(mirrorBox(box2));

//CODEWARS 9/24/22
// const jadenTweet = "How can mirrors be real if our eyes aren't real";
// // String.prototype.
// const toJadenCase = (tweet) => {
//   let arr = tweet.split(" ");
//   let newJadenTweet = [];
//   for (let i = 0; i < arr.length; i++) {
//     newJadenTweet.push(arr[i].toUpperCase);
//   }
//   return newJadenTweet;
// };
// console.log(toJadenCase(jadenTweet));

//CODINGAME 12/13/22 The Descent
// game loop
// while (true) {
//   let highestMountain = 0;
//   let mountainHeightIndex = 0;
//   for (let i = 0; i < 8; i++) {
//     const mountainH = parseInt(readline()); // represents the height of one mountain
//     if (highestMountain < mountainH) {
//       highestMountain = mountainH;
//       mountainHeightIndex = i;
//     }
//   }

//   console.log(mountainHeightIndex); // The index of the mountain to fire on.
// }
