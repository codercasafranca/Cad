/**********************
  owl carousel alumnos
***********************/
$(document).ready(function(){
  $(".owl-carousel.alumnos").owlCarousel({
     items:1,
     dots:true,
     autoplay:true,
     autoplayTimeout:3000,
     loop:true,
  });
});

/**********************
 owl carousel clientes
***********************/
$(document).ready(function(){
  $(".owl-carousel.clientes").owlCarousel({
     items:5,    
     margin:5,
     loop:true,
  });
});

/*****************
  bxslider banner
******************/
$(document).ready(function(){
  $('.bxslider.slider').bxSlider({
    auto:true,
  });
});


