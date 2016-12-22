// function reduce(array, combine, start){
//   let current = start;
//   for (var i=0; i < array.length; i++){
//     current = combine(current, array[i]);
//   }
//   return current;
// };
//
// var numbers = [0, 2, 9, 6];
//
// console.log(numbers.reduce(function(a, b){
//   return a + b;
// }));
var people = [{name: 'rich', age: 23}, {name: 'mike', age: 25}, {name: 'pete', age: 30}]
function getNames() {
  var arr = []
  people.forEach( function (prop)
  {
      var x = prop.age;
      arr.push(x)
  });
  var ageTotal = arr.reduce(function(a, b){
  return a + b;
  } , 0);
  console.log(ageTotal);
}
getNames()
