const cousinVerify = (i) => {
  return (
    i !== 2 && i !== 3 &&
    i !== 5 && i !== 7 && i !== 13) ?
    (i % 2 !== 0 &&
     i % 3 !== 0 &&
     i % 5 !== 0 &&
     i % 7 !== 0 &&
     i % 13 !== 0 ? true : false)
    : true
}

console.log(cousinVerify(377));
