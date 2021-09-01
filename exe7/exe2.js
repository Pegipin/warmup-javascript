A stack is a data structure that holds a list of elements, that is based on LIFO ( Last in, First Out), meaning that the most recently added element is the first one to remove.
A stack has 2 main operations that occur only at the top of stack : push and pop.
The push operation places an element at the top of stack whereas the pop operation removes an element from the top of stack.


A stack has many applications.For example, the simplest one is to reverse a word.To do it, we push a word into stack, letter by letter, and pop letters from the stack.


let stack=[];

stack.push(1);
console.log(stack); //[1]

stack.push(2);
console.log(stack); //[1,2]

stack.push(3);
console.log(stack); //[1,2,3]

*********************************

console.log(stack.pop()); //3
console.log(stack); // [1,2]
