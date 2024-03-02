// Exercise 4: Write a program that checks if a given number is even or odd.

function isEvenOrOdd(userInput: number) {
  if (userInput % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

isEvenOrOdd(2); // prints "The number is even"
isEvenOrOdd(5); // prints "The number is odd"
