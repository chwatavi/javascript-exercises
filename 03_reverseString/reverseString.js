const reverseString = function(string) {
  let charList = string.split('');
  let output = '';
  while (charList.length > 0){
    output += charList.pop();
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
