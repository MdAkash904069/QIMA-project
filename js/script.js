$(document).ready(function(){

  $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".logo").css('height','30');
            $(".nav-create").css('display','block');
            $(".nav-right2").css('display','block');
            $(".nav-right1").css('display','none');

        } else {
            $(".logo").css('height','60');
            $(".nav-create").css('display','none');
            $(".nav-right2").css('display','none');
            $(".nav-right1").css('display','block');
        }
    });

    


  $("#our_solution").hover(function(){
    $(".our-solution").css('display','block');
    $("#our_solution").addClass('navbar-li');
  });
  $(".our-solution").hover(function(){
    $(".our-solution").css('display','block');
    $("#our_solution").addClass('navbar-li');
  });
  $(".our-solution").mouseleave(function(){
    $(".our-solution").css('display','none');
    $("#our_solution").removeClass('navbar-li');
  });
  $('#our_solution').mouseleave(function () {
    $(".our-solution").css('display','none');
    $("#our_solution").removeClass('navbar-li');
       
    });


  $("#industry").hover(function(){
    $(".industry").css('display','block');
    $("#industry").addClass('navbar-li');
  });
  $(".industry").hover(function(){
    $(".industry").css('display','block');
    $("#industry").addClass('navbar-li');
  });
  $('.industry').mouseleave(function () {
    $(".industry").css('display','none'); 
    $("#industry").removeClass('navbar-li');
    });
  $('#industry').mouseleave(function () {
    $(".industry").css('display','none'); 
    $("#industry").removeClass('navbar-li');
    });

   $("#about-us").hover(function(){
    $(".about-us").css('display','block');
    $("#about-us").addClass('navbar-li');
  });
    $(".about-us").hover(function(){
    $(".about-us").css('display','block');
    $("#about-us").addClass('navbar-li');
  });

  $('#about-us').mouseleave(function () {
    $(".about-us").css('display','none');
    $("#about-us").removeClass('navbar-li');
       
    });
    $(".about-us").mouseleave(function(){
    $(".about-us").css('display','none');
    $("#about-us").removeClass('navbar-li');
  });




  // indicator
  $("#indicator-1").click(function(){
    $("#indicator_1").trigger('click');
    $("#indicator-1").addClass('border-bottom-2');
    $("#indicator-2").removeClass('border-bottom-2');
    $("#indicator-3").removeClass('border-bottom-2');
  });
  $("#indicator-2").click(function(){
    $("#indicator_2").trigger('click');
    $("#indicator-1").removeClass('border-bottom-2');
    $("#indicator-2").addClass('border-bottom-2');
    $("#indicator-3").removeClass('border-bottom-2');
  });
  $("#indicator-3").click(function(){
    $("#indicator_3").trigger('click');
    $("#indicator-1").removeClass('border-bottom-2');
    $("#indicator-2").removeClass('border-bottom-2');
    $("#indicator-3").addClass('border-bottom-2');
  });







     
});
