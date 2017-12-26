$(document).ready(function() {

  $(".mobilemenu").mouseover(function() {
    $(".bars").css("background-color", "black");
  });

  $(".mobilemenu").mouseout(function() {
    $(".bars").css("background-color", "#F3B2C4");
  });

  $(".mobilemenu").click(function() {
    $(".mobilelinkpage").css("margin-left", "0%");
    $(".mobilemenu").hide();
  });

  $("#exitX").click(function() {
    $(".mobilelinkpage").css("margin-left", "100%");
    $(".mobilemenu").show();
  })


});
