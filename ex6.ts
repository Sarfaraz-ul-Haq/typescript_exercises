// Exercise 6: Write a program that calculates the result of a mathematical expression.
// ((10 + 5) * 3 - 2) / (4 % 3)  - 7)

// JavaScript / TypeScript applies the BODMAS rule to evaluate mathematical expressions.

function calculateResult(mathExpression: number): number {
  return mathExpression;
}

const result = calculateResult(5 + ((5 + 5) % 2) - 1 + 100);
console.log(result);
