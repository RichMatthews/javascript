function map(array, transform){
  let namesArray = [];
  for (var i=0; i < array.length; i++){
    namesArray.push(transform(array[i]));
  }
  return namesArray;
}

var people = [
  {name: 'Rich', born: 1992, city: 'London'},
  {name: 'Pete', born: 1962, city: 'Leeds'},
  {name: 'Rob', born: 1914, city: 'New York'},
  {name: 'Chris', born: 1989, city: 'Bristol'},
  {name: 'Tony', born: 1822, city: 'London'},
  {name: 'Mark', born: 1999, city: 'California'},
  {name: 'Ed', born: 1945, city: 'London'},
  {name: 'Rich', born: 2001, city: 'Bristol'}
];

var cityArray = people.filter(function(person){
  return person.city == 'London';
})


var nameArray = cityArray.map(function(person) {
  return person.name
});

console.log(nameArray, 'na');
console.log(cityArray, 'ca');


//Return the people called Rich
//2

function countPeople(array){
  let count = 0;
  for (var i=0; i < array.length; i++){
    if (array.name == 'Rich'){
      count += count;
    }
  }
  return count;
}

var name = people.filter(function(person){
    return person.name == 'Rich'
});

//Count the people born in London
//3

//Count the people born in London and older than 50
//2
