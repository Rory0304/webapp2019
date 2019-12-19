//some of function is from original 'selap'page "slides.js"

var OBO = false;
var smax = 1;
var snum = 0;

// function for function get ready
function nodeValue(node) {
  var result = "";
  if (node.nodeType == 1) {
    var children = node.childNodes;
    for (var i = 0; i < children.length; ++i) {
      result += nodeValue(children[i]);
    }
  }
  else if (node.nodeType == 3) {
    result = node.nodeValue;
  }
  return(result);
}

function hasClass(object, className) {
  if (!object.className) return false;
  return (object.className.search('(^|\\s)' + className + '(\\s|$)') != -1);
}

function GetElementsWithClassName(elementName,className) {
  var allElements = document.getElementsByTagName(elementName);
  var elemColl = new Array();
  for (var i = 0; i< allElements.length; i++) {
    if (hasClass(allElements[i], className)) {
      elemColl[elemColl.length] = allElements[i];
    }
  }
  return elemColl;
}

// function that do the actual work

  function slideLabel() {
    var slideColl = GetElementsWithClassName('*', 'slide');
    var index = document.getElementById('index');
    smax = slideColl.length;

    for (var n = 0; n < smax; n++) {
      var obj = slideColl[n];
      obj.setAttribute('id', 'slide' + n);
        // if (isOp) continue;

        var otext = '';
        var menu = obj.firstChild;
        if (!menu) continue; // to cope with empty slides
        while (menu != null && menu.nodeType == 3) {
          menu = menu.nextSibling;
        }
        if (!menu) continue; // to cope with slides with only text nodes

        var menunodes = menu.childNodes;
        for (var o = 0; o < menunodes.length; o++) {
          otext += nodeValue(menunodes[o]);
        }

        otext = otext.replace(/\r/g, "");
        otext = otext.replace(/\n/g, "");
        var value = n + '. ' + otext ;
        if (hasClass(obj, 'titleslide') || hasClass(obj, 'lecturetitle')) {
          value = n + " . === " + otext + " ===";
        }

        var li = document.createElement("li");
        li.innerText = value;
        li.id = 'index' + n;

        var link = document.createElement("a");
        link.href = 'javascript:jump('+n+')';
        link.appendChild(li);

        index.appendChild(link);
      }
    }

function currentSlide() {
  var sn = document.getElementById('slideNum');

  sn.innerHTML = '<span id="snHere">' + snum + '<\/span> ' +
  '<span id="snSep">\/<\/span> ' +
  '<span id="snTotal">' + (smax-1) + '<\/span>';
}

//function for specific func

//function for fold something
function fold(id){
  var elem = document.getElementById(id);
  if(elem.style.display=='none'){
    elem.style.display = 'block';
  }else{
    elem.style.display = 'none';
  }
}

function pptResizing() {
  var ppt = document.getElementsByClassName("presentation");
  var side = document.getElementById("side");
  if(side.style.display=='none') {
    ppt[0].style.marginLeft = 10 + '%';
    ppt[0].style.width = 90 + '%';
  }
  else {
    ppt[0].style.marginLeft = 25 + '%';
    ppt[0].style.width = 75 + '%';
  }
}

function sideFold() {
  fold('side');
  pptResizing();
}

function customFold() {
  fold('custom');
}

// function for tracking scoll
function viewport() {
  var sn = document.getElementById('snHere');
  sn.innerText = snum;
}

function trackPage() {
  jQuery(function($){
    $(window).bind("scroll", function() {
      if (OBO == true)
        return;
      var view = $(".presentation > div").withinviewport();
      if (typeof view[0] != 'undefined')
        snum = parseInt(view[0].id.replace(/[^0-9]/g,''));
      viewport()
    });
  });
}

// function for detect resizing browser
function layoutResizing() {
  var lOut = document.getElementsByClassName("layout");
  lOut[0].style.height = window.innerHeight + 'px';
  document.getElementById('index').style.height = (window.innerHeight * 0.9) + 'px';
}

function detectResize() {
  jQuery(function($){
    $(window).resize( layoutResizing );
    layoutResizing();
  });
}

