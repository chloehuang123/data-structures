var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    //generate a node
    // need to check whether the head exists already
    // if there isnt a head then the new node will be the head and the tail
    // head = tail = node for the first node in the list
    // after the first node then we can add to head or tail
    // must replace the last nodes .next property with the one we add to the tail
    // O(1)

    var newNode = Node(value);
    //debugger;
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
    return list;
  };

  list.removeHead = function () {
    // O(1)
    //debugger;
    if(list.head) {
      //remove head
      var returnNode = list.head;
      // list.head = list.head.next;
      // delete and replace
      list.head = returnNode.next;
      return returnNode.value;
    } else {
      return null;
    }
  };

  list.contains = function (target) {
    //iterate through every node in the list
    // start with the head node
    // head next until to null
    // checking if list.head.value equals to target
    //debugger;
    // O(n)
    var result = false;
    var checkNode = function(node) {
      if (node) {
        if (node.value !== target) {
          checkNode(node.next);
        } else {
          result = true;
        }
      }
    };
    checkNode(list.head);

    return result;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
