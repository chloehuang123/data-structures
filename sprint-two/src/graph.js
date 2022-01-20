

// Instantiate a new graph
var Graph = function() {
  //psuedoclassical style
  this.nodes = [];
  this.edges = {}; // { 1: [2,3], 2: [1], . . . }
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.nodes.indexOf(node);
  delete this.nodes[index];

 // check if the node exists in the this.edge
  if(Object.keys(this.edges).includes(node)) {
    // if so, delete
    delete this.edges.node;
  }
  // iterate through the keys
  for (var keys in this.edges) {
    var index = this.edges[keys].indexOf(node);
    if (index > -1) {
      delete this.edges[keys][index];
    }
  }
};




// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes.includes(fromNode) && this.edges[fromNode].includes(toNode)) {
      return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //edges[fromNode].push(toNode)
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // search for the fromNode from the keys
  // delete the fromNodes from the toNodes
  if (this.edges[fromNode]) {
    var index = this.edges[fromNode].indexOf(toNode);
    delete this.edges[fromNode][index];
  }
  if (this.edges[toNode]) {
    var index = this.edges[toNode].indexOf(fromNode);
    delete this.edges[toNode][index];
  }

};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //input: function
  // iterate through each node
  for (var i = 0; i < this.nodes.length; i++) {
    // invoke cb function
    // node is at this.nodes[i]
    // have to invoke the function on this.nodes[i]
    // 3.push() instead of graph.push()
    // arguments
    cb.call(this, this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


