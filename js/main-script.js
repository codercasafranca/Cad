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
    lazyLoad:true,  
    nav:true, 
    navText: ["<img src='img/left-icon-cliente-gris.png'>", "<img src='img/right-icon-cliente-gris.png'>"], 
    navClass: ['owl-prev', 'owl-next'],  
  });
});

/***********************
     bxslider - home    
 ***********************/
$(document).ready(function(){
  $('.bxslider-home').bxSlider({
    mode:"fade",
  });
});


/*************
     video    
 *************/
$(document).ready(function(){
  jQuery("a.demo").YouTubePopUp();
});


/*******************
     ancla scroll    
 *******************/
$('.ui-box-btn-slider-scroll-abajo').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-122}, 1500);
});

$('.ui-btn-abajo.slider').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-122}, 1500);
});

/********************************
     ancla scroll  porque cad  
 ********************************/
$('.ui-btn-abajo').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-122}, 1500);
});