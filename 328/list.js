let node = {
    val : 1
}
let node2 = {
    val: 2
}
let node3 = {
    val: 3
}

//node -> node2 -> node3

node.next = node2;
node2.next = node3;
console.log(node)

let current = node;
while(current) {
    console.log(current.val);
    current = current.next;
}