// Exercise 1: Write a program that calculates the area of a rectange

function calculateAreaOfRectangle(length: number, width: number): number {
  const area = length * width;
  return area;
}

const area = calculateAreaOfRectangle(100, 50);
console.log(area);
