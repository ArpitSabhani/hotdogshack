// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Scroll to the targeted element
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});




// will first fade out the loading animation
$("#loading-animation").delay(1500).fadeOut("slow");
// will fade out the whole DIV that covers the website.
$("#loading").delay(2000).fadeOut("slow");

//navbar js

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 300) {
//     $(".header").addClass("fixed");
//   } else {
//     $(".header").removeClass("fixed");
//   }
// });

if ($(this).width() < 992) {


  $(document).on('click', ".open-menu", function () {

    $("#span1").css("width", "30px");
    $("#span1").css("transform", "rotate(225deg)");
    $("#span1").css("top", "10px");

    $("#span2").css("transform", "translateX(-50px)");
    $("#span2").css("opacity", "0");

    $("#span3").css("width", "30px");
    $("#span3").css("top", "10px");
    $("#span3").css("transform", "rotate(-225deg)");
    $(".menu-section").css("height", "calc(100vh - 57px)");

    $(".open-menu").addClass("close-menu");
    $(".close-menu").removeClass("open-menu");
  })

  $(document).on('click', ".close-menu", function () {


    // $("#span1").css("width", "40px");
    $("#span1").css("transform", "rotate(0deg)");
    $("#span1").css("top", "0px");

    $("#span2").css("transform", "translateX(0px)");
    $("#span2").css("opacity", "1");

    // $("#span3").css("width", "40px");
    $("#span3").css("top", "20px");
    $("#span3").css("transform", "rotate(0deg)");
    $(".menu-section").css("height", "0px");

    $(".close-menu").addClass("open-menu");
    $(".open-menu").removeClass("close-menu");


  })

  $(document).on('click', ".header ul li a", function () {
    $(".menu-section").css("height", "0px");
    $("#span1").css("transform", "rotate(0deg)");
    $("#span1").css("top", "0px");

    $("#span2").css("transform", "translateX(0px)");
    $("#span2").css("opacity", "1");

    // $("#span3").css("width", "40px");
    $("#span3").css("top", "20px");
    $("#span3").css("transform", "rotate(0deg)");
    $(".menu-section").css("height", "0px");

    $(".close-menu").addClass("open-menu");
    $(".open-menu").removeClass("close-menu");

  })
}


$(document).on('click', "#dropIcon", function () {
  $(".mainmenu-box").toggleClass("d-block");
  $("#dropIcon").toggleClass("fa-chevron-up");
})


$(document).ready(function () {
  $('body').bind('cut copy paste', function (e) {
    e.preventDefault();
  })
  $("body").off("contextmenu", function (e) {
    return false;
  })
})


// cursor


$(function () {
  /* Default */
  sparkStar();
  /* If you Use Images */
  // var sparkImage = ["../images/light flare-01.png",
  // "../images/light flare-02.png",
  // "../images/light flare-03.png"];
  // sparkStar('image', sparkImage);
});

function sparkStar(
  type,
  sparks,
  sparkCss,
  target,
  duration,
  moveUp,
  moveDown,
  moveSide,
  rotateDeg,
  release,
  remain
) {
  type = type || 'text';
  sparks =
    sparks || [
      './img/white-smoke2.png',
      './img/white-smoke2.png',
      './img/white-smoke2.png',
      './img/white-smoke2.png',
    ];

  target = target || 'body';
  duration = duration || 500;
  moveUp = moveUp || 60;
  moveDown = moveDown || 300;
  moveSide = moveSide || 40;
  rotateDeg = rotateDeg || 160;
  release = release || 3;
  remain = remain || 100;

  var i = 0;
  var $target = $(target);

  $target.mousemove(function (e) {
    var randValY = Math.round(Math.random() * moveUp);
    var randValX = (Math.round(Math.random() * moveSide) - moveSide / 2) * 2;
    var randVal = randValY % sparks.length;

    if (i % release === 0) {
      var $spark = $('<img>')
        .attr('id', 'cursor' + i)
        .addClass('cursor')
        .attr('src', sparks[randVal]);

      $spark.css({
        width: Math.round(Math.random() * 0.5 + 0.9) + '%',
        height: 'auto',
        opacity: 1,
      });

      $target.append($spark);
      $spark.css({
        position: 'absolute',
        top: e.pageY - randValY / 2 + 'px',
        left: e.pageX - randValX / 2 + 'px',

      }).animate(
        {
          opacity: 0.1,
          top: e.pageY - randValY + 'px',
          left: e.pageX - randValX + 'px',
        },
        duration
      ).animate(
        {
          opacity: 0.0,
          top: 'unset',
          bottom: '0',
        },
        duration,
        function () {
          $(this).remove();
        }
      );

      if (navigator.userAgent.indexOf('') < 0) {
        $spark.rotate({
          animateTo: rotateDeg,
        });
      }
    }
    ++i;
  });
}


/* ==============================================
    Smooth Scroll on anchors
=============================================== */

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".nav-position").addClass("nav-position-fixed");
  } else {
    $(".nav-position").removeClass("nav-position-fixed");
  }
});

// change lunguge

