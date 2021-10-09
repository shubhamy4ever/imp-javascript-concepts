function calculate() {

    this.subtract = function (a, b) {
        console.log(a - b);
    }
    //this is used to point out like here this means subtract function is a part of calculate funcation and can be called by calculate obj
    this.add = function (a, b) {
        console.log(a + b);
    }
}
let obj = new calculate;
obj.subtract(2, 1);
obj.add(21,9999);
