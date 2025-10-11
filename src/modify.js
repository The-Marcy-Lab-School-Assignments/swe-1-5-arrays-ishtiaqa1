const uppercaseAll = (...Words) => {
  let wordArr = [];
  for (const word of Words) {
    wordArr.push(word.toUpperCase());
  }
  return wordArr;
};

const destructureCoordinates = (coordinates) => {
  const [x,y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
