

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //O(1)
  //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  //check if the index is taken
  //we dont have access to this._storage[index]in this scope
  //so we have to use this._storage.get()
  if (!this._storage.get(index)) {
    this._storage.set(index, [tuple]);
    // else
  } else {
    var bucket =this._storage.get(index);
    // iterate through tuple
    for (var i = 0; i < bucket.length; i++) {
      // check if any of keys exists already
      //bucket = [[k, v], ...]
      //bucket[i] = [k, v]
      //bucket[i][0] = k
      //bucket[i][1] = v
      if (bucket[i][0] === k) {
        // if so, replace value
        bucket[i][1] = v;
      }else{
        // else push it to the index
        bucket.push(tuple)
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  //O(1)
  //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  //O(1)
  //debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =this._storage.get(index);
  if(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][0] = undefined;
        bucket[i][1] = undefined;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


