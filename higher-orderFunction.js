const addTwo = num => {
    return num + 2;
  }
  
  //Higher-order Function
  const checkConsistentOutput = (func, val) => { 
    const checkA = val + 2;
    const checkB = func(val); // Callback Function

   //return checkA === checkB ? func(val) : 'inconsistent results'; (ternary operator)

    if (checkA === checkB) {
      return func(val); // Returns the result of Callback Function
    } else {
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 15)); // Prints 17
  