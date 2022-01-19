

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
  if (this.edges[fromNode]) {
    // delete toNode from the array
    // must also delete fromNode from the array
    var index = this.edges[fromNode].indexOf(toNode);
    delete this.edges[fromNode][index];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


