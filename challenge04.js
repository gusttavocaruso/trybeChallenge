const func = (roof) => {
  let sum = 0;
  const range = [...Array(roof).keys()]; 
  range.map((i) =>
    (i % 3 === 0 || i % 5 === 0) ?
      sum += i : i)
  return sum;
}

console.log(func(10));
