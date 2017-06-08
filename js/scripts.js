$(document).ready (function() {

  $("form#triangle").submit(function() {

    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    var result = add(number1, number2, number3);
    console.log("1st number: " + number1);  // for debugging
    console.log("2nd number: " + number2);  // for debugging
    console.log("3rd number: " + number3);  // for debugging

    if (number1 === number2 && number2 === number3 && number1 === number3){
      $("#Equilateral").show();
    }
    else if (number1 === number2 != number3 || number1 != number2 === number3 || number1 === number3 != number2){
      $("#Isosceles").show();
    }
    else if (number1 != number2 != number3){
      $("#Scalene").show();
    }
    else {
      $("#Not-Triangle");
    }


    $("#output").text(result);
  });
});
