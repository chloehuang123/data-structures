var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.l = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {};

stackMethods.push = function (val) {
  this.storage[this.l] = val;
  this.l++;
}

stackMethods.pop = function () {
  if (this.l === 0) {
    return null;
  }
  var unWanted = this.storage[this.l-1];
  delete this.storage[this.l-1];
  this.l--;
  return unWanted;
}

stackMethods.size = function () {
  return this.l;
}


