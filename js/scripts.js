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
  $("#things").submit(function(event) {
  //  var thing1 = $("#thing1").val();
  //  var thing2 = $("#thing2").val();
    var array = [$("#thing1").val(), $("#thing2").val(), $("#thing3").val()]
    // alert(array[0]);
    // alert(array[1]);
    // alert(array[2]);
    var array2 = [];
    //debugger;
  array2.push(array[1], array[0], array[2]);
      // , array[0], array[3]);
    //alert(array2);
  //  alert(array);
    //console.log(answer);
    //console.log(answer.toFixed(2));

  //   if(number1 & number2 !== 0) {

  $("ul#answer").append("<li>"+ array[1] +"</li>");
  //  $("ul#answer").append(array2).children("li").last();
  //  $("ul#answer").append(array[2]).children("li").last();
  //  $("ul#answer").append(array[1]).children("li").last();
  //  $("ul#answer").append(array[0]).children("li").last();
  //   } else {
  //     $("#answer").text(answer);
  //   }
    $("#result").show();
  //
  //   event.preventDefault();
  // });
  // //make a subtract .submit function HERE
  // $("#subtract").submit(function(event) {
  //   var number1 = parseFloat($("#sub1").val());
  //   var number2 = parseFloat($("#sub2").val());
  //   var answer = subtract(number1, number2);
  //   $("#answer").text(answer.toFixed(2));
  //   $("#result").show();
  //
  //   event.preventDefault();
  // });
  // // Multiply function
  // $("#multiply").submit(function(event) {
  //   var number1 = parseFloat($("#mult1").val());
  //   var number2 = parseFloat($("#mult2").val());
  //   var answer = multiply(number1, number2);
  //   $("#answer").text(answer.toFixed(2));
  //   $("#result").show();
  //
  //   event.preventDefault();
  // });
  // // Divide function
  // $("#divide").submit(function(event) {
  //   var number1 = parseFloat($("#div1").val());
  //   var number2 = parseFloat($("#div2").val());
  //   var answer = divide(number1, number2);
  //   $("#answer").text(answer.toFixed(2));
  //   $("#result").show();

    event.preventDefault();
  });
});
  //Alert to print on page
  // alert(add(number1, number2));

// element.noDefault
