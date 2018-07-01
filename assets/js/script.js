$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

  var sc = function() {

    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('.sidebar-container').removeClass('sidebar-active');
      $('#sidebar-button').removeClass('button-active');
      $('.page-wrapper').removeClass('wrapper-active');

    } else {
      $('.sidebar-container').addClass('sidebar-active');
      $('#sidebar-button').addClass('button-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
        }, 300);
    }
  };
      
  $('#sidebar-button').click(sc);

  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  $('.page-wrapper').click(function() {

    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('.sidebar-container').removeClass('sidebar-active');
      $('#sidebar-button').removeClass('button-active');
      $('.page-wrapper').removeClass('wrapper-active');
    }
  });

  // QUESTION 8
  var val = 0;

  function slide() {
    var leftMarg = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (leftMarg == -3840 && val < 0 ) {

        $('#carousel').css('margin-left',0);

      } else if (leftMarg == 0 && val > 0) {

        $('#carousel').css('margin-left',-3840);

      } else {

        $('#carousel').css('margin-left',leftMarg + val);

      }

  }

  //Implement the "slide to left" when the user clicks on #carousel-next here

  $('#carousel-next').click( function() {
    val = -960
    slide();
  })

  //Implement the "slide to right" when the user clicks on #carousel-prev here

  $('#carousel-prev').click( function() {
    val = 960
    slide();
  })




  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});