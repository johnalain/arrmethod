//https://www.youtube.com/watch?v=VvPxe6qj5XY video #42 elzero web school javascript
//array methods
//unshift("","") add element to the first
//push("","") add element to the end
//shift()remove first element from array
//pop()remove element last element from array

let myFriends = ["MICHEL","RITA","joujou","amal"];

// console.log(myFriends);
// myFriends.unshift("marwan","lynn","mary");
// myFriends.push("charbel","elias");

﻿
// output
// (4) ['MICHEL', 'RITA', 'joujou', 'amal']
//myFriends.shift();
// (9) ['marwan', 'lynn', 'mary', 'MICHEL', 'RITA', 'joujou', 'amal', 'charbel', 'elias']
myFriends.pop();
console.log(myFriends);
//['MICHEL', 'RITA', 'joujou']
let first = myFriends.shift();
console.log(` first name is : ${first}`);
let second = myFriends.pop();
console.log(` first name is : ${second}`);