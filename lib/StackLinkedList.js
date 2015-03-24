var LL = require('./LinkedList');

function Node(data) {
	this.data = data;
	this.nextNode = undefined;
}

Node.prototype.toString = function() {
	return this.data.toString();
};

Node.prototype.getData = function() {
	return this.data;
};

Node.prototype.setData = function(data) {
	this.data = data;
};

Node.prototype.getNextNode = function() {
	return this.nextNode;
}

Node.prototype.setNextNode = function(nextNode) {
	this.nextNode = nextNode;
}

function Stack() {
	this.root = undefined;
	this.count = 0;
}

// O(1)
Stack.prototype.push = function(newData) {
	this.count++;

	if(this.root == undefined){
		this.root = new Node(newData);
	} else {
		var oldRoot = this.root;
		this.root = new Node(newData);
		this.root.setNextNode(oldRoot);
	}
}

// 0(1)
Stack.prototype.size = function() {
	return this.count;
}

// O(1)
Stack.prototype.pop = function() {
	if (this.root!==undefined) {
			var ret = this.root.getData();
	this.root = this.root.getNextNode();
	this.count--;
	} else {
		return undefined;
	}
	return ret;
}

// 0(1)
Stack.prototype.isEmpty = function() {
	return this.count === undefined;
}

var exports = module.exports = Stack;