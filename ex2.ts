// Exercise 2: Write a program that takes input and calculates the volume of a cube.

// Volume of cube = s^3

const sideOfCube = 10;
const volumeOfCube = sideOfCube ** 3;

function calculateCubeVolume(side: number): number {
  const volume = side * 3;
  return volume;
}

const volume = calculateCubeVolume(70);
console.log(volume);
