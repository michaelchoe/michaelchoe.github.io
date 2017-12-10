$(document).ready(function() {

  $("#worklink").mouseover(function() {
      $(".dropdownmenu").show();

  });

  $("#worklinkcontainer").mouseleave(function() {
    $(".dropdownmenu").hide();
  });


});
