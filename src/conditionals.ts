export default {
  fizzBuzz: function (num?: number | string) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return 'fizzbuzz';    
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    
    // Validate input
    if (typeof num !== 'number' || isNaN(num)) {
      return false;
    }

    // Use modulus operator to return the remainder,
    // if the number has a remainder of zero, it is divisible
    if (num % 3 === 0 && num % 5 === 0) {
      // console.log(num + " fizzbuzz")
      return 'fizzbuzz';
    } else if (num % 3 === 0) {
      // console.log(num + " fizz")
      return 'fizz';
    } else if (num % 5 === 0) {
      // console.log(num + " buzz")
      return 'buzz';
    } else {
      return num;
    }
  },
};
