$(document).ready(function() {

  $("#worklink").mouseover(function() {
      $(".dropdownmenu").show();

  });

  $("#worklinkcontainer").mouseleave(function() {
    $(".dropdownmenu").hide();
  });

  $("#worklinkmobile").mouseover(function() {
      $(".dropdownmenumobile").show();

  });

  $("#worklinkcontainermobile").mouseleave(function() {
    $(".dropdownmenumobile").hide();
  });


});
