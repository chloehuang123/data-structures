var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  stackMethods.storage = {};
  stackMethods.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (val) {
  this.storage[this.length] = val;
  this.length++;
}

stackMethods.pop = function () {
  if (this.length === 0) {
    return 0;
  }
  var unWanted = this.storage[this.length-1];
  delete this.storage[this.length-1];
  this.length--;
  return unWanted;
}

stackMethods.size = function () {
  return this.length;
}


