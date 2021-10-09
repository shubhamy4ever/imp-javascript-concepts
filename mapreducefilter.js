let a = [21,22,32,12];

let a2=a.map((element)=>{
return element+2;
});


let a3=a.filter((eleme)=>{
return eleme>=21;
});

console.log(a,a2,a3);

let a4=a.reduce((element1,element2)=>{
return element1+element2;
});
//map maps array and you can do anything with what inside in array that is its element
//filter will filter all elemnts inside array according to your condition and return it back
//reduce will help you to reduce array by performing task like all element1+element2 unitl array is reduced to 1 or condition cant be runned
console.log(a,a2,a3,a4);
