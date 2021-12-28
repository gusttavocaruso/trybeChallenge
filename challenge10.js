const sqr = (n) => {
  const range = [...Array(n + 1).keys()];
  const squareSum = range.reduce((acc, i) => acc += i) ** 2;
  const sumSquare = range.reduce((acc, j) => acc += j ** 2);
  return squareSum - sumSquare;
}

console.log(sqr(10))