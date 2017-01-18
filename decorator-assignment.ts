function test1(target, myInput) {
	console.log(target);
	console.log(myInput);
	//Assigning Value to a decorator property
	Object.defineProperty(target, myInput, {value: 25});
}

function test2(target, methodName, descriptor) {
	console.log(target, methodName, descriptor);
	descriptor.value = function() {
		console.log("It is a Number");
	}
}

class temp {
	@test1
	public myInput: number;

	@test2
	testTheValue() {

	}
}

let obj = new temp();
console.log(obj.myInput);
obj.testTheValue();