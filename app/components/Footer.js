import React from 'react';
import {Link} from 'react-router';
import { signup } from '../actions/auth';
import {  googleLogin} from '../actions/oauth';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.dispatch(signup(this.state.name, this.state.email, this.state.password));
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  handleTwitter() {
    this.props.dispatch(twitterLogin())
  }

  handleGoogle() {
    this.props.dispatch(googleLogin())
  }

  handleVk() {
    this.props.dispatch(vkLogin())
  }

  handleGithub() {
    this.props.dispatch(githubLogin())
  }

  render() {
    const active = { borderBottomColor: '#3f51b5' };
    return (
    	<footer>
    			<div className="row foo">
    				<div className="container-fluid row">
    					<div className="col-sm-offset-2 col-sm-3 col-xs-offset-3 col-xs-12 foo-logo">
    						<img src="img/logo.png" width="80"/>
                  			<h3>e-Learning</h3>
                  			<p>“Dream big. Start small. But most of all, start.”</p>
                  			<div className="btn-group">
							  <button type="button" className="btn btn-primary">LinkedIn</button>
							    <button type="button" onClick={this.handleGoogle.bind(this)} className="btn btn-google">Google+</button>
							  <button type="button" className="btn btn-primary">Facebook</button>
							</div>
    					</div>
    					<div className="col-sm-2 col-xs-4 foo-list">
    						<ul>
    							<li>Articals</li>
    							<li>Blogs</li>
                  <li><Link to="/news" activeStyle={active}>News</Link></li>
                  <li><Link to="/video" activeStyle={active}>Video</Link></li>
                </ul>
    					</div>
    					<div className="col-sm-2 col-xs-4 foo-contact">
            <ul>
              <li><Link to="/contact" activeStyle={active}>Contact Us</Link></li>
            </ul>
    					</div>
    					<div className="col-sm-2 col-xs-4 foo-subscribe">
    						<p>Subscribe Our newsletter</p>
    					</div>
    				</div>
    			</div>
     	 </footer>


    );
  }
}

export default Footer;
