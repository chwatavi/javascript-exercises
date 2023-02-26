const removeFromArray = function( arr, ...removables) {
  function checkVal(val){
    for (let removable of removables){
      if (val === removable){
        return false;
        break;
      }
    }
    return true;
  }
  return arr.filter(checkVal);
};

// Do not edit below this line
module.exports = removeFromArray;
