$(document).ready(function() {

  var rotated = false;

  $("#project1").mouseover(function() {
    $("#project1hover").fadeIn(500);
  });

  $("#project1hover").mouseleave(function() {
    $("#project1hover").fadeOut(500);
  });

  $("#project2").mouseover(function() {
    $("#project2hover").fadeIn(500);
  });

  $("#project2hover").mouseleave(function() {
    $("#project2hover").fadeOut(500);
  });

  $("#project3").mouseover(function() {
    $("#project3hover").fadeIn(500);
  });

  $("#project3hover").mouseleave(function() {
    $("#project3hover").fadeOut(500);
  });

  $("#project4").mouseover(function() {
    $("#project4hover").fadeIn(500);
  });

  $("#project4hover").mouseleave(function() {
    $("#project4hover").fadeOut(500);
  });

  $("#project5").mouseover(function() {
    $("#project5hover").fadeIn(500);
  });

  $("#project5hover").mouseleave(function() {
    $("#project5hover").fadeOut(500);
  });

  $(".menuactivator").click(function(){
    if (rotated) {
      $(".rotate").css({
        "-webkit-transform": "rotate(0deg)",
        "-moz-transform": "rotate(0deg)",
        "-o-transform": "rotate(0deg)",
        "-ms-transform": "rotate(0deg)",
        "transform": "rotate(0deg)"
      });
      $(".menu").hide("fade", 500);
      rotated = false;
    }
    else {
      $(".rotate").css({
        "-webkit-transform": "rotate(45deg)",
        "-moz-transform": "rotate(45deg)",
        "-o-transform": "rotate(45deg)",
        "-ms-transform": "rotate(45deg)",
        "transform": "rotate(45deg)"
      });
      $(".menu").show("fade", 500);
      rotated = true;
    }
  });

  $("#dropdown").mouseover(function() {
    $(".dropdownmenu").slideDown(500);
  });

  $(".dropdownbox").mouseleave(function() {
    $(".dropdownmenu").slideUp(500);
  });




});
