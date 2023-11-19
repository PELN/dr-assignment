const _ = require('lodash');

export default {
  clone: function<T> (obj: T) {  
    const clone = _.cloneDeep(obj)
    // console.log("CLONE",clone)
    return clone;
  },
};
