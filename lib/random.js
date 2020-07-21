module.exports = function(val1, val2) {
    if (val1 === val2) {
        // returns true if two values are equal
      return true;
    } else {
      return false;
    }
  };

  function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
  }
  
  module.exports = randomNumber;