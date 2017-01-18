var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function test1(target, myInput) {
    console.log(target);
    console.log(myInput);
    //Assigning Value to a decorator property
    Object.defineProperty(target, myInput, { value: 25 });
}
function test2(target, methodName, descriptor) {
    console.log(target, methodName, descriptor);
    descriptor.value = function () {
        console.log("It is a Number");
    };
}
var temp = (function () {
    function temp() {
    }
    temp.prototype.testTheValue = function () {
    };
    return temp;
}());
__decorate([
    test1
], temp.prototype, "myInput", void 0);
__decorate([
    test2
], temp.prototype, "testTheValue", null);
var obj = new temp();
console.log(obj.myInput);
obj.testTheValue();
