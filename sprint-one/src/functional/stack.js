var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var l = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[l] = value;
    l++;
  };

  someInstance.pop = function () {
    var unWanted = storage[l-1];
    delete storage[l-1];
    l--;
    return unWanted;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};



var newStack = Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.s);