var BinarySearchTree = function(value) {
  //this.tree = {}
  //this.value =  value;
  //this.left = null;
  //this.right = null;

  var tree = {};

  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.max = null;
  tree.min = null;

  tree.insert = function(value) {
    //O(log n)
    //debugger;
    //var newTree = BinarySearchTree(value);
    var currentNodeValue = tree.value;
    if (!tree.right && value > currentNodeValue) {
      tree.right = BinarySearchTree(value);
    } else if (tree.right && value > currentNodeValue) {
      tree.right.insert(value);
    } else if (!tree.left && value < currentNodeValue) {
      tree.left = BinarySearchTree(value);
    } else if (tree.left && value < currentNodeValue) {
      tree.left.insert(value);
    }
  };
/*
-> current: 5 ->  2 -> 3 -> 7 -> 6
               3
                  7
                6

 x    x
x 3  6 x
tree.left.right.value = 3
tree.right.left.value = 6
*/
// var currentNode =tree
//value < currentNode.value 7<10
// currentNode = tree.left
// if value < currentNode.value 7<9


  tree.contains = function(target){
    //O(log n)
    //debugger;
    var result = false;
    var currentNodeValue = tree.value;
    if (currentNodeValue === target) {
      result = true;
    } else if (tree.right && target > currentNodeValue) {
      return tree.right.contains(target);
    } else if (tree.left && target < currentNodeValue) {
      return tree.left.contains(target);
    }
    return result;
  };

  tree.depthFirstLog = function(func){
    //O(n)
    func.call(this, tree.value);
    if (tree.left) {
      tree.left.depthFirstLog(func);
    }
    if (tree.right) {
      tree.right.depthFirstLog(func);
    }
  };
  return tree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
