$(document).ready(function() {


//hover only works on desktop
  $(".contentblocks").mouseover(function() {
    console.log($(".contentblocks").css("float") !== "none");
    if ($(".contentblocks").css("float") !== "none") {
      $(this).find(".overlay").css("left", "0%");
    } else {
      $(this).find(".overlay").css("left", "100%");
    }
  $(".contentblocks").mouseout(function() {
    $(this).find(".overlay").css("left", "100%");
  });

});

});
