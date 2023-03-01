const linearSearch = (arr, n) => {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      index = i;
    }
  }
  return index;
};
//Big O=O(n)
module.exports = {
  linearSearch,
};
