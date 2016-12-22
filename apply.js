function func(a, b) {
    return a * b;
}
var myArray = [10, 2];
var myObject = func.apply(myObject, myArray);

console.log(myObject);
