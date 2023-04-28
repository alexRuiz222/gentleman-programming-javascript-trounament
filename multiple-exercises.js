//* 1-Given an array of numbers, write a function to find the biggest number.
solutionOne = [1, 2, 3, 4].reduce((acc, el) => (el > acc ? el : acc));
console.log("----------------------------------------------------------------");
console.log(solutionOne);

//* 2-Given an array of numbers, write a function to find the smallest number.
solutionTwo = [1, 2, 3, 4].reduce((acc, el) => (el < acc ? el : acc));
console.log("----------------------------------------------------------------");
console.log(solutionTwo);

//* 3-Given an array of numbers, write a function to calculate the sum of all the elements.
solutionThree = [1, 2, 3, 4].reduce((acc, el) => acc + el);
console.log("----------------------------------------------------------------");
console.log(solutionThree);

//* 4-Given an array of numbers, write a function to calculate the average of all the elements.//* TESTS
arr = [1, 2, 3, 4];
solutionFour = arr.reduce((acc, el) => acc + el) / arr.length;
console.log("----------------------------------------------------------------");
console.log(solutionFour);

//* 5-Given an string, write a function to revert the order of the words into the string.
solutionFive = "Let's do it, we are practicing well"
  .split("")
  .reverse()
  .join("");
console.log("----------------------------------------------------------------");
console.log(solutionFive);

//* 6-Given an string, write a function to find the longest word in the string.
solutionSix = "Perseverance is your best allied"
  .split(/\s/)
  .reduce((acc, el) => (el.length > acc.length ? el : acc));
console.log("----------------------------------------------------------------");
console.log(solutionSix);

//* 7- Given a number and a string, write a function to truncate the string to "n" characters and add "..." at the end.
let solutionSeven = (text, n) =>
  text.slice(0, n) + (text.length > n ? "..." : "");
console.log("----------------------------------------------------------------");
console.log(
  solutionSeven("I'm a web developer and I'm always growing professionally", 15)
);

//* 8- Given an array of numbers, write a function to remove all the duplicate numbers and returns a new array without the duplicated numbers.
let solutionEight = (arr) => [...new Set(arr)];
console.log("----------------------------------------------------------------");
console.log(solutionEight([5, 2, 1, 4, 5, 2, 11, 1, 1, 5, 9, 8, 9]));

//* 9-Given an array of numbers and an objective number, write a function to find two numbers in the array which the sum is equal to the objective value.
let solutionNine = (arr, goal) => {
  let res = [];
  for (let x = 0; x < arr.length; x++) {
    for (
      let z = x + 1 <= arr.length ? x + 1 : arr.length - x;
      z < arr.length;
      z++
    ) {
      if (arr[x] + arr[z] == goal) return [arr[x], arr[z]];
    }
  }
  return res;
};
console.log("----------------------------------------------------------------");
console.log(solutionNine([1, 2, 3, 4, 5], 6));
