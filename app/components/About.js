import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class About extends React.Component {
  render() {
    return (
        <div>
          <Messages messages={this.props.messages}/>
            {/*heading image*/}
    		      <div className="row">
                <div className="col-sm-12 col-xs-12 aboutus-heading">
            		<img src="/img/slide2.jpg" className="img responsive head-img" alt="aboutus-image" />
              	</div>
              </div>

              {/*first content*/}
              <div className="row">
                <div class="first-content col-sm-offset-1 col-sm-5 col-xs-12">
                   <p id="firstcontent"><strong><sub id="quote">“</sub>Learning gives you<sub id="quote">”</sub><br/> the power to change</strong></p>
                </div>
              <div class="second-content col-sm-4 col-xs-12">
                    <p id="secondcontent">Learning gives you the power to change the world.<br/>
                    It also gives you the power to change your life.<br/><br />

                    Our belief is based on our experiences of changing our own lives through Learning.<br/>
                    These experiences led to our mission "Bringing creativity to everyone, everywhere".<br/><br />

                    We'll make it easier to pass first hurdle of learning to code, and create the world's most helpful, fun learning environment. To encourage and motivate people to learn programming, we'll provide a platform to change how the world learns subjects.<br/><br />

                    Why don't you learn programming with us?</p>
                </div>
            </div>

            {/*our company*/}
            <div className="row">
                <div className="col-sm-offset-3 col-sm-6 col-xs-12 our-company">
                    <img src="/img/our_company.png" className="img responsive" alt="our company" />
                </div>
            </div>
            <div className="row">
                <div class="ourCompany-content col-sm-offset-3 col-sm-6 col-xs-12">
                    <p id="ourCompanyHeading">Our Company</p>

                    <p id="ourCompanyContent">We are eLearning, Our purpose is to provide best learning experience and quality of learning  materials to our users so our users can reach their full potential. We provide learning solutions in many different verticals including but not limited to static content. One of our successful solutions is eLearning solution. We provide end-to-end eLearning materials and services including LMS, Authoring tool, off-the-shelf courses, course creation services and managed learning services. eLearning LMS has been consistently ranked among top 3 cloud LMS in the world.</p>
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
export default connect(mapStateToProps)(About);
