$(document).ready(function () {
  "use strict";
  var $nav = $(".navbar");
  var $stop = $(".stop");
  if ($(this).scrollTop() > $stop.height() - 250) {
    $nav.toggleClass("scrolled");
  }
  $(window).scroll(function () {
    $nav.toggleClass("scrolled", $(this).scrollTop() > $stop.height() - 250);
  });
});
