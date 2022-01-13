var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var l = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[l]=value;
    l++;
  };

  someInstance.dequeue = function() {
    if (storage.length === 0) {
      return null;
    }
    var unWanted = storage[0];
    delete storage[0];
    for (var key in storage) {
      storage[key-1]=storage[key];
    }
    l--;
    delete storage[l];
    return unWanted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};



