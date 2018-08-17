$(document).ready(function() {

  $('.magic').hover( function() {
    $(this).addClass('rainbow');
  }, function() {
    $(this).removeClass('rainbow');
  });

  $('.icon').hover( function() {
    $(this).children($('.plus')).fadeIn(100);
  }, function () {
    $(this).children($('.plus')).fadeOut();
  });

  $('.icon').click( function() {
    if ($(this).hasClass('.open')) {

      $(this).parent().siblings($('.card-overlay')).fadeIn();

      var card = $(this).parent();

      card.height(card.height).animate({
        height: '22em',
      }, {duration: 300, queue: false});

      $(this).removeClass('.open')

    } else {
      $(this).parent().siblings($('.card-overlay')).fadeOut();

      var card = $(this).parent();
      var autoHeight=$(this).siblings($('.list')).height();
      autoHeight += 250;

      card.height(card.height).animate({
        height: autoHeight,
      }, {duration: 300, queue: false});

    $(this).addClass('.open')
  }
});

  $('.list').click( function() {

    $(this).parent().animate({
       height: '22em',
    }, { duration: 300, queue: false });

    $(this).parent().siblings('.card-overlay').fadeIn();

  });

  $('nav li').click( function() {
    $(this).closest('ul').find($('.active')).removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
      scrollTop: $("#"+$(this).text().toLowerCase()).offset().top
      }, 2000);
  });

  $('.top-link').click( function() {
    $('html, body').animate({
      scrollTop: 0
      }, 2000);
  })

});
