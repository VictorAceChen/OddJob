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
      <Slider className="slick-tall"{...settings}>
      <img src="http://data.whicdn.com/images/45940825/large.png"/>
      <img src="https://s-media-cache-ak0.pinimg.com/736x/d4/6f/dd/d46fdd7e3af22c9e618acfd04d83cf4a.jpg"/>
      <img src="https://s-media-cache-ak0.pinimg.com/736x/93/09/f2/9309f2ced4bc22920e5af967bf87fb10.jpg"/>
      <img src="http://static6.comicvine.com/uploads/scale_small/7/71975/2357182-240041_20120317132130_large.jpg"/>
      <img src="https://res.cloudinary.com/teepublic/image/private/s--pj9od3Ry--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1446247302/production/designs/308525_1.jpg"/>
      </Slider>
    );
  }
});

module.exports = wideAd;
