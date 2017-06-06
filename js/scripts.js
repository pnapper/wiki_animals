$(document).ready(function() {
  $("#species").change(function(event) {

  var species = $("select#species").val();
  alert (species);
 $(".hidden").hide();

 if (species === "turtle") {
    $('#turtles').show();
  } else if (species === "snake") {
    $('#snakes').show();
    alert ("snakes");
  } else if (species === "insect") {
    $('#insects').show();
  } else {

  }
  });
});
