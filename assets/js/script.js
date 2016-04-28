$(document).ready(function() {

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

  $('.page-wrapper').click(function() {

    if ($('.sidebar-container').hasClass('sidebar-active')) {
      $('body').removeClass('no-scroll');
      $('.sidebar-container').removeClass('sidebar-active');
      $('#sidebar-button').removeClass('button-active');
      $('.page-wrapper').removeClass('wrapper-active');
    }
  });

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

  $('#carousel-next').click( function() {
    val = -960
    slide();
  })

  $('#carousel-prev').click( function() {
    val = 960
    slide();
  })

// PROJECT TRANSITIONS

var img_array = [1, 2, 3],
        newIndex = 0,
        index = 1,
        interval = 5000;
    (function changeBg() {

        //  --------------------------
        //  For random image rotation:
        //  --------------------------

            //  newIndex = Math.floor(Math.random() * 10) % img_array.length;
            //  index = (newIndex === index) ? newIndex -1 : newIndex;

        //  ------------------------------
        //  For sequential image rotation:
        //  ------------------------------

            index = (index + 1) % img_array.length;

        $('.project-container').css('background-image', function () {
            $('#fullPage').animate({
                backgroundColor: 'transparent'
            }, 1000, function () {
                setTimeout(function () {
                    $('#abuddie').animate({
                        backgroundColor: 'rgb(255,255,255)'
                    }, 1000);
                }, 3000);
            });
            return '../img/abuddie' + img_array[index] + '.png)';
        });
        setTimeout(changeBg, interval);
    })();
});