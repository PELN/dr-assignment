interface Directory {
  dir: string;
  files: (string | Directory)[]; // Can contain an array of elements, where each element can be either a string or a Directory object
}

export default {
  listFiles: function (data: object, dirName?: string) {
    function traverse(directory: Directory | { [key: string]: any }) {
      if (directory.files) {
        // If the directory contains files, iterate through them to gather file names
        (directory.files as any[]).forEach(function(item) {
          // If the current item is a string, it represents a file, so add it to the file list
          if (typeof item === 'string') {
            fileList.push(item);

            // If the current item is an object with a files property, it indicates a subdirectory, so traverse it further
            // If the item is an object, which has a property of files, it should push those items to the list
          } else if (typeof item === 'object' && item.hasOwnProperty('files')) {
            // Recursively call the traverse function to explore the subdirectory and collect its files
            traverse(item);
          }
        });
      }
    }
    const fileList: string[] = [];
  
    traverse(data);

    if (dirName) {
      return fileList.filter(file => file.endsWith('.'+dirName));
    }
    
    // console.log("FILE LIST:",fileList)
    return fileList;
  },
};
