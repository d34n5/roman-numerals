//Business Logic
var romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]


var romanNumber = function(numbers) {
  numbers = Math.abs(numbers);
  var conversion = [];
  for (i = 0; i <= digits.length; i++) {
    while(numbers >= digits[i]) {
      conversion.push(romanNums[i]);
      numbers -= digits[i];
    }
  }
  return conversion.join("");
}



// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var numbers = parseInt($("input#number").val());
    if (isNaN(numbers) || numbers >= 4000 || numbers <= -4000) {
      alert("Please enter a positive integer less than 4000!");
      location.reload();
    } else {
      var result = romanNumber(numbers);
      $(".result").text(result);
    }
  });
});
