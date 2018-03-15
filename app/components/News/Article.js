import React from 'react';
import {Link} from 'react-router';


let time = new Date().toLocaleString();

const Article = (props) => {
    const { details } = props;
    return (
            <div className="row mainnews">
                <div className="container-fluid news">
                    <div className="row">
                    {/*container for whole news */}
                    <div className="col-sm-offset-2 col-sm-8 col-xs-9 container">
                        {/*news division */}
                            <div className="col-sm-9 col-xs-12 content-first">
                                <div className="row">
                                    <div className="col-sm-4 col-xs-9">
                                        <img className="img-responsive image" src={details.urlToImage} alt="NewsImage" />
                                    </div>
                                    <div className="col-sm-8 col-xs-12">
                                        <p className="read">
                                            <a href={details.url} target="_blank">
                                            {details.title}
                                            </a>
                                        </p>
                                        <p className="para">{details.description}</p>
                                        <div className="row date">
                                            <div className="col-sm-12 col-xs-12">
                                                <kbd className="clock">
                                                  {time}
                                                </kbd>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Article;
