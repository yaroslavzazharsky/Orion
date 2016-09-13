$(document).ready(function(){
  $('.images').slick({
  infinity:true,
  dots:true,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight: true,
});
  $('.slider').slick({
  infinity:true,
  dots:false,
  arrows:true,
  slidesToShow: 2,
  slidesToScroll: 1,
  rows:2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:1,
      }
    },
      ]
});
});