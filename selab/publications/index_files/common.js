"use strict";

$(document).ready(function () {
  var $body = $('body');
  var $main = $('main[role="main"]');
  (function () {
    // make the calendar be scrollable
    var layoutHeight = $body.height() - $main.height();
    $(window).resize(function () {
      $main.height($(window).height() - layoutHeight);
    });
    $(window).resize();
  })();
  (function(){
    $(window).scroll(function(){
    $('nav').css({
      'top': $(this).scrollTop()
    });
  });
  })();
});