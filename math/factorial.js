const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact *= i;
  }

  return fact;
};

//Big O -O(n)

module.exports = {
  factorial,
};
