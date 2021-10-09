// A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.

function helloworld(name){
    console.log(`hello ${name}`);
}
function second(callback){
var name=prompt("what is your name"); //remmber prompt always require a varibale where it will be stored
callback(name);//using parameters to pass my name enetered in prompt 
}
second(helloworld);//the paramerter recived will be executed as parameter for second function inside