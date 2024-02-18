// const matrixArr = [
//   [1, 1, 2, 4, 1, 1, 7],
//   [1, 1, 1, 2, 1, 1, 7],
//   [7, 7, 1, 1, 1, 1, 1],
// ]; example of an a matrix to check the output.

const solveMatrix = (matrix) => {
  const isValidMatrix = matrix.every((row) =>
    row.every((num) => typeof num === "number")
  );

  if (!isValidMatrix) {
    alert("Matrix must contain only numbers.");
    return;
  }

  const numberCounts = {};

  matrix.forEach((row) => {
    row.forEach((num) => {
      if (numberCounts[num]) {
        numberCounts[num]++;
      } else {
        numberCounts[num] = 1;
      }
    });
  });

  const resultArray = Object.entries(numberCounts).map(([num, count]) => ({
    num: parseInt(num),
    count,
  }));

  //   console.log(resultArray); just to check the output.
};

// solveMatrix(matrixArr); calling the function to check the output.
