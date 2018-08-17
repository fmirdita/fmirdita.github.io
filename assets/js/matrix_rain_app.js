
jQuery.fn.cssNumber = function(prop){
    var v = parseInt(this.css(prop),10);
    return isNaN(v) ? 0 : v;
};

/*******
http://cssdeck.com/labs/the-matrix
********/

var width = rain.width = window.screen.width;
var height = rain.height = 4.66*window.screen.height/8;
var letters = Array(100).join(1).split('');

  var arr = [
'#F0F',
'#00F',
'#0FF',
'#0F0',
'#FF0',
'#F00'
];



  var curr_color = 0;
  setInterval( function() {
    curr_color += 1;
    curr_color %= 6;
  }, 34);

var rainbow_mode = false;

var color = '#0F0'

var draw = function () {
  var ctx = rain.getContext('2d')
  ctx.fillStyle='rgba(16,16,16,.1)';   // last number controls how fast text fades
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle= (rainbow_mode) ? arr[curr_color] : color;
  ctx.font = "1em Courier";

  letters.map(function(y_pos, index){
    text = String.fromCharCode(48+Math.random()*2); //1's and 0s
    x_pos = index * 20; // number indicates text frame width. overlaps < ft size
    ctx.fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 12;
  });
};
setInterval(draw, 33);

// SLiderS
$( function() {
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    var new_color = "#" + hex
    $( "#swatch" ).css( "background-color", new_color );
    color = new_color;
  }

  $( "#red, #green, #blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $( "#red" ).slider( "value", 255 );
  $( "#green" ).slider( "value", 140 );
  $( "#blue" ).slider( "value", 60 );
} );

function toggle(t, mode) {
  $(t).css('background', 'green');
  var c = $(t).children($('.circle')), pos = c.position(), new_pos = c.css('float', 'right').position();
  c.css({top: pos.top, left: pos.left}).animate({
    left: new_pos.left,
    top: new_pos.top,
  }, {duration: 1000, queue: false });
}
