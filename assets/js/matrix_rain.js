
jQuery.fn.cssNumber = function(prop){
    var v = parseInt(this.css(prop),10);
    return isNaN(v) ? 0 : v;
};

/*******
http://cssdeck.com/labs/the-matrix
********/
var line_height = 12;
var letter_spacing = 8;

var width = rain.width = window.screen.width;
var height = rain.height = window.screen.height*2.5;
var num_cols = Math.round(width/letter_spacing);
var letters = Array(num_cols).join(1).split('');
var rain_speed = 40;

var curr_color = 0, curr_letter = 0;
var arr = [ '#F0F','#00F','#0FF','#0F0','#FF0','#F00'];
var word = [ ]
var rainbow_mode = true;
var word_mode = false;
var one_zero_mode = true;
var color = '#0F0'

var draw = function () {
  var ctx = rain.getContext('2d')
  ctx.fillStyle='rgba(16,16,16,.12)';   // last number controls how fast text fades
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle= (rainbow_mode) ? arr[curr_color] : color;
  ctx.font = ".7em Courier";

  letters.map(function(y_pos, index){
    text =(word_mode) ? name[curr_letter] : String.fromCharCode(3e4+Math.random()*33); //1's and 0s: 48+Math.random()*2
    text = (one_zero_mode) ? String.fromCharCode(48+Math.random()*2) : text;
    x_pos = index * letter_spacing; // number indicates text frame width. overlaps < ft size
    ctx.fillText(text, x_pos, y_pos);
    letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + line_height;
  });
};

var rain_dynamics = setInterval( function() {
  curr_color += 1;
  curr_letter += 1;
  curr_color %= 6;
  curr_letter %= word.length;
}, rain_speed+1);

var raining = setInterval(draw, rain_speed);

$(window).resize( function() {
  console.log(window.screen.width);

});

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {
	// Portrait orientation
} else {
	// Landscape orientation
}

// Add a media query change listener
mql.addListener(function(m) {
	if(m.matches) {
    clearInterval(rain_dynamics);
    clearInterval(raining);

    width = rain.width = window.screen.width;
    height = rain.height = window.screen.height*2.5;
    num_cols = Math.round(width/letter_spacing);
    letters = Array(num_cols).join(1).split('');

    raining = setInterval(draw, rain_speed);
    rain_dynamics = setInterval( function() {
      curr_color += 1;
      curr_letter += 1;
      curr_color %= 6;
      curr_letter %= word.length;
    }, rain_speed+1);
	}
	else {
    clearInterval(rain_dynamics);
    clearInterval(raining);

    width = rain.width = window.innerWidth;
    height = rain.height = window.innerHeight*2.5;
    num_cols = Math.round(width/letter_spacing);
    letters = Array(num_cols).join(1).split('');

    raining = setInterval(draw, rain_speed);
    rain_dynamics = setInterval( function() {
      curr_color += 1;
      curr_letter += 1;
      curr_color %= 6;
      curr_letter %= word.length;
    }, rain_speed+1);
	}
});
