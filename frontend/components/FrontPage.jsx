var React = require('react');
var ReactDOM = require('react-dom');
var JobStore = require('../stores/job_store');
var JobSearch = require('./SearchBar');

window.onload = rotate;

var theAd = 0;
var adImages = new Array(
  "https://66.media.tumblr.com/tumblr_maegvjEMZ21r18azjo1_500.gif",
  "https://66.media.tumblr.com/08648f5e116800625ce267a076730517/tumblr_o0g0ynlHaj1sa11jco1_540.gif",
  "https://media0.giphy.com/media/EOpZ7XsVfTN2E/200.gif"
);

//referenced from
//http://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=7
function rotate() {
  theAd++;
  if (theAd == adImages.length) {
    theAd = 0;
  }
  var el = document.getElementById("adBanner");
  //  debugger
  if(!el) el.src = adImages[theAd];
  $(el).fadeIn("slow");
  // $(el).fadeToggle()("slow");

  setTimeout(rotate, adImages.length * 2000);
  // $(el).toggleClass("fade-out");
  // setTimeout(fadeOut(el), 2500);
}

var FrontPage = React.createClass({

  render: function() {
    return (
      <div className="centered">
        <JobSearch/>
        <img src={adImages[1]} id="adBanner" alt="Ad Banner" className="fade-in"/>
      </div>
    );
  }
});
module.exports = FrontPage;
