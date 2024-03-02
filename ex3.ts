// Exercise 3: Write a program that checks if a given number is positive, negative, or zero.

function checkNumberSign(userInput: number) {
  if (userInput > 0) {
    console.log("The number is positive");
  } else if (userInput < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }
}

checkNumberSign(10);
checkNumberSign(-5);
checkNumberSign(0);
