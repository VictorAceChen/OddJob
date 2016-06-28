//referenced from
//http://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=7
//NOT WORKING YET!!!
window.onload = rotate;
var theAd = 0;
var el;
var images;


var rotateImages = function(container, list) {
  images = list;
  el = document.getElementById(container);
  rotate();

};


var rotate = function() {
  theAd++;
  if (theAd == images.length) {
    theAd = 0;
  }
  el.src = images[theAd];

  $(el).fadeIn("slow");

  var fadeOut = function(){ $(el).fadeOut()("slow");};
  setTimeout(fadeOut, 5000);

  setTimeout(rotate(), 6000);
};

module.exports = rotateImages;
