import React, { Component } from 'react';

import IconsMain from './icons-main';
import ItemPreview from './item-preview';
import Tags from './tags';

class ItemFull extends Component {
  render() {
    return (
      <div id="content-block">
    		<div className="container custom-container be-detail-container">
    			<div className="row">
    				<div className="col-md-9 col-md-push-3">
    					<div className="row"><div id="chartContainer"></div></div>
    					<div className="be-large-post">

    						<IconsMain />

    						<div className="blog-content popup-gallery be-large-post-align">
    							<h5 className="be-post-title to">
    								Mr. Incredible Unicorn
    							</h5>
    							<span className="just_part">
    								<span><i className="fa fa-line-chart"></i> +23.4453</span>
    								<span><i className="fa fa-cubes"></i> Gen-3</span>
    								<span><i className="fa fa-clock-o"></i> May 27, 2015</span>
    								<span><i className="fa fa-transgender"></i> Swift</span>
    								<span><i className="fa fa-globe"></i> USA</span>
    							</span>
    							<div className="clear"></div>
    							<img src="img/unicorn.png" alt="" />
    						</div>
    						<div className="be-large-post-align">
    							<div className="row">
    								<div className="col-xs-12 col-sm-6">
    									<div className="be-bottom">
    										<h4 className="be-bottom-title">Tags</h4>

                        <Tags />

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

    					<div className="be-comment-block">
    						<h1 className="comments-title">Comments (3)</h1>
    						<p className="about-comment-block">
    							Price for comment is <a href="#" className="be-signup-link">0.00000054312 <i className="fa fa-btc"></i></a>
    						</p>
    						<form className="form-block">
    								<div className="row">
    									<div className="col-xs-12">
    										<div className="form-group">
    											<textarea className="form-input" required="" placeholder="Your text"></textarea>
    										</div>
    									</div>
    									<a className="btn color-1 size-2 hover-1 pull-right">submit</a>
    								</div>
    							</form>

    						<div className="be-comment">
    								<div className="be-img-comment">
    									<a href="blog-detail-2.html">
    										<img src="img/c1.png" alt="" className="be-ava-comment" />
    									</a>
    								</div>
    								<div className="be-comment-content">

    										<span className="be-comment-name">
    											<a href="blog-detail-2.html">Ravi Sah</a>
    											</span>
    										<span className="be-comment-time">
    											<i className="fa fa-clock-o"></i>
    											May 27, 2015 at 3:14am
    										</span>

    									<p className="be-comment-text">
    										Pellentesque gravida tristique ultrices.
    										Sed blandit varius mauris, vel volutpat urna hendrerit id.
    										Curabitur rutrum dolor gravida turpis tristique efficitur.
    									</p>
    								</div>

    							</div>
    						<div className="be-comment">
    							<div className="be-img-comment">
    									<a href="blog-detail-2.html">
    										<img src="img/c2.png" alt="" className="be-ava-comment" />
    									</a>
    								</div>
    								<div className="be-comment-content">

    										<span className="be-comment-name">
    											<a href="blog-detail-2.html">Phoenix, the Creative Studio</a>
    									</span>
    										<span className="be-comment-time">
    											<i className="fa fa-clock-o"></i>
    											May 27, 2015 at 3:14am
    										</span>

    									<p className="be-comment-text">
    										Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu mattis, at maximus eros commodo. Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant. Proin ut ornare lectus, vel eleifend est. Fusce hendrerit dui in turpis tristique blandit.
    									</p>
    									</div>

    							</div>
    						<div className="be-comment">
    							<div className="be-img-comment">
    									<a href="blog-detail-2.html">
    										<img src="img/c3.png" alt="" className="be-ava-comment" />
    									</a>
    								</div>
    								<div className="be-comment-content">
    										<span className="be-comment-name">
    											<a href="blog-detail-2.html">Dorian Camp</a>
    									</span>
    										<span className="be-comment-time">
    											<i className="fa fa-clock-o"></i>
    											May 27, 2015 at 3:14am
    										</span>
    									<p className="be-comment-text">
    										Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant
    									</p>
    								</div>
    						</div>

    					</div>
    				</div>
    				<div className="col-md-3 col-md-pull-9 left-feild">
    					<a href="#" className="be-button-vidget like-btn blue-style"><i className="fa fa-heart-o"></i>LIKE ME</a>
    					<a href="#" className="be-button-vidget like-btn blue-style"><i className="fa fa-bullhorn"></i> <small>promote for</small> <span> 0.00000012 <i className="fa fa-btc"></i></span></a>
    					<a href="#" className="be-button-vidget like-btn blue-style"><i className="fa fa-tag"></i> <small>buy for</small> <span> 0.042 <i className="fa fa-btc"></i> <i className="fa fa-cog"></i></span></a>
    					<a href="#" className="be-button-vidget add-btn grey-style"><i className="fa fa fa-venus-mars"></i> <small>modify for</small> <span> 0.000027 <i className="fa fa-btc"></i> <i className="fa fa-cog"></i></span></a>

    					<div className="info-block style-2">
    						<h3 className="info-block-label"><i className="fa fa-child"></i> Owner</h3>
    					</div>
    					<div className="be-user-block">
    						<div className="be-user-detail">
    							<a className="be-ava-user" href="#">
    								<img src="img/ava.png" alt="" />
    							</a>
    							<p className="be-use-name">Alex Alexeev</p>
    							<span className="be-user-info">
    								Singapore, Singapore
    							</span>
    						</div>
    					</div>
    					<br /><br />

    					<h3 className="letf-menu-article text-center">Parents</h3>
    					<div  className="swiper-container" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
    						<div className="swiper-wrapper">
    							<div className="swiper-slide">
    								<ItemPreview />
    							</div>
    							<div className="swiper-slide">
    								<ItemPreview />
    							</div>
    						</div>
    						<div className="pagination">

    						</div>
    					</div>

    					<h3 className="letf-menu-article text-center">Children</h3>
    					<div  className="swiper-container" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
    						<div className="swiper-wrapper">
    							<div className="swiper-slide">
    								<ItemPreview />
    							</div>
    							<div className="swiper-slide">
    								<ItemPreview />
    							</div>
    							<div className="swiper-slide">
    								<ItemPreview />
    							</div>
    							<div className="swiper-slide">
    								<ItemPreview />
    							</div>
    						</div>
    						<div className="pagination">

    						</div>
    					</div>

    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default ItemFull;
