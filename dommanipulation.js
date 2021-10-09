let container=document.getElementsByClassName("container");
for(var i=0;i<container.length;i++){
    container[i].style.background="red";
}
//to set and iterate all classname which has class container because class cant be a single it multiple
//id's are

//for giving style to a single classname
container[0].style.color="white";

let firstbox=document.getElementsByClassName('box');
firstbox[0].style.border="2px solid green";
firstbox[1].innerHTML="bye bye shubham"

// remaining tommorow morning
//and next events
//tommorow finsh javascript all 16

firstbox[2].addEventListener("click",()=>{
alert("clicked!!");
});
// firstbox[0].addEventListener("mouseover",()=>{
// alert("hover!!");
// });
let nav= document.getElementsByTagName("nav");
nav[0].addEventListener("mouseover",()=>{
    setTimeout(()=>{
        alert("subscribe to our newsletter!!");
    },1500)
    
})