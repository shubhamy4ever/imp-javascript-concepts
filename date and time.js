
//   let d = new Date;
//   let box = document.getElementsByClassName("box");
//will not work as expected

setInterval(() => {
    let d = new Date;
    let box = document.getElementsByClassName("box");
    box[0].innerHTML = d.toLocaleTimeString();
    box[1].innerHTML = d.toDateString();
}, 1000);

//set interval which takes setInterval(()=>{},milliseconds);
//remeber initialize all dom manipulation inside setInterval to make it work
//toLocaleTimeString after creating a date object

setTimeout(()=>{
    alert('hello after 3 seconds');
},3000);