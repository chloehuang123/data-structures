var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //O(1)
  this._storage.push(item);
};
setPrototype.contains = function(item) {
  //O(1)
  return this._storage.includes(item);
};
setPrototype.remove = function(item) {
  //O(1)
  var index = this._storage.indexOf(item);
  delete this._storage[index];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
