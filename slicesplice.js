//https://www.youtube.com/watch?v=rWxo-En5-yI
// var arr = ["michel", "rita","josephine"];
// arr.slice(1,2);
// console.log(arr.slice(1,2));//slice take part of array and put it in new array slice(start,end)
// //output:[ 'rita' ]
// arr.slice(-3,-1);
// console.log(arr.slice(-3,-1));
//output:[ 'rita' ]
//[ 'michel', 'rita' ]
// splice()add element and delete other (startelement,delete element,add position)
//startelement=where u wantto add ur element
//delete element: how many element u want to delete starting from start

var arr = ["michel", "rita", "josephine"];
arr.splice(0, 0, "amal");
document.write(arr);
