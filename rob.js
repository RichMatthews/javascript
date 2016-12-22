// function talk(person){
//   person == 1 ? singlePerson() : multiplePeople(person);
// }
//
// function singlePerson(){
//   console.log("one person is talking");
// };
//
// function multiplePeople(person){
//   let common = "two people are talking"
//   if (person == 2) {
//     console.log(common);
//   } else {
//     console.log(`more than ${common}`);
//   }
// };


function Person(number){
  this.number = number;
}

Person.prototype.wording = function(){
  if (this.number == 1){
    return "person is";
  } else {
    return "people are";
  }
};

Person.prototype.numberOfPeople = function(){
  if (this.number == 1){
    return "one ";
  } else if (this.number > 2) {
    return "more than two ";
  } else {
    return "two "
  }
};

var per1 = new Person(1);
var per2 = new Person(2);
var per3 = new Person(3);

function talk(instance){
  return instance.numberOfPeople() + instance.wording() + " talking";
}

console.log(talk(per1));
console.log(talk(per2));
console.log(talk(per3));

//dry it out
//find common stuff
//two helper functions
