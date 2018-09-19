$(function() {

  $(window).scroll(function() {

    var mass = Math.max(20, 45-0.1*$(this).scrollTop()) + 'px';

    $(".sidebartitlehidden").find("a").css({'font-size': mass});
  });
});
