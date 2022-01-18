var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a var newTree
  var newNode = Tree(value);
  // push the newTree onto the children property
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  // create a var result
  var result = false;
  var searchTree = function(tree) {
    if (tree.value === target) {
      result = true;
    } else {
      for (var i = 0; i < tree.children.length; i++) {
        if (tree.children[i].value === target) {
          result = true;
        } else {
          searchTree(tree.children[i]);
        }
      }
    }
  }
searchTree(this);
return result;
};

// tree is similar to linked list in that the children

/*
 * Complexity: What is the time complexity of the above functions?
 */
