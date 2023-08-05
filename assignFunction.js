const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  isTwoPlusTwo();
  console.log(isTwoPlusTwo.name); // Prints checkThatTwoPlusTwoEqualsFourAMillionTimes

/* In JavaScript, functions are first-class citizens, which means they can be treated like any other value. 
When you assign a function to a variable (in this case, isTwoPlusTwo), that variable will hold a reference to the function. 
The const keyword ensures that the reference (the memory address) stored in isTwoPlusTwo cannot be changed. 
However, the properties of the function object, such as .name, remain accessible. 
So, isTwoPlusTwo.name will give you the name of the original function checkThatTwoPlusTwoEqualsFourAMillionTimes 
because isTwoPlusTwo is just another reference to the same function object. */