/* Erin Crews
* erincrews.com
*/

/******************************************
/* SLIDE TOGGLE FOR PROJECT DETAILS
/*******************************************/

$(document).ready(function(){
  $("article").hide();
  $( ".grid-item" ).click(function(event){
    event.preventDefault();

    var articleClass = "." + this.id;
    $(articleClass).siblings("article").hide();
    $(articleClass).slideToggle( "slow" , function(){
      $("body, html").animate({
           scrollTop: $($("#projects")).offset().top
       }, 1000);
    });
  });
});



/******************************************
/* TURN NAV BAR SOLID WHITE ON SCROLL
/*******************************************/


var headerBottom = $("header").offset().top + $("header").height();

// on scroll,
$(window).on("scroll",function(){

    var stop = Math.round($(window).scrollTop());

    if (stop > headerBottom) {
        $("nav").addClass("white", 1000, "swing");
    } else {
        $("nav").removeClass("white");
    }

});

/******************************************
/* SCROLL EFFECT
/*******************************************/

$(document).ready(function () {
  $(document).on("scroll", onScroll);

//Takes user to referenced section on nav click with a smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-25
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

//Highlights active nav item
function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav ul li a').removeClass("active");
      currentLink.addClass("active");
    }
    else{
      currentLink.removeClass("active");
    }
  });
}
