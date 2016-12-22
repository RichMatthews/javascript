let num = [1, 2, 3, 4, 5];

function oddOrEven(num, cb){
  for (var i=num[0]; i < num.length; i++) {
    cb(i)
  }
}

oddOrEven(num, function(x){
    if(x % 2 == 0){
      console.log(x + ' even')
    }else{
      console.log(x + ' odd');
    }
})
