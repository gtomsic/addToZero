// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:

const checkAddToZero = (myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    for (let x = 0; x < myArray.length; x++) {
      if (myArray[i] + myArray[x] === 0) {
        if (i === x) {
          return;
        } else {
          console.log(true);
        }
      }
    }
  }
};

checkAddToZero(array);
