class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.l = 0;
  }

  push (val) {
    this.storage[this.l] = val;
    this.l++;
  }

  pop () {
    var unWanted = this.storage[this.l - 1];
    delete this.storage[this.l - 1];
    this.l--;
    return unWanted;
  }

  size () {
    return Object.keys(this.storage).length;
  }

}