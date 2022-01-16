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
    //var currentNode;
    //debugger;
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
      //currentNode = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;

    }
    return list;
  };

  list.removeHead = function () {
    //debugger;
    if(list.head) {
      //remove head
      var returnNode = list.head;
      // list.head = list.head.next;
      // delete and replace
      list.head = returnNode.next;
      return returnNode.next.value;
    } else {
      return list.head.value;
    }
  };

  list.contains = function (target) {
    //iterate through every node in the list
    // start with the head node
    // head next until to null
    // checking if list.head.value equals to target
    //debugger;
    var checkNode = function(node) {
      if (node) {
        if (node.value !== target) {
          checkNode(node.next);
        } else {
          return true;
        }
      }
      return false;
    };
    return checkNode(list.head);
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
