var people = [
  {name: 'Rich', born: 1992, city: 'London'},
  {name: 'Pete', born: 1962, city: 'Leeds'},
  {name: 'Rob', born: 1914, city: 'New York'},
  {name: 'Chris', born: 1989, city: 'Bristol'},
  {name: 'Tony', born: 1822, city: 'London'}
];

function filter(array, test){
  var liveInLondon = [];
  for (var i=0; i < array.length; i++){
    if (test(array[i])){
      liveInLondon.push(array[i])
    }
  }
  return liveInLondon;
}
// console.log(people.filter(function(person) {return person.city == 'London'}));
//console.log(filter(people,function(person) {return person.city == 'London'}));

var array = [1, 2, 3, 4, 5];

function double(n){
  return n > 2;
}

var doubled = array.map(double)
console.log(doubled);
