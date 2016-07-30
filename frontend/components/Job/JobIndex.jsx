var React = require('react');
var JobStore = require('../../stores/job_store.js');
var ClientActions = require('../../actions/client_actions.js');

var JobIndexItem = require('./JobIndexItem.jsx');
var JobForm = require('./JobForm.jsx');
var SearchBar = require('../SearchBar');

var rotateImages = require('../rotateImages.js');

// window.onload = rotate;
var theAd = 0;
var adImages = new Array(
  "http://data.whicdn.com/images/45940825/large.png",
  "https://s-media-cache-ak0.pinimg.com/736x/d4/6f/dd/d46fdd7e3af22c9e618acfd04d83cf4a.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/93/09/f2/9309f2ced4bc22920e5af967bf87fb10.jpg",
  "http://static6.comicvine.com/uploads/scale_small/7/71975/2357182-240041_20120317132130_large.jpg",
  "https://res.cloudinary.com/teepublic/image/private/s--pj9od3Ry--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1446247302/production/designs/308525_1.jpg"
);

//referenced from
//http://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=7
function rotate() {
  theAd++;
  if (theAd == adImages.length) {
    theAd = 0;
  }
  var el = document.getElementById("sideBanner");
  if(!el) return; //patchwork
  el.src = adImages[theAd];

  $(el).fadeIn("slow");

  // var fadeOut = function(){ $(el).fadeOut("slow");};
  setTimeout(function(){  $(el).fadeOut("slow"); }, 5500);

  setTimeout(rotate, 6000);
}

module.exports = React.createClass({
  getInitialState: function () {
    return { jobs: [] };
  },

  componentDidMount: function () {
    this.jobListener = JobStore.addListener(this.getJobs);
    ClientActions.fetchJobs(this.props.search_str);
    rotate();
  },

  componentWillUnmount: function () {
    this.jobListener.remove();
  },

  getJobs: function () {
    this.setState({ jobs: JobStore.all() });
  },

  render: function () {
    return (

      <div className="job-index">
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
        <tbody>
          <tr>
            <td>
              <ul>
                {
                  this.state.jobs.map(function (job) {
                    return (<JobIndexItem key={job.id} job={job} />);
                  })
                }
              </ul>
            </td>
            <td className="auxCol group">
              <img id="sideBanner" src={adImages[0]}/>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    );
  }
});
