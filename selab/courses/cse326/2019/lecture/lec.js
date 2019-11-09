var OBO = false;
var smax = 1;
var snum = 0;
var indexLeng = 0;

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

//function for edit html structure
function editHtml() {
  var layoutDiv = document.getElementsByClassName("layout");
  var layoutArr = (layoutDiv[0].innerHTML).split(/\n/g);
  layoutDiv[0].innerHTML = '<div id="side">' +
   layoutArr[1] +
   '<div id="navList"><ul id="index" ><\/ul><\/div>' +
   layoutArr[4] + layoutArr[5] + layoutArr[6] +layoutArr[7] + 
   '</div> <div id="custom"><div id="background"></div><div id="font"></div></div><div id="line"> </div>' + 
   '<a href="javascript:sideFold()"> <div id="fold"><p>||</p></div> </a>';
  // var layoutArr = (layoutDiv[0].innerHTML).split(/\n/g);
  // layoutDiv[0].innerHTML = '<div id="side">' +
  //  layoutArr[1] +
  //  '<div id="navList"><ul id="index" ><\/ul><\/div>' +
  //  layoutArr[4] + layoutArr[5] + layoutArr[6] +layoutArr[7] +
  //  '</div>' + '<div id="custom"><div id="background"></div> <div id="font"></div></div>' + '<div id="line">'
  //  '<a href="javascript:sideFold()"> <div id="fold"><p>&rsaquo;</p></div></a></div>' + '</div>';
}

function createControls() {
    var controlsDiv = document.getElementById("controls");
    if (!controlsDiv) return;

    controlsDiv.innerHTML = //'<form action="#" id="controlForm">' +
    '<div id="navaLinks">' +
    '<a accesskey="z" id="prev" title="Previous Slide" href="javascript:point(-1);">&lsaquo;<\/a>' +
    '<span id="slideNum"> </span>' +
    '<a accesskey="x" id="next" title="Next Slide" href="javascript:point(1);">&rsaquo;<\/a></div>' +
    '<div id = "buttons">' +
    '<a href="javascript:customize();" /> <img src = "images/font.png"/> </a>' +
    '<a href="javascript:oneByOne(0);" /> <img src = "images/vertical.png"/> </a></div>';
    //+ '<\/form>';
}

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
        var value = n + ':' + otext ;
        if (hasClass(obj, 'titleslide') || hasClass(obj, 'lecturetitle')) {
            value = n + " : === " + otext + " ===";
        }

        var li = document.createElement("li");
        li.innerText = value;
        li.id = 'index' + n;

        var link = document.createElement("a");
        link.href = 'javascript:jump('+n+')';
        link.appendChild(li);

        index.appendChild(link);
        indexLeng = indexLeng+1;
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
    ppt[0].style.marginLeft = 30 + '%';
    ppt[0].style.width = 70 + '%';
  }
}

function sideFold() {
  fold('side');
  pptResizing();
}

function customFold() {
  fold('custom');
  pptResizing();
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
      console.log("track"+snum);
      viewport()
    });
  });
}

// function for detect resizing browser
function layoutResizing() {
  var lOut = document.getElementsByClassName("layout");
  lOut[0].style.height = window.innerHeight + 'px';
  document.getElementById('index').style.height = (window.innerHeight * 0.65) + 'px';
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
  var slide = document.getElementsByClassName("slide");
  if (OBO == true && n == 0) {
    for (var i=0;i<indexLeng;i++) {
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
    OBO = true;
    snum = num;
    viewport()
    for (var j=0;j<indexLeng;j++) {
      if (j != num) {
        slide[j].style.display = 'none';
      }
      else {
        slide[j].style.display = 'block';
        slide[j].style.fontSize = '17pt';
      }
    }
  }
}

function customize(){
  x = document.getElementById("custom");
  var y = document.getElementsByClassName("layout");
  var z = document.getElementById("index");
  if(x.style.display == ''){
    x.style.display = 'block';
    y[0].style.width = "55%";
    z.style.width = "50%";


  }
  else{
   x.style.display = '';
   y[0].style.width = "25%";
   z.style.width = ''; 
  }
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
  editHtml();
  createControls();
  slideLabel();
  currentSlide();
  detectResize();
  pptResizing();
  trackPage();
}

window.onload = startup;