//2


function top3(products, amounts, prices) {
  let stockSold = []
  for (let i=0; i<products.length; i++) {
    stockSold.push([products[i], amounts[i]*prices[i]])
    }
  stockSold = stockSold.sort((a, b) => b[1] - a[1])
  return [stockSold[0][0], stockSold[1][0], stockSold[2][0]]
}


//4


function factorial(n){

 if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
return n<2 ? 1 : n*factorial(n-1);
}








