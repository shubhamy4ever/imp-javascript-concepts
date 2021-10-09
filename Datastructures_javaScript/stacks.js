//stack first in last out

//pallindrome checker

let word = "shivani";
let reverseword = "";
let stack=[];

for(i=0;i<word.length;i++){
stack.push(word[i]);
}


for(i=0;i<word.length;i++){
    reverseword=reverseword+stack.pop();
}

if(word===reverseword){
console.log('Pallindrome');
}else{
console.log('not a pallindrome');
}