//function for change layout to one-by-one
function oneByOne(n) {
  var num = snum + n;
  if (num >= smax || num < 0)
    return ;
  var slide = document.getElementsByClassName("slide");
  if (OBO == true && n == 0) {
    for (var i=0;i<smax;i++) {
      if (i != num) {
        slide[i].style.display = 'block';
      }
      else {
        slide[i].style.fontSize = '13pt';
      }
    }
    OBO = false;
    trackPage();
    location.replace("#slide"+num);
  }
  else {
    //가로
    OBO = true;
    snum = num;
    viewport()
    for (var j=0;j<smax;j++) {
      if (j != num) {
        slide[j].style.display = 'none';
      }
      else {
        slide[j].style.display = 'block';
        var check = document.getElementById("fontsizeSlect");
        if(check.selectedIndex==-1){
          slide[j].style.fontSize = '17pt';
        }
      }
    }
  }
}

function standardizeEvent(event) {
  var e = event || window.event;
    // e.which = e.button || e.which;
    if (!e.keyCode) {
      try {
        e.keyCode = e.which;
      } catch (ex) {}
    }
    if (!e.srcElement) {
      try {
        e.srcElement = e.target;
      } catch (ex) {}
    }
    return e;
  }

// 'keys' code adapted from MozPoint (http://mozpoint.mozdev.org/)
function keys(event) {
  if (OBO == false)
    return;

  event = standardizeEvent(event);
  var modifierKey = event.ctrlKey || event.altKey || event.metaKey;

  switch (event.keyCode) {
      case 32: // spacebar
      case 34: // page down
      case 39: // rightkey
      case 40: // downkey
      if (!modifierKey) {
        oneByOne(1);
      }
      break;
      case 33: // page up
      case 37: // leftkey
      case 38: // upkey
      if (!modifierKey) {
        oneByOne(-1);
      }
      break;
      case 36: // home
      oneByOne(-snum);
      break;
      case 35: // end
      oneByOne(smax-1-snum);
      break;
    }
  }

//function for showing customized page
function customize(){
  var custom = document.getElementById("customize");
  var layout = document.getElementsByClassName("layout");
  var navList = document.getElementById("navList");
  if(custom.style.display == ''){
    custom.style.display = 'block';
    layout[0].style.width = "50%";
    navList.style.width = "50%";
  }
  else{
   custom.style.display = '';
   layout[0].style.width = "25%";
   navList.style.width = '';
 }
}

function fontupdate(value){
  if(value==1){
   var font = document.getElementById("fontselect").value;
   document.getElementsByClassName('presentation')[0].style.fontFamily = font;
 }
 if(value==2){
   var fontsize = document.getElementById("fontsizeSlect").value;
   var slides =  document.getElementsByClassName("slide");
   var i;
   for (i = 0; i < slides.length; i++) {
    slides[i].style.fontSize = fontsize;
  }
}

}

function colorpicker(){

  jQuery(function($){
    $("#custom").spectrum({
      color: "black",
      showPalette: true,
      palette: [
      ['black', 'white', 'blanchedalmond'],
      ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
      ],

      change: function(color){

        $(".presentation h1").css("color",color.toHexString());
      }
    });
    document.getElementById("custom").value = color.toHexString();
  });

  jQuery(function($){
    $("#custom1").spectrum({
      color: "black",
      showPalette: true,
      palette: [
      ['black', 'white', 'blanchedalmond'],
      ['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
      ],
      change: function(color){
        $(".presentation:not(h1)").css("color",color.toHexString());
      }
    });
    document.getElementById("custom1").value = color.toHexString();
  });
}

//function for index
function jump(n) {
  if (!OBO) {
    location.replace('#slide' + n);
  }
  else {
    oneByOne(n-snum);
  }
}

function point(n) {
  if (!OBO) {
    location.replace('#slide' + (snum +n));
  }
  else {
    oneByOne(n);
  }
}

function startup() {
  slideLabel();
  currentSlide();
  detectResize();
  pptResizing();
  trackPage();
  colorpicker();
  document.onkeydown = keys;
}

window.onload = startup;
