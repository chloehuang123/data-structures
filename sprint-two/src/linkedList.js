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
    //class of value is a Node
    //var a = Node('a');
    //l = LinkedList();
    //l.addToTail(a);

    var newNode = Node(value);

    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.tail.next = newNode;
    }
    return list;
  };

  list.removeHead = function () {
    if(!list.head) {
      //remove head
      var returnNode = list.head;
      // delete and replace
      list.head = returnNode.next;
      return returnNode.value;
    } else {
      return list.head;
    }
  };

  list.contains = function (target) {
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
