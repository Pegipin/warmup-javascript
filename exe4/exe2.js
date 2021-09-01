//4. we could have  used  split() and Array.from() { built-in function }
//BUT here we can use Spread operator

//let myInt = "Hello Pinkey";
//arr = [...myInt];
//console.log(arr);  well! Ashkan said it is NOT acceptable, so i will try loop.

 //OR


let myInt = "Hello Pinkey";

let arr = [];

for(let i of myInt) {
    arr.push(i);
}

console.log(arr);