$(function() {
  $('nav li').first().focus();
  $('.headline').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
    //autoplay: true
  });

  $('.team').slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  $('.image').click(function() {
    $('.team').slick('slickPause');
  });

  $('.image').hover(function() {
    overlay = $('<div class="overlay"><h4></h4><p></p></div>').css({
      position: 'absolute',
      left: 0, 
      top: 0,
      width: $(this).width(),
      height: $(this).height(),
      zindex: 3
    });
    overlay.find('h4').html($(this).attr('data-name'))
    overlay.find('p').html($(this).attr('data-title'))
    $(this).append(overlay);
  }, function() {
    $('.overlay').remove();
  });
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    draggable: false,
    center: {lat: 49.270109, lng: -123.110418},
    disableDefaultUI: true,
    scrollwheel: false,
    zoom: 16,
    zoomControl: false
  });
  if (window.innerWidth < 780) {
    $('#map').width(window.innerWidth + 30);
  }
}
