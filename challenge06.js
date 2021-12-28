const primo = (n) => {

  const range = [...Array(99999).keys()]; 
  const cousin = range.filter((i) =>
    i !== 2 && i !== 3 &&
    i !== 5 && i !== 7 && i !== 13 ?
    (i % 2 !== 0 &&
     i % 3 !== 0 &&
     i % 5 !== 0 &&
     i % 7 !== 0 &&
     i % 13 !== 0 ? true : false)
    : true
  ).splice(1)
  return cousin[n - 1]

};

console.log(primo(6));
