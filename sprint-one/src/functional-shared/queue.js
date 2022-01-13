var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

 queueMethods.enqueue = function (val) {
  this.storage[this.end] = val;
  this.end++;
}

 queueMethods.dequeue = function () {
  if (this.storage.length === 0) {
    return;
  }
  var unWanted = this.storage[this.start];
  delete this.storage[this.start];
  this.start++;
  return unWanted;
}

 queueMethods.size = function () {
  return Object.keys(this.storage).length;
}


