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

  $('.toggle-icon.icon').click( function() {
    var card = $(this).parent();

    if (card.hasClass('open')) {
      collapseCard(card, $(this));
    } else {
      expandCard(card, $(this));
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
    toSection("#"+$(this).text().toLowerCase());
  });

  $('.top-link').click( function() {
    $('html, body').animate({
      scrollTop: 0
      }, 2000);
  })

});

function toSection(el_id, scroll_time=1500) {
  $('html, body').animate({
    scrollTop: $(el_id).offset().top - 72
  }, scroll_time);
};

function hideDetails() {
  $('details').removeAttr("open");
  toSection('#intro', 300);
};

function collapseCard(card, icon) {
  card.siblings('.card-overlay').fadeIn();
  card.height(card.height).animate({
    height: '16em',
    width: '16em',
    }, {duration: 300, queue: false});
  card.removeClass('open');
};

function expandCard(card, icon) {
  card.siblings('.card-overlay').fadeOut();

  var autoHeight=card.children('.card-content').height();

  autoHeight += 200;

  card.height(card.height).animate({
    height: autoHeight,
  }, {duration: 300, queue: false});

  card.addClass('open')
}
