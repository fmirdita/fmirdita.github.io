var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

$(document).ready(function() {

  nav_top_margin = $('.header').cssNumber('height') - $('nav').cssNumber('height') ;
  $(window).scroll(function () {

    // console.log($(window).scrollTop(), nav_top_margin);
    // console.log($('.matrix').cssNumber('height'));



    if ($(window).scrollTop() > nav_top_margin) {
      $('nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < nav_top_margin) {
      $('nav').removeClass('navbar-fixed');
    }
    if ($(window).scrollTop() > 381){
      $('#matrix').addClass('matrix-fixed');
    }
    if ($(window).scrollTop() < 381){
      $('#matrix').removeClass('matrix-fixed');
    }


  });

  setInterval( function() {
    $('#open1').fadeOut().delay(300).fadeIn();
    $('#open1').removeClass("closed");
  }, 1500);

  setInterval( function() {
    $('#left_open1').fadeOut().delay(300).fadeIn();
    $('#left_open1').removeClass("closed");
  }, 1500);

  setInterval( function() {
    $('#open2').fadeOut().delay(300).fadeIn();
    $('#open2').removeClass("closed");
  }, 1500);

  setInterval( function() {
    $('#left_open2').fadeOut().delay(900).fadeIn();
    $('#left_open2').removeClass("closed");
  }, 1800);

});

/***********************************************
* The Matrix Text Effect- by Richard Womersley (http://www.mf2fm.co.uk/rv)
* This notice must stay intact for use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var rows=3; // must be an odd number
var speed=20; // lower is faster
var reveal=2; // between 0 and 2 only. The higher, the faster the word appears
var effectalign="center"; //enter "center" to center it.

var w3c=document.getElementById && !window.opera;;
var ie45=document.all && !window.opera;
var ma_tab, matemp, ma_bod, ma_row, x, y, columns, ma_txt, ma_cho;
var m_coch=new Array();
var m_copo=new Array();

window.onload=function() {
	if (!w3c && !ie45) return
  var matrix=(w3c)?document.getElementById("matrix"):document.all["matrix"];
  ma_txt=(w3c)?matrix.firstChild.nodeValue:matrix.innerHTML;
  ma_txt=" "+ma_txt+" ";
  columns=ma_txt.length;
  if (w3c) {
    while (matrix.childNodes.length) matrix.removeChild(matrix.childNodes[0]);
    ma_tab=document.createElement("table");
    ma_tab.setAttribute("border", 0);
    ma_tab.setAttribute("align", effectalign);
    ma_tab.style.backgroundColor="rgba(16,16,16,1)";
    ma_bod=document.createElement("tbody");
    for (x=0; x<rows; x++) {
      ma_row=document.createElement("tr");
      for (y=0; y<columns; y++) {
        matemp=document.createElement("td");
        matemp.setAttribute("id", "Mx"+x+"y"+y);
        matemp.className="matrix";
        matemp.appendChild(document.createTextNode(String.fromCharCode(160)));
        ma_row.appendChild(matemp);
      }
      ma_bod.appendChild(ma_row);
    }
    ma_tab.appendChild(ma_bod);
    matrix.appendChild(ma_tab);
  } else {
    ma_tab='<ta'+'ble align="'+effectalign+'" border="0" style="background-color:#EEE">';
    for (var x=0; x<rows; x++) {
      ma_tab+='<t'+'r>';
      for (var y=0; y<columns; y++) {
        ma_tab+='<t'+'d class="matrix" id="Mx'+x+'y'+y+'"> </'+'td>';
      }
      ma_tab+='</'+'tr>';
    }
    ma_tab+='</'+'table>';
    matrix.innerHTML=ma_tab;
  }
  ma_cho=ma_txt;
  for (x=0; x<columns; x++) {
    ma_cho+=String.fromCharCode(32+Math.floor(Math.random()*94));
    m_copo[x]=0;
  }
  ma_bod=setInterval("mytricks()", speed);
}

function mytricks() {
  x=0;
  for (y=0; y<columns; y++) {
    x=x+(m_copo[y]==100);
    ma_row=m_copo[y]%100;
    if (ma_row && m_copo[y]<100) {
      if (ma_row<rows+1) {
        if (w3c) {
          matemp=document.getElementById("Mx"+(ma_row-1)+"y"+y);
          matemp.firstChild.nodeValue=m_coch[y];
        }
        else {
          matemp=document.all["Mx"+(ma_row-1)+"y"+y];
          matemp.innerHTML=m_coch[y];
        }
        matemp.style.color="#33ff66";
        matemp.style.fontWeight="bold";
      }
      if (ma_row>1 && ma_row<rows+2) {
        matemp=(w3c)?document.getElementById("Mx"+(ma_row-2)+"y"+y):document.all["Mx"+(ma_row-2)+"y"+y];
        matemp.style.fontWeight="normal";
        matemp.style.color="#00ff00";
      }
      if (ma_row>2) {
          matemp=(w3c)?document.getElementById("Mx"+(ma_row-3)+"y"+y):document.all["Mx"+(ma_row-3)+"y"+y];
        matemp.style.color="#009900";
      }
      if (ma_row<Math.floor(rows/2)+1) m_copo[y]++;
      else if (ma_row==Math.floor(rows/2)+1 && m_coch[y]==ma_txt.charAt(y)) zoomer(y);
      else if (ma_row<rows+2) m_copo[y]++;
      else if (m_copo[y]<100) m_copo[y]=0;
    }
    else if (Math.random()>0.9 && m_copo[y]<100) {
      m_coch[y]=ma_cho.charAt(Math.floor(Math.random()*ma_cho.length));
      m_copo[y]++;
    }
  }
  if (x==columns) clearInterval(ma_bod);
}

function zoomer(ycol) {
  var mtmp, mtem, ytmp;
  if (m_copo[ycol]==Math.floor(rows/2)+1) {
    for (ytmp=0; ytmp<rows; ytmp++) {
      if (w3c) {
        mtmp=document.getElementById("Mx"+ytmp+"y"+ycol);
        mtmp.firstChild.nodeValue=m_coch[ycol];
      }
      else {
        mtmp=document.all["Mx"+ytmp+"y"+ycol];
        mtmp.innerHTML=m_coch[ycol];
      }
      mtmp.style.color="#33ff66";
      mtmp.style.fontWeight="bold";
    }
    if (Math.random()<reveal) {
      mtmp=ma_cho.indexOf(ma_txt.charAt(ycol));
      ma_cho=ma_cho.substring(0, mtmp)+ma_cho.substring(mtmp+1, ma_cho.length);
    }
    if (Math.random()<reveal-1) ma_cho=ma_cho.substring(0, ma_cho.length-1);
    m_copo[ycol]+=199;
    setTimeout("zoomer("+ycol+")", speed);
  }
  else if (m_copo[ycol]>200) {
    if (w3c) {
      mtmp=document.getElementById("Mx"+(m_copo[ycol]-201)+"y"+ycol);
      mtem=document.getElementById("Mx"+(200+rows-m_copo[ycol]--)+"y"+ycol);
    }
    else {
      mtmp=document.all["Mx"+(m_copo[ycol]-201)+"y"+ycol];
      mtem=document.all["Mx"+(200+rows-m_copo[ycol]--)+"y"+ycol];
    }
    mtmp.style.fontWeight="normal";
    mtem.style.fontWeight="normal";
    setTimeout("zoomer("+ycol+")", speed);
  }
  else if (m_copo[ycol]==200) m_copo[ycol]=100+Math.floor(rows/2);
  if (m_copo[ycol]>100 && m_copo[ycol]<200) {
    if (w3c) {
      mtmp=document.getElementById("Mx"+(m_copo[ycol]-101)+"y"+ycol);
      mtmp.firstChild.nodeValue=String.fromCharCode(160);
      mtem=document.getElementById("Mx"+(100+rows-m_copo[ycol]--)+"y"+ycol);
      mtem.firstChild.nodeValue=String.fromCharCode(160);
    }
    else {
      mtmp=document.all["Mx"+(m_copo[ycol]-101)+"y"+ycol];
      mtmp.innerHTML=String.fromCharCode(160);
      mtem=document.all["Mx"+(100+rows-m_copo[ycol]--)+"y"+ycol];
      mtem.innerHTML=String.fromCharCode(160);
    }
    setTimeout("zoomer("+ycol+")", speed);
  }
}
// -->
