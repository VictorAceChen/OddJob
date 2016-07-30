var React = require('react'),
Slider = require('react-slick');

var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      fade: true
    };


var wideAd = React.createClass({

  render: function () {
    return (
      <Slider className="slick-container"{...settings}>
        {/*<img src="http://67.media.tumblr.com/tumblr_loptl0yRJn1qf7znjo1_400.gif"/>*/}
        <img src="https://66.media.tumblr.com/tumblr_maegvjEMZ21r18azjo1_500.gif"/>
        <img src="https://66.media.tumblr.com/08648f5e116800625ce267a076730517/tumblr_o0g0ynlHaj1sa11jco1_540.gif"/>
        <img src="https://media0.giphy.com/media/EOpZ7XsVfTN2E/200.gif"/>
      </Slider>
    );
  }
});

module.exports = wideAd;
