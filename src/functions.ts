import answers from './arrays';

export default {
  functionFunction: function (str: string) {
    return function (str2: string) {
      // console.log(`${str}, ${str2}`)
      return `${str}, ${str2}`;
    };
  },

  makeClosures: function (arr: number[], fn: Function) {
    // Create an array of functions which applies the function on each item value in the arr
    return arr.map(val => () => fn(val));
  },

  // Use spread operator to create an array of arguments
  useArguments: function (...args: number[]) {
    return answers.sum(args);
  },
};
