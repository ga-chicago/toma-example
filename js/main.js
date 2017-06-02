//add an event listener to the button that runs the following
//create a random number between 0 and 1
//if the number is 0 display heads image
//else display tails image
//update the score
// var headsCount = 0;
// var tailsCount = 0;
//
// $('#flip').click(function(){
//   //create a random number between 0 and 1
//   var headsOrTails = Math.floor(Math.random() * 2);
//   if(headsOrTails === 0){
//     $('#tails-coin').hide();
//     $('#heads-coin').show();
//     headsCount++;
//     $('#heads').text(headsCount)
//   }else{
//     $('#heads-coin').hide();
//     $('#tails-coin').show();
//     tailsCount++;
//     $('#tails').text(tailsCount)
//   }
// })

var position = 0;
var right = true;
setInterval(function(){
  if(right){
    position++;
    if(position === 3){
      right = false;
    }
  }else{
    position--;
    if(position === 0){
      right = true;
    }
  }
  console.log(position);
  $('.dog').css("opacity","0");
  $('#dog-' + position).css("opacity","1")
},
1000);
