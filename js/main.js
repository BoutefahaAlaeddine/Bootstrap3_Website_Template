/* global $,jquery ,alert */
$(document).ready(function () {
  "use strict";
  //Nice scroll
  $("html").niceScroll();

  $(".carousel").carousel({
    interval: 6000,
  });
  //show Color Option Div When Click On The Gear
  $(".gear-check").click(function () {
    $(".color-option").fadeToggle();
  });

  //Chang Theme Color On Click
  var colorLi = $(".color-option ul li");
  colorLi
    .eq(0)
    .css("backgroundColor", "#E41B17")
    .end()
    .eq(1)
    .css("backgroundColor", "#E426D5")
    .end()
    .eq(2)
    .css("backgroundColor", "#009AFF")
    .end()
    .eq(3)
    .css("backgroundColor", "#FFD500");
  colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });
});

//loading Screen
$(window).on("load", function () {
  // loading Elements
  $(".loading-overlay .loader").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});

//caching the scroll element

var scrollButton = $("#scroll-top");

$(window).on("scroll", function () {
  if ($(this).scrollTop() >= 700) {
    scrollButton.show();
  } else {
    scrollButton.hide();
  }

  scrollButton.click(function () {
    $("html,body").stop().animate({ scrollTop: 0 }, 600);
  });
});
