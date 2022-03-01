gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("[data-scroll-container]");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed",
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".sec2-contents");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth + 300;

  // Pinning and horizontal scrolling

  gsap.to(".sec2-contents", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth,
    },
    x: -horizontalScrollLength,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});

// $(function () {
//   var winH, winW, sec2W, scT;
//   sizeSet();

//   $(window).resize(function () {
//     sizeSet();
//     $(window).scroll();
//   });

//   // 사이즈세팅
//   function sizeSet() {
//     winH = $(window).innerHeight();
//     winW = $(window).innerWidth();
//     sec2W = $("#sectionPin").outerWidth(); // +
//     parseInt($("#sectionPin").css("margin-left")); //

//     $("body").height(winH * 4 + sec2W - winW);
//     $(".sec").css({
//       left: sec2W - winW,
//     });
//   }

//   $(window).scroll(function () {
//     scT = $(window).scrollTop();
//     var nowT, nowL;
//     if (scT < winH) {
//       nowT = -scT;
//       nowL = 0;
//     } else if (scT < winH + sec2W - winW) {
//       nowT = -winH;
//       nowL = winH - scT;
//     } else {
//       nowT = -scT + sec2W - winW;
//       nowL = -sec2W + winW;
//     }
//     $("#wrapper").css({
//       top: nowT,
//       left: nowL,
//     });
//   });
// });
