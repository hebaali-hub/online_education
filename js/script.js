$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-xmark');//close icon
    $('nav').toggleClass('nav-toggle');
  });

  $(window).on('load scroll',function(){

  if($(window).scrollTop() > 20){

  $('#header').css('top','0');
  
  $('.fa-bars').removeClass('fa-xmark');
  $('nav').removeClass('nav-toggle');

  }else{
  $('#header').css('top','-100%');
  }
 }
 );

});