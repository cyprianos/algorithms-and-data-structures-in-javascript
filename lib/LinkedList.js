function Node(data){
  this.data = data;
  this.nextNode = undefined;
}

Node.prototype.toString = function() {
  return this.data.toString();
};
Node.prototype.setData = function(data) {
  this.data = data;
};

Node.prototype.getData = function () {
  return this.data;
};

Node.prototype.getNextNode = function () {
  return this.nextNode;
};

//insertion to the end of the list
Node.prototype.insert = function (newData) {
  if(this.nextNode !== undefined) {
    //recursive
    this.nextNode.insert(newData);
  } else {
    this.nextNode = new Node(newData); 
  }
}

Node.prototype.remove = function (dataToRemove, previousNode) {
  if (this.data == dataToRemove) {
    previousNode.setNextNode(this.getNextNode());
    delete this.data;// = undefined;
    delete this.nextNode;// = undefined;
  } else {
    if(this.getNextNode() !== undefined){
      this.getNextNode.remove(dataToRemove, this);
    }
  }
}


function LinkedList(){
  this.root = undefined;
  this.counter = 0;
}

LinkedList.prototype.isEmpty = function () {
  return this.root === undefined;
};

LinkedList.prototype.size = function () { return this.counter; };

LinkedList.prototype.insert = function (data) {
  this.counter++;
  if(this.root === undefined) {
    this.root = new Node(data);
  } else {
    this.root.insert(data);
  }
}

LinkedList.prototype.remove = function (dataToRemove) {
  this.counter--;
  if(this.root !== undefined) {
    if(this.root.getData() === dataToRemove) {
      this.root = this.root.getNextNode();
    } else {
      this.root.remove(dataToRemove, root);
    }
  }
}

LinkedList.prototype.traverseLinkedList = function () {
  var actualNode = this.root,
  out = "";
  while(actualNode !== undefined) {
    out += actualNode;
    out += "-";
    actualNode = actualNode.getNextNode();
  }
  console.log(out);
}

var exports = module.exports = {
  Node: Node,
  LinkedList: LinkedList
};
