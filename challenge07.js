const primo = (number) => {

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
  
  const cousinDiv = cousin.filter((j) => number % j === 0);
  return Math.max(...cousinDiv);
};

console.log(primo(13195));