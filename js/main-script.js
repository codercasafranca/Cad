
/***********************************
    acordeon contenido del curso
 ***********************************/
$(function() {
  'use strict';
  
  var selector = $('.ac-title-acerca-del-curso');

  $('.accordion-wrapper').each(function() {
    if ($(this).find('.ac-pane-acerca-del-curso').hasClass('active')) {
      $('.ac-pane-acerca-del-curso.active .ac-content-acerca-del-curso').css('display', 'block');
    }
  });
  
  selector.on('click', function(event) {
    event.preventDefault();

    // get the attr value
    var attr = selector.attr('data-accordion-acerca-curso');
    var getparent = $(this).closest('.accordion-wrapper.acerca-del-curso');

    if ( $(this).attr('data-accordion-acerca-curso') == 'true' ) {

        if ($(this).next('.ac-content-acerca-del-curso').is(':visible')) {
          return false;
        }else {

          getparent.find('.ac-content-acerca-del-curso').slideUp();
          $(this).next('.ac-content-acerca-del-curso').slideDown();
          getparent.find('.ac-pane-acerca-del-curso').removeClass('active');
          $(this).parent().addClass('active');
        }

    } else {
        $(this).next('.ac-content-acerca-del-curso').slideToggle();
        $(this).parent().toggleClass('active');
    }
    
  });
});

/**********************************
       Modales comprar curso      
 **********************************/
function realizaPago() {
   document.getElementById("realiza-tu-pago").style.display = "block";
   document.getElementById("modal-revision-pedido").style.display = "none";
}

function cerrarModal() {
    document.getElementById("modal-resumen-pedido").style.display = "none";
}

function btnCursoRecomendado() {
    document.getElementById("modal-resumen-pedido").style.display = "block";
}

function abrirRevisionPedido() {
    document.getElementById("modal-revision-pedido").style.display = "block";
    document.getElementById("modal-resumen-pedido").style.display = "none";
}

function cerrarRevisionPedido() {
   document.getElementById("modal-revision-pedido").style.display = "none";
}

/*************************************** 
       modal servicios in company      
 ***************************************/
function openModal01() {
  document.getElementById('staff-modal-01').style.display = 'block';
  $("body").css("overflow", "hidden");
}

function closeModal01(){
  document.getElementById('staff-modal-01').style.display = 'none';
  $("body").css("overflow", "auto");
}

function openModal02() {
  document.getElementById('staff-modal-02').style.display = 'block';
  $("body").css("overflow", "hidden");
}

function closeModal02(){
  document.getElementById('staff-modal-02').style.display = 'none';
  $("body").css("overflow", "auto");
}

/***********************************
    modal Consultoria in company   
 ***********************************/
function openModalConsultoria01(){
  document.getElementById('modal-consultoria-a').style.display = 'block';
  $("body").css("overflow", "hidden");
}

function closeModalConsultoria01(){
  document.getElementById('modal-consultoria-a').style.display = 'none';
  $("body").css("overflow", "auto");
}

/********************************
    btn ver mas de convenios
 ********************************/
$(document).ready(function(){
    $(".ui-btn-ver-mas-cliente.btn-a").click(function(){
        $("#lista-nuevos-clientes-a").slideToggle();
          $('.ver-mas-cliente .a').toggle();
    });
});

$(document).ready(function(){
    $(".ui-btn-ver-mas-cliente.btn-b").click(function(){
        $("#lista-nuevos-clientes-b").slideToggle();
          $('.ver-mas-cliente .a').toggle();
    });
});


/****************************
    btn ver mas clientes
 ****************************/
$(document).ready(function(){
    $(".ui-btn-ver-mas-cliente.btn-c").click(function(){
        $("#lista-nuevos-clientes-c").slideToggle();
          $('.ver-mas-cliente .a').toggle();
    });
});

/*********************************************
    btn ver mas instructor detalle de curso
 *********************************************/
$(document).ready(function(){
    $(".ui-box-texto-ver-mas .ui-box").click(function(){
        $("#mas-info-instructor").slideToggle();               
    });
});

/**************************************
    btn ver lista recientes - blog
 **************************************/
$(document).ready(function(){
    $(".ui-btn-lista-blog.recientes").click(function(){
        $(".ui-extra-lista-recientes").slideToggle();        
    });

    $(".ui-btn-lista-blog.recientes").click(function(){
        $(".ui-icon-lista-blog").toggleClass('active');        
    });
});

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
    items:6,    
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

/******************************
  owl carousel nuestras sedes
*******************************/
$(document).ready(function(){
  $(".owl-carousel.nuestras-sedes").owlCarousel({
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

  circularAnimation();
  setInterval(circularAnimation, 4000);

});

function circularAnimation() {
    $('.flexslider.home .flex-control-paging li a').circleProgress({
        value: 0,
        size: 50,
        animation: { duration: 4000 },
        thickness: 2,
        fill: { color: '#FFF' },
        emptyFill: 'rgba(0, 0, 0, 0)'
    });
    $('.flexslider.home .flex-control-paging li a.flex-active').circleProgress({
        value: 1.0,
    });
}



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
  $('html,body').animate({scrollTop: $(strAncla).offset().top-114}, 1500);
});

$('.ui-btn-abajo-slider').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-114}, 1500);
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
$('.ui-btn-abajo-porque-cad').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-122}, 1500);
});

/********************************
     ancla scroll  convenios  
 ********************************/
$('.ui-btn-abajo-convenios').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-108}, 1500);
});

/************************************
     ancla scroll  video nosotros  
 ************************************/
$('.ui-btn-abajo-nosotros').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top-108}, 1500);
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

/*****************************
     tab nuestros convenios     
 *****************************/
function openConvenios(evt, conveniosName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-convenios");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-convenios");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(conveniosName).style.display = "block";
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

/*********************
     tab cad perú     
 *********************/
function openCad(evt, cadName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-cad-peru");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-cad-peru");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cadName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*********************************
     tab pago tarjeta credito    
 *********************************/
function openPago(evt, pagoName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-pago-tarjeta-credito");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks-pago-tarjeta-credito");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pagoName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*************************
    btn comienza ahora
 *************************/
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.ui-box-comienza-ahora').fadeIn();
    } else {
        $('.ui-box-comienza-ahora').fadeOut();
    }
});

/************************
 *    mapa nosotros     *
 ************************/
function initMap() {
  var uluru = {lat: -9.130, lng: -79.580};
    var map = new google.maps.Map(document.getElementById('mapa-nosotros'), {
      zoom: 6,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
  });
}