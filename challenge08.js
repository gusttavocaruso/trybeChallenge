const caixa = (values) => {
  const finalCx = [];
  values.map((n) => n !== 0 ?
    finalCx.push(n) : finalCx.pop())
  return finalCx.reduce((acc, i) => acc += i);
}

const registro = [1,3,5,4,0,0,7,0,0,6];
console.log(caixa(registro))
