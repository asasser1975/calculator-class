//Business (Back end) Logic
//Adding
var add = function(number1, number2) {
return number1 + number2;
};


//Subtracting
var subtract = function(number1, number2) {
return number1 - number2;
};


//Multiplying
var multiply = function(number1, number2) {
return number1 * number2;
};


//Dividing
var divide = function(number1, number2) {
return number1 / number2;
};

// Front-end Logic
$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
