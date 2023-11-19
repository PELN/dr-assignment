export default {
  sum: function (arr: number[]) {
    // Add the currentValue to the previousValue, which accumulates a sum
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0); 
  },

  remove: function (arr: number[], value: number) {
    // Return new array without the specified value (2)
    return arr.filter(item => item !== value);
  },

  removeWithoutCopy: function (arr: number[], item: number) {
    // arr = [ 1, 2, 2, 3, 4, 2, 2 ]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1); // startIndex, deleteCount

        i--; // Decrement index since the array length changes after splice
      }
    }
    return arr;
  },

  insert: function (arr: (string|number)[], item: (string|number), index: number) {  
    arr.splice(index, 0, item); // Insert item ('z') at index (2), remove 0 items
    return arr;
  },

  count: function (arr: number[], item: number) {
    return arr.filter(el => el === item).length; // Filter out all elements in array with item value (4)
  },

  duplicates: function (arr: number[]) {
    const uniqueItems = new Set(); // Store/track unique values in arr
    const duplicates: number[] = []; // Store duplicates found in arr
    
    arr.forEach(item => {
      // Check if item is already in uniqueItems
      if (uniqueItems.has(item)) {
        // If true, check if item is already in duplicates, if not, add item
        if (!duplicates.includes(item)) {
          duplicates.push(item);
        }
      } else {
        // If item is not in uniqueItems, add it
        uniqueItems.add(item);
      }
    });

    return duplicates.sort();
  },

  findAllOccurrences: function (arr: string[], target: string) {
    const indexes: number[] = []; // Store indexes of occurrences (of target "a")
    
    // Loop through array and find indexes of target "a"
    arr.forEach((el, index) => {
      if (el === target) {
        indexes.push(index);
      }
    });

    return indexes; // Output: [ 0, 6 ]
  },
};
