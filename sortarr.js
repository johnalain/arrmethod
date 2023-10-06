let myFriends =[10, "michel","rita","90",1000,40,50,"10",-20,-30];

console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());
console.log(myFriends.sort().reverse());

//output
// (10) [10, 'michel', 'rita', '90', 1000, 40, 50, '10', -20, -30]
// sortarr.js:4 (10) [-20, -30, 10, '10', 1000, 40, 50, '90', 'michel', 'rita']
// sortarr.js:5 (10) ['rita', 'michel', '90', 50, 40, 1000, '10', 10, -30, -20]
// sortarr.js:6 (10) ['rita', 'michel', '90', 50, 40, 1000, 10, '10', -30, -20]