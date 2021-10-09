//queue first in first out last in last out so we are using shift for first out and 
//a function's object to acess all parts of function created using this

function Queue() {
    let collection = [];
    this.enqueue = function (element) {
        collection.push(element);
    }
    this.dequeue = function () {
        collection.shift();
    }
    this.print = function () {
        console.log(collection);
    }
    this.first = function () {
        console.log(collection[0]);
    }
}

let q = new Queue();
q.print();
q.enqueue("s");
q.enqueue('h');
q.enqueue('u')
q.print();
q.first();
q.dequeue();
q.print();
