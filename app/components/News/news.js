import React, { Component } from 'react';
import {Link} from 'react-router';
import Select from './Select';


class News extends Component {
      render() {
        return (

        		<div className="body">
        		{/*heading image*/}
                <div className="row">
                    <div className="col-sm-12 col-xs-12 news-heading">
                    	<div className="color"></div>
                        <img src="img/news.jpg" className="news-img responsive head-news" alt="news-image" />
                    </div>
               </div>
                    <Select default="financial-times"/>
                </div>

                );
            }
        }

export default News;
