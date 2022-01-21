

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if the index is taken
  if (k) {
    // if not, then we use set function
    this._storage.set(index, v);
    // else
  } else {
    // generate a new index
    newIndex = getIndexBelowMaxForKey(k+1, this._limit);
    // use set function again
    this._storage.set(newIndex, v);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


