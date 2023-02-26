const sumAll = function(a, b) {
  function verifyInput(n){
    return (typeof n) == 'number' && n >= 0;
  }
  if (!verifyInput(a) || !verifyInput(b)){
    return 'ERROR';
  }
  if (a > b){
    let temp = a;
    a = b;
    b = temp;
  }
  sum = 0;
  for (num = a; num <= b; num ++){
    sum += num;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
