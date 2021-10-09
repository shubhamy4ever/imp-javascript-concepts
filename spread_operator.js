obj=[1,2,3,4];

function add(a,b,c){
return a+b+c;
}

// to acess objects inside array dot notation or else bracket notation
// spread operator spreads everything inside array
let added_value=add(...obj);
let obj2=[2,3,4,5];
console.log(added_value,);

// concationation
console.log(...obj,...obj2);

// suppose something in javascript Object
let obj3={
name:"shubham",
age:19,
std:"ty"
};
console.log(obj3);
// using dot notation to copy everything to another object while changing age
let obj4={}
obj4.name=obj3.name;
obj4.age=21;
obj4.std="post graduate";

console.log(obj4);

// using spread operator to change
// every obect is in  {}
// array in []
// methods or functions in ()
let obj5={...obj3,age:01,std:"failure"};
console.log(obj5);