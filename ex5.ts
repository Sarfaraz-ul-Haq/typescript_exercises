// Exercise 5: Write a program that determines if a person is eligible to vote based on their age.

function isEligibleToVote(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

isEligibleToVote(15); // false
isEligibleToVote(18); // true
isEligibleToVote(25); // true
