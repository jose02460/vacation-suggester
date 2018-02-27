$(document).ready(function() {
    $("form#track-Form").submit(function(event) {
      event.preventDefault();
      var question1 = $("#question1").val();
      var question2 = $("#question2").val();
      var question3 = $("#question3").val();
      var question4 = $("#question4").val();
      var question5 = $("#question5").val();

       if(question1 === "1" || question2 === "1" || question3 === "0" || question4 === "0" || question5 === "0") {
         $("#track").show();
         $("#ruby").show();
         $("#java").hide();
         $("#cc").hide();
       }

      else if(question1 === "1" || question2 === "1" || question3 === "1" || question4 === "1" || question5 === "1") {
        $("#track").show();
        $("#ruby").hide();
        $("#java").show();
        $("#cc").hide();
      }
      else if(question1 === "1" || question2 === "1" || question3 === "1" || question4 === "1" || question5 === "0") {
        $("#track").show();
        $("#ruby").hide();
        $("#java").hide();
        $("#cc").show();
      }
      else {
        alert("We did not find any matches for you!")
      }
    });
  });
