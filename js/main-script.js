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

/******************************
 owl carousel staff profesional
*******************************/
$(document).ready(function(){
  $(".owl-carousel.staff-profesional").owlCarousel({
    items:4,    
    margin:5,
    loop:true,
    lazyLoad:true,  
    nav:true,           
  });
});

/***********************
    flexslider - home    
 ***********************/
$(window).load(function() {
  $('.flexslider.home').flexslider({
    animation: "fade",
    animationLoop: true, 
    slideshow: true,
    slideshowSpeed: 4000,    
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

/*******************************************
     ancla scroll  servicios in company  
 *******************************************/
$('.ui-btn-abajo.staff-profesional').on('click', function(e){
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

/*********************************
    tabs servicios in company     
 *********************************/
function openCursos(evt, cursosName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-in-company");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-in-company");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cursosName).style.display = "block";
    evt.currentTarget.className += " active";
}

/****************
    tab blog     
 ****************/
function openBlog(evt, blogName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-blog");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-blog");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(blogName).style.display = "block";
    evt.currentTarget.className += " active";
}
