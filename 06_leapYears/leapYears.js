const leapYears = function(yr) {
  leap = false;
  if (yr % 4 == 0){
    leap = true;
    if (yr % 100 == 0){
      leap = false;
        if (yr % 400 == 0){
          leap = true;
        }
    }
  }
  return leap;
};

// Do not edit below this line
module.exports = leapYears;
