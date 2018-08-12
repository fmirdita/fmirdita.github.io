$(document).ready(function() {

  $('.card-overlay').hover( function() {
    $(this).children($('.plus')).fadeIn(100);
  }, function () {
    $(this).children($('.plus')).fadeOut();
  })

  $('.card-overlay').click( function() {
    $(this).fadeOut();

    var card = $(this).siblings($('.card')), curHeight = card.height(), autoHeight=card.css('height', 'auto').height();
    card.height(curHeight).animate({
      height: autoHeight,
    }, {duration: 300, queue: false });
  });

  $('.card').click( function() {
    console.log($(this));


    $(this).animate({
       height: '22em',
    }, { duration: 300, queue: false });

    $(this).siblings('.card-overlay').fadeIn();

  });

});
