const addToFrontOrBack = (arr, val, isFront) => {
  if (isFront) {
    arr.unshift(val);
  } else {
    arr.push(val);
  }
};

const reverseString = (string) => {
  let arr = string.split('');
  arr.reverse();
  return arr.join("");
};

const newArrayFullOf = (value, numOfValue) => {
  let arr = new Array(numOfValue);
  arr.fill(value);
  return arr;
};

const insertIntoMiddle = (arr, value) => {
  const middle = Math.floor((arr.length)/2);
  arr.splice(middle, 0, value);
};

const deleteFromMiddle = (arr) => {
  const middle = Math.floor((arr.length)/2);
  arr.splice(middle,1);
};

const isRightIndex = (arr, value, index) => {
  return arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  let roundedArr = [];
  for (let i = 0; i < arr.length; i++) {
    roundedArr.push(Math.floor(arr[i]));
  }  
  return roundedArr;
};

const getAllYCoordinates = (arrOfCoords) => {
  let yArray = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    yArray.push(arrOfCoords[i][1]);
  }
  return yArray;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
