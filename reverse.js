let word = "shubham yadav";
let reverseword="";
let stack=[];

for(i=0;i<word.length;i++){
    stack.push(word[i]);
}

for(i=0;i<word.length;i++){
reverseword=reverseword+stack.pop();
}

console.log(`your reversed word ${reverseword}`);