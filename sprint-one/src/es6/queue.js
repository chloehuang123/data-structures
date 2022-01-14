class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue (val) {
    this.storage[this.end] = val;
    this.end++;
  }

  dequeue () {
    var unWanted = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return unWanted;
  }

  size () {
    return Object.keys(this.storage).length;
  }


}
