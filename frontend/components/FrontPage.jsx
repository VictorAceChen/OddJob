var React = require('react');
var ReactDOM = require('react-dom');
var JobStore = require('../stores/job_store');
var JobSearch = require('./SearchBar');

// window.onload = rotate;

var theAd = 0;
var adImages = new Array(
  // "http://67.media.tumblr.com/tumblr_loptl0yRJn1qf7znjo1_400.gif",
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
  el.src = adImages[theAd];

  $(el).fadeIn("slow");

  // var fadeOut = function(){ $(el).fadeOut()("slow");};
  setTimeout(function(){  $(el).fadeOut("slow"); }, 5700);

  setTimeout(rotate, 6000);
}

var FrontPage = React.createClass({
  getInitialState: function() {
    return {
      theAd: 0,
      adImages: adImages
    };
  },

  rotate: function() {
    // $img = $(this.refs.adBanner)
    //replace getElementById by find by ref
    //
    var position;
    this.setState( {theAd: (this.state.theAd + 1)} );
    if (this.state.theAd == this.state.adImages.length) {
      this.setState( {theAd: 0} );
    }
    var el = document.getElementById("adBanner");
    el.src = adImages[theAd];

    $(el).fadeIn("slow");

    // var fadeOut = function(){ $(el).fadeOut()("slow");};
    setTimeout(function(){  $(el).fadeOut("slow"); }, 5500);

    setTimeout(rotate, 6000);
  },

  componentDidMount: function() {
    rotate();
  },

  render: function() {
    return (
      <div className="centered">
        <JobSearch/>
        <img src={adImages[0]} ref="adBanner"  id="adBanner" className="adBanner"/>
      </div>
    );
  }
});
module.exports = FrontPage;
