import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const active = { borderBottomColor: '#3f51b5' };
    const rightNav = this.props.token ? (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" data-toggle="dropdown" className="navbar-avatar dropdown-toggle">
            <img src={this.props.user.picture || this.props.user.gravatar}/>
            {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
            <i className="caret"></i>
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/account">My Account</Link></li>
            <li className="divider"></li>
            <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
          </ul>
        </li>
      </ul>
    ) : (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/login" activeStyle={active}>Log in</Link></li>
        <li><Link to="/signup" activeStyle={active}>Sign up</Link></li>
      </ul>
    );
    return (
      <nav className="navbar navbar-default navbar-static-top navbar-fixed-top">
        <div className="container">

          <div className="navbar-header">
            <div className="navbar-header col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <div className="logo">
                  {/*Website logo*/}
                  <h3>eLearning</h3>
                  <img src="/img/logo.png" className="img responsive" alt="logo" />
                </div>
              </div>

          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeStyle={active}>Home</IndexLink></li>
              <li><Link to="/contact" activeStyle={active}>Subject</Link></li>
              <li><Link to="/news" activeStyle={active}>News</Link></li>
              <li><Link to="/contact" activeStyle={active}>People</Link></li>
              <li><Link to="/video" activeStyle={active}>Video</Link></li>
              <li><Link to="/contact" activeStyle={active}>Contact</Link></li>
              <li><Link to="/about" activeStyle={active}>About</Link></li>
            </ul>
            {rightNav}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
