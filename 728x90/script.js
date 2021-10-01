// Images
var bg = document.getElementById('bg');
var bg1 = document.getElementById('bg1');
var line = document.getElementById('line');
var logo = document.getElementById('logo');
var clicktagbtn = document.getElementById('clicktag')

var trackings = {
  clicktag: 'https://www.hiretrades.com.au/landing',
};

var images,
  loadedImage = 0;

function preload() {
  images = new Array(
    // list images needed from the assets folder
    'images/electrician.png',
    'images/bg.png',
    'images/line.png',
    'images/logo.png',
  );

  for (var i = 0; i < images.length; i++) {
    imageObj = new Image();
    imageObj.src = images[i];
    imageObj.addEventListener('load', iLoad, false);
  }
}

function iLoad() {
  loadedImage++;
  if (images.length == loadedImage) {
    // set the background for each div by calling the images declared on the array

    bg.src = images[0];
    bg1.src = images[1];
    line.src = images[2]
    clicktagbtn.setAttribute('href', trackings.clicktag);
    logo.src = images[3];

    init();
  }
}

function init() {
  main.style.visibility = 'visible';
}

// image preload function should be called upon banner load.
preload();
