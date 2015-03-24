var LL= require('./lib/LinkedList'),
    Node = LL.Node,
    LinkedList = LL.LinkedList;


var list = new LinkedList();

list.insert(12);
list.insert(40);
list.insert(1);
console.log('size: ', list.size());
list.traverseLinkedList();
