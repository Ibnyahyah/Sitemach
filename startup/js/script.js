(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

function slider(flag, numSlides) {
  let centerSlide = (flag % numSlides) + 1;
  let middleOfSlider = numSlides / 2;
  let xCoef = 300 * ((middleOfSlider - centerSlide) / middleOfSlider);

  if ($(window).width() <= 450) {
    xCoef = 0;
  }

  $(".slide-indicator").removeClass("active");
  $(".indicator-" + centerSlide).addClass("active");
  $(".slide.card").removeClass("active");
  $("#side-" + centerSlide).addClass("active");

  $("#side-" + centerSlide).css("z-index", "999");
  centerSlide <= numSlides / 2 ?
    $("#side-" + centerSlide).css(
      "transform",
      `translateX(${xCoef - 100}%) scale(1.5)`
    ) :
    $("#side-" + centerSlide).css(
      "transform",
      `translateX(${xCoef - 100}%) scale(1.5)`
    );

  for (let i = 1; i <= numSlides; i++) {
    if (i == centerSlide) {
      continue;
    }
    $("#side-" + i).css("z-index", "9");
    if (i < centerSlide) {
      $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
      continue;
    }
    $("#side-" + i).css("transform", `translateX(${xCoef}%) scale(1)`);
  }
}

$(document).ready(function () {
  // get the nu,ber of slides
  let slideNum = $(".slide").length;
  let flag = 0;

  // Append the slide-indicators
  for (let i = 1; i <= slideNum; i++) {
    $(".slide-indicator-container").append(
      `<div id="indicator-${i}" class="slide-indicator indicator-${i}"></div>`
    );
  }

  // first slide active by default
  $(".indicator-1").addClass("active");

  // add event listeners to switch to the slide selected when clicking the slide or clicking the slide-indicator
  let addListeners = [
    ".slide-indicator-container",
    "#main-slider",
  ];

  addListeners.forEach((item) => {
    $(item).click((e) => {
      if (e.currentTarget.id == "main-slider") {
        flag = e.target.parentElement.id.split("-")[1] - 1;
      } else {
        flag = e.target.id.split("-")[1] - 1;
      }
      slider(flag, slideNum);
    });
  });

  // Add functionality to next and previous buttons
  $("#nex").click(function () {
    flag = (flag + 1) % slideNum;
    slider(flag, slideNum);
  });
  $("#pre").click(function () {
    flag = Math.abs(flag - 1 + slideNum) % slideNum;
    slider(flag, slideNum);
  });
});



$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  0,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 123,duration: 6000});
$('#number2').jQuerySimpleCounter({end: 70,duration: 6000});
$('#number3').jQuerySimpleCounter({end: 15,duration: 6000});
$('#number4').jQuerySimpleCounter({end: 30,duration: 6000});

