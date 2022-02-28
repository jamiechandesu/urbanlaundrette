$(function () {
  var winH, winW, sec2W, scT;
  sizeSet();

  $(window).resize(function () {
    sizeSet();
    $(window).scroll();
  });

  // 사이즈세팅
  function sizeSet() {
    winH = $(window).innerHeight();
    winW = $(window).innerWidth();
    sec2W = $("#sectionPin").outerWidth(); // +
    parseInt($("#sectionPin").css("margin-left")); //

    $("body").height(winH * 4 + sec2W - winW);
    $(".sec").css({
      left: sec2W - winW,
    });
  }

  $(window).scroll(function () {
    scT = $(window).scrollTop();
    var nowT, nowL;
    if (scT < winH) {
      nowT = -scT;
      nowL = 0;
    } else if (scT < winH + sec2W - winW) {
      nowT = -winH;
      nowL = winH - scT;
    } else {
      nowT = -scT + sec2W - winW;
      nowL = -sec2W + winW;
    }
    $("#wrapper").css({
      top: nowT,
      left: nowL,
    });
  });
});
