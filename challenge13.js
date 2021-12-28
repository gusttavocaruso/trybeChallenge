const dig = (number_s) => {
  const range = [...Array(1001).keys()];
  return range.map((numb) =>
    numb
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, in) => acc += in)
}

console.log(dig(26));
