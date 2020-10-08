const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );
  return arr;
};

module.exports = myRemoveWithoutCopy;
