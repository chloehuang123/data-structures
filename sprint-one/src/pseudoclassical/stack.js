var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.l = 0;
};

Stack.prototype.push = function (val) {
  this.storage[this.l] = val;
  this.l++;
}

Stack.prototype.pop = function () {
  if (this.storage.length === 0) {
    return null;
  }
  var unWanted = this.storage[this.l-1];
  delete this.storage[this.l-1];
  this.l--;
  return unWanted;
}

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
}


