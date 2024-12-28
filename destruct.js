//destructuring operator
/*
let a=[1,2,4,7,8];
let [b,c,x,y,z]=a;
console.log(y);
*/
 
let a=[1,2,4,7,8];
let [b,c,x,...y]=a;
console.log(y);
