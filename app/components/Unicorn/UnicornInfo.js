import React, { Component } from 'react';

const UnicornInfo = ({ unicorn }) => (
  <div className="be-large-post">
    <div className="info-block">
      <div className="be-large-post-align">
        <span><i className="fa fa-heart-o" aria-hidden="true"></i> {unicorn.counters.likes}</span>
        <span><i className="fa fa-eye"></i> {unicorn.counters.views}</span>
        <span><i className="fa fa-comment-o"></i> {unicorn.counters.comments}</span>
      </div>
    </div>
    <div className="blog-content popup-gallery be-large-post-align">
      <h5 className="be-post-title to">{unicorn.name}</h5>
      <span className="just_part">
        <span><i className="fa fa-line-chart"></i> +{unicorn.popularity}</span>
        <span><i className="fa fa-cubes"></i> Gen-{unicorn.generation}</span>
        <span><i className="fa fa-clock-o"></i> May 27, 2015</span>
        <span><i className="fa fa-transgender"></i> {unicorn.reproduction.type}</span>
        <span><i className="fa fa-globe"></i> {unicorn.country}</span>
      </span>
      <div className="clear"></div>
      <img src="img/unicorn.png" alt="" />
    </div>
    <div className="be-large-post-align">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="be-bottom">
            <h4 className="be-bottom-title">Stats</h4>
            <div className="tags_block clearfix">
              <ul>
                {Object.keys(unicorn.stats).map((stat) => (
                  <li key={stat}><a href="#" className={"be-post-tag " + stat}><span>{stat.substring(0, 3)}</span><span>{unicorn.stats[stat]}</span></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="be-bottom">
            <h4 className="be-bottom-title">Tags</h4>
            <div className="tags_block clearfix">
              <ul>
                {unicorn.tags.map((tag) => (
                  <li key={tag}><a href="#" className="be-post-tag">{tag}</a> </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="be-bottom right">
            <h4 className="be-bottom-title">Share</h4>
            <ul className="soc_buttons light">
              <li><a href=""><i className="fa fa-facebook"></i></a></li>
              <li><a href=""><i className="fa fa-twitter"></i></a></li>
              <li><a href=""><i className="fa fa-google-plus"></i></a></li>
              <li><a href=""><i className="fa fa-pinterest-p"></i></a></li>
              <li><a href=""><i className="fa fa-instagram"></i></a></li>
              <li><a href=""><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <img src="img/gen.png" />
  </div>
)


export default UnicornInfo;
