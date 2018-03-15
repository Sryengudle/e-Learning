import React, { Component } from 'react';
import {Link} from 'react-router';

class Videos extends Component {
	render() {
		return (


		<div className="bg-vid">
			{/*heading image*/}
		<div className="row">
			<div className="col-sm-12 col-lg-12 col-xs-12 video-heading">
				<div className="row">
        <section className="wave hidden-xs"></section>
          <div className="col-sm-4 col-xs-12 videoTagdiv">
            <video className='videoTag' autoPlay loop muted>
              <source src="/img/vid.mp4" type='video/mp4' />
            </video>
          </div>
					<div className="col-sm-3 col-xs-12 hidden-xs textonhead">
						<p id="firstline"><strong>Learning gives you the power to change the world.</strong></p>
						<p id="secondline"><strong>Now its time to VIDEO traning.</strong><span id="cursor">|</span></p>
					</div>
				</div>
		    </div>
		</div>
			<div className="container vid">
				<div className="row">
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
                <div className="box box1">
                  <h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Physics</Link></span></h4>
                </div>
	            </div>
	            		<div className="caption">
				          <p>Lorem ipsum...</p>
				        </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
                <div className="box box2">
                    <h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Chemistry</Link></span></h4>
                </div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
                <div className="box box3">
                    <h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Earth Science</Link></span></h4>
                </div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
          <div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box4">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Geology</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box5">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Climate Change</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box6">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Biology</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box7">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Zoology</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box8">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Box 1</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box9">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Box 1</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box10">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Box 1</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box11">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Box 1</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
					<div className="col-lg-3 col-sm-3 col-xs-6">
						<div className="embed-responsive embed-responsive-4by3 thumbnail">
	                		<div className="box box12">
	                			<h4><span><Link to="/" style={{ textDecoration: 'none', color:'inherit' }}>Box 1</Link></span></h4>
	                		</div>
	            		</div>
	            		<div className="caption">
					        <p>Lorem ipsum...</p>
					    </div>
					</div>
				</div>
			</div>
		</div>


			);
	}
}
export default Videos;
