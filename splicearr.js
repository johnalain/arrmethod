//https://www.youtube.com/watch?v=MLcZ-12YW0U
//sorting array  location=vs array folder spliceaar.js file
//sort (function [optional]) reverse()
//array methods [slicing]
//splice (start[opt]) ,end [opt] not including end
//slice => all array if start not undefined negative count from end
//if end is undefined || >indexes => slice to the end array.length
//slice(start[mandatory]),delete count([{opt}] [zero onremove]),the items to add [opt]
// ex :myFriends.splice(0,2,"samir","samar");

//array method sort()
let  myFriends = ["michel","rita","amal","joujou","mariam","therese","elias","elissa","tony"];
console.log(myFriends);
console.log(myFriends.slice(1));
console.log(myFriends.slice(1,3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1,-2));
console.log(myFriends.slice(-4,-2));
myFriends.splice(0,1,"sameer","samara");
console.log(myFriends);
myFriends.splice(0,2,"samir","samar");
console.log(myFriends);
myFriends.splice(0,3,"sameer","samara");
console.log(myFriends);

//output
//  ['rita', 'amal', 'joujou', 'mariam', 'therese', 'elias', 'elissa', 'tony']
// splicearr.js:4 (2) ['rita', 'amal']
// splicearr.js:5 (3) ['elias', 'elissa', 'tony']
// splicearr.js:6 (6) ['rita', 'amal', 'joujou', 'mariam', 'therese', 'elias']
// splicearr.js:7 (2) ['therese', 'elias']
// splicearr.js:9 (10) ['sameer', 'samara', 'rita', 'amal', 'joujou', 'mariam', 'therese', 'elias', 'elissa', 'tony']
// splicearr.js:11 (10) ['samir', 'samar', 'rita', 'amal', 'joujou', 'mariam', 'therese', 'elias', 'elissa', 'tony']
//  ['sameer', 'samara', 'amal', 'joujou', 'mariam', 'therese', 'elias', 'elissa', 'tony']
