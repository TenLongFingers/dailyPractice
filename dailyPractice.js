// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

numArr = [1, 2, 3, 4, 5];
function myFunction(a, n) {
  return a.slice(a.length - n);
}

// mirror box problem 8/18/22
/* ---------------------------------------------------------------
    CHALLENGE 1:
      -Return an object with two properties, "x" and "y", which will be the index positions of the point in our box that is is occupied by a "1" 

      EXAMPLE: 
        -Input:
        [
          [1, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        }

        -Return: 
        {x: 1, y: 1}
  */
/* ---------------------------------------------------------------
    CHALLENGE 2:
      -Return a string that is the quadrant position of the point within the box EXAMPLE: "bottom right", or "top center", or "center left", etc...   

       EXAMPLE: 
      -Input:
      [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      }

      -Return: 
      "top left"
  */
/* ---------------------------------------------------------------
    CHALLENGE 3:
      -Return a new box with only a single point occupying the exact opposite position within the box. 

      EXAMPLE: 
      -Input:
      [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ]

      -Return: 
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
      ]
  */
const box1 = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const box2 = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const box3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const box4 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function mirrorBox(arr) {
  for (let i = 0; i < arr.length; i++) {
    let outerArray = arr;
    let innerArray = arr[i];
    if (innerArray.includes(1)) {
      return innerArray.findindex(1);
    }
  }
}

console.log(mirrorBox(box1));
