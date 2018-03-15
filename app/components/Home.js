import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {Link} from 'react-router';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <Messages messages={this.props.messages}/>
        {/* slider */}
        <div className="row slider">
              <div id="myCarousel" className="carousel slide hidden-xs" data-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* Wrapper for slides */}
                <div className=" carousel-inner ">
                  <div className="item active">
                    <img src="/img/slide6.jpg" alt="banner1" />
                  </div>

                  <div className="item">
                    <img src="/img/slide5.jpg" alt="banner2" />
                  </div>

                  <div className="item">
                    <img src="/img/slide7.jpg" alt="banner3" />
                  </div>
                </div>

                {/*Search box*/}
                <div id="custom-search-input" className="carousel-caption search">
                  <div className="input-group">
                    <input type="text" className="search-query form-control" placeholder="Search" />
                      <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">
                          <span className=" glyphicon glyphicon-search"></span>
                        </button>
                      </span>
                  </div>
                </div>

                {/* Left and right controls */}
                <Link to="#myCarousel" className="left carousel-control" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </Link>
                <Link to="#myCarousel" className="right carousel-control" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </Link>
              </div>
              {/* registration and login */}

            </div>

            {/* below slider */}
            <div className="container-fluid top">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-5 top-row">
                        <h2><sup>『</sup><strong>e-Learning</strong><sub>』</sub></h2>
                        <h2>An online platform to learn Something</h2>
                        <p>e-learning is a web service where you can learn something online.<br/>
                        We offer you PDF, Video, Online Lessons to get you started.</p>
                   </div>
                   <div className="col-sm-3"></div>
                   </div>
             <div className="row info">
                <div className="col-sm-offset-2 col-sm-3 climate-image1">
                 <img className="img-responsive" src="/img/climate.jpg" />
                </div>
                <div className="col-sm-offset-1 col-sm-3 climate-image">
              <strong>Climate Change</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
                <div className="row info">
                        <div className="col-sm-offset-2 col-sm-3 climate-image">
                        <strong>Biology</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-sm-offset-1 col-sm-3 climate-image1">
                           <img class="img-responsive" src="/img/biology.jpg" />
                        </div>
                </div>
                <div className="row info">
                    <div className="col-sm-offset-2 col-sm-3 climate-image1">
                           <img className="img-responsive" src="/img/physics.jpg" />
                        </div>
                        <div className="col-sm-offset-1 col-sm-3 climate-image">
                        <strong>Physics</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid middle-below">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-5 middle-row">
                        <h2><strong>Focus On Learning</strong></h2>
                        <p id="firstPara">We care greatly for the quality of our lessons at e-Learning. We are committed to the following mission and make two promises to people in order to achieve it.</p>
                        <p id="secondPara"><strong>Allow anyone to learn on their own, even beginners</strong></p>
                   </div>
                </div>
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
