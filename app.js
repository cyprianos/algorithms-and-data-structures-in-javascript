var LinkedList = require('./lib/LinkedList');
var StackLinkedList = require('./lib/StackLinkedList');


var list = new LinkedList();

list.insert(12);
list.insert(40);
list.insert(1);
console.log('size: ', list.size());
list.traverseLinkedList();


var stack = new StackLinkedList();
stack.push(10);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());