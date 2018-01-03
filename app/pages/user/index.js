import React, { Component } from 'react';

class UserPage extends Component {
  render() {
    return (
      <div id="content-block">
    		<div className="container be-detail-container">
    			<div className="row">
    				<div className="col-xs-12 col-md-4 left-feild">
    					<div className="be-user-block style-3">
    						<div className="be-user-detail">
    							<span className="be-ava-user style-2">
    								<img src="img/ava_10.jpg" alt="" />
    								<div>
    								<a className="settings" href="#"><i className="fa fa-times"></i></a>
    								<a className="settings" href="#"><i className="fa fa-upload"></i></a>
    							</div>
    							</span>
    							<p className="be-use-name">Alex Alexeev <a className="settings" href="#"><i className="fa fa-cog"></i></a></p>
    							<div className="form-group">
    								<input className="form-input" type="text" placeholder="Alex Alexeev" />
    							</div>
    							<a className="btn color-1 size-3 hover-1">save</a>
    							<a className="btn color-4 size-3 hover-7">cancel</a>
    							<div className="clear"></div>

    							<div className="be-user-info">
    								Barnsley, United Kingdom
    								<a className="settings" href="#"><i className="fa fa-times"></i></a>
    								<a className="settings" href="#"><i className="fa fa-map-marker"></i></a>
    							</div>
    							<div className="be-user-social">
    								<a className="social-btn color-1" href="#"><i className="fa fa-facebook"></i></a>
    								<a className="social-btn color-2" href="#"><i className="fa fa-twitter"></i></a>
    								<a className="social-btn color-3" href="#"><i className="fa fa-google-plus"></i></a>
    								<a className="social-btn color-4" href="#"><i className="fa fa-pinterest-p"></i></a>
    								<a className="social-btn color-5" href="#"><i className="fa fa-instagram"></i></a>
    								<a className="social-btn color-6" href="#"><i className="fa fa-linkedin"></i></a>
    								<a className="settings" href="#"><i className="fa fa-cog"></i></a>
    							</div>

    							<div className="dit-user-social">
    								<div className="social-input form-group focus-2">
    									<div className="s_icon">
    										<div className="social-bars"><i className="fa fa-bars"></i></div>
    										<a className="social-btn color-1" href="#"><i className="fa fa-facebook"></i></a>
    									</div>
    									<div className="s_input">
    										<input className="form-input" type="text" value="http:// facebook.com/taylor" />
    									</div>
    								</div>
    								<div className="social-input form-group focus-2">
    									<div className="s_icon">
    										<div className="social-bars"><i className="fa fa-bars"></i></div>
    										<a className="social-btn color-2" href="#"><i className="fa fa-twitter"></i></a>
    									</div>
    									<div className="s_input">
    										<input className="form-input" type="text" value="http:// twitter.com/taylor" />
    									</div>
    								</div>
    								<div className="social-input form-group focus-2">
    									<div className="s_icon">
    										<div className="social-bars"><i className="fa fa-bars"></i></div>
    										<a className="social-btn color-3" href="#"><i className="fa fa-google-plus"></i></a>
    									</div>
    									<div className="s_input">
    										<input className="form-input" type="text" value="http:// googleplus.com/taylor" />
    									</div>
    								</div>
    								<div className="social-input form-group focus-2">
    									<div className="s_icon">
    										<div className="social-bars"><i className="fa fa-bars"></i></div>
    										<a className="social-btn color-4" href="#"><i className="fa fa-pinterest-p"></i></a>
    									</div>
    									<div className="s_input">
    										<input className="form-input" type="text" value="http:// pinterest.com/taylor" />
    									</div>
    								</div>
    								<div className="social-input form-group focus-2">
    									<div className="s_icon">
    										<div className="social-bars"><i className="fa fa-bars"></i></div>
    										<a className="social-btn color-5" href="#"><i className="fa fa-instagram"></i></a>
    									</div>
    									<div className="s_input">
    										<input className="form-input" type="text" value="http:// instagram.com/taylor" />
    									</div>
    								</div>
    								<a className="btn color-1 size-3 hover-1">save</a>
    								<a className="btn color-4 size-3 hover-7">cancel</a>
    								<div className="clear"></div>
    							</div>

    							<a className="be-user-site" href="http://www.unicorn.go"><i className="fa fa-link"></i> http://www.unicorn.go</a>
    							<a className="settings" href="#"><i className="fa fa-cog"></i></a>

    							<div className="form-group fg_icon">
    								<input className="form-input" type="text" placeholder="http://www.unicorn.go" />
    								<i className="form-group-icon fa fa-link"></i>
    							</div>
    							<a className="btn color-1 size-3 hover-1">save</a>
    							<a className="btn color-4 size-3 hover-7">cancel</a>
    							<div className="clear"></div>
    						</div>
    						<div className="be-user-statistic">
    							<div className="stat-row clearfix"><i className="stat-icon icon-views"></i> <small>my</small> Views<span className="stat-counter">218098&nbsp;&nbsp;&nbsp;&nbsp; <a className="settings" href="#"> <i className="fa fa-toggle-on"></i></a></span></div>
    							<div className="stat-row clearfix"><i className="stat-icon icon-like"></i> <small>my</small> Likes<span className="stat-counter">14335&nbsp;&nbsp;&nbsp;&nbsp; <a className="settings" href="#"> <i className="fa fa-toggle-on"></i></a></span></div>
    							<div className="stat-row clearfix"><i className="stat-icon icon-comment"></i> <small>my</small> Comments<span className="stat-counter">14335&nbsp;&nbsp;&nbsp;&nbsp; <a className="settings" href="#"> <i className="fa fa-toggle-on"></i></a></span></div>
    							<div className="stat-row clearfix"><i className="stat-icon fa fa-line-chart"></i> <small>my</small> Storage<span className="stat-counter">14335&nbsp;&nbsp;&nbsp;&nbsp; <a className="settings" href="#"> <i className="fa fa-toggle-on"></i></a></span></div>
    						</div>
    					</div>
    					<div className="be-desc-block">
    						<div className="be-desc-author">
    							<div className="be-desc-label">About Me <a className="settings" href="#"><i className="fa fa-cog"></i></a></div>
    							<div className="clearfix"></div>
    							<div className="be-desc-text">
    								Nam sit amet massa commodo, tristique metus at, consequat turpis. In vulputate justo at auctor mollis. Aliquam non sagittis tortor. Duis tristique suscipit risus, quis facilisis nisl congue vitae. Nunc varius pellentesque scelerisque. Etiam quis massa vitae lectus placerat ullamcorper pellentesque vel nisl.
    							</div>

    							<div className="form-group">
    								<textarea className="form-input" type="text">
    									Nam sit amet massa commodo, tristique metus at, consequat turpis. In vulputate justo at auctor mollis. Aliquam non sagittis tortor. Duis tristique suscipit risus, quis facilisis nisl congue vitae. Nunc varius pellentesque scelerisque. Etiam quis massa vitae lectus placerat ullamcorper pellentesque vel nisl.
    								</textarea>
    								<center>
    									<a className="btn color-1 size-3 hover-1">save</a>
    									<a className="btn color-4 size-3 hover-7">cancel</a>
    								</center>
    							</div>

    						</div>
    					</div>
    				</div>
    				<div className="col-xs-12 col-md-8">
                        <div className="tab-wrapper style-1">
                            <div className="tab-nav-wrapper">
                                <div  className="nav-tab  clearfix">
                                    <div className="nav-tab-item active">
                                        <span>all_Unicorns</span>
                                    </div>
                                    <div className="nav-tab-item ">
                                        <span>on_Modification</span>
                                    </div>
                                    <div className="nav-tab-item ">
                                        <span>for_Sale</span>
                                    </div>
    																<div className="nav-tab-item ">
                                        <span>for_Modification</span>
                                    </div>
    																<div className="nav-tab-item ">
                                        <span><i className="fa fa-heart-o" aria-hidden="true"></i> favorites</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tabs-content clearfix">
                                <div className="tab-info active">
    								<div className="row">
    									<div className="col-ml-12 col-xs-6 col-sm-4">
    										<div className="be-post">
    											<div className="info-block">
    												<span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
    												<span>fast <i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
    											</div>
    											<a href="#" className="be-img-block">
    											<img src="img/p1.jpg" alt="omg" />
    											</a>
    											<a href="#" className="be-post-title">Mr. Incredible Unicorn</a>
    											<span className="just_part">
    												<span><i className="fa fa-line-chart"></i> +23.4453</span>
    												<span><i className="fa fa-cubes"></i> Gen-1</span>
    											</span>
    											<span>
    												<a href="#" className="be-post-tag">Nice</a>,
    												<a href="#" className="be-post-tag">Gute</a>,
    												<a href="#" className="be-post-tag">Usual</a>,
    												<a href="#" className="be-post-tag">Just</a>,
    												<a href="#" className="be-post-tag">Angry</a>
    											</span>
    											<div className="info-block">
    												<span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
    												<span><i className="fa fa-eye"></i> 789</span>
    												<span><i className="fa fa-comment-o"></i> 20</span>
    											</div>
    										</div>
    									</div>
    									<div className="col-ml-12 col-xs-6 col-sm-4">
    										<div className="be-post">
    											<div className="info-block">
    												<span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
    												<span>extra <i className="fa fa-venus-mars"></i><i className="fa fa-clock-o"></i> 10min. </span>
    											</div>
    											<a href="#" className="be-img-block">
    											<img src="img/p1.jpg" alt="omg" />
    											</a>
    											<a href="#" className="be-post-title">Mr. Incredible Unicorn</a>
    											<span className="just_part">
    												<span><i className="fa fa-line-chart"></i> +23.4453</span>
    												<span><i className="fa fa-cubes"></i> Gen-1</span>
    											</span>
    											<span>
    												<a href="#" className="be-post-tag">Nice</a>,
    												<a href="#" className="be-post-tag">Gute</a>,
    												<a href="#" className="be-post-tag">Usual</a>,
    												<a href="#" className="be-post-tag">Just</a>,
    												<a href="#" className="be-post-tag">Angry</a>
    											</span>
    											<div className="info-block">
    												<span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
    												<span><i className="fa fa-eye"></i> 789</span>
    												<span><i className="fa fa-comment-o"></i> 20</span>
    											</div>
    										</div>
    									</div>
    									<div className="col-ml-12 col-xs-6 col-sm-4">
    										<div className="be-post">
    											<div className="info-block">
    												<span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
    												<span>slow <i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
    											</div>
    											<a href="#" className="be-img-block">
    											<img src="img/p1.jpg" alt="omg" />
    											</a>
    											<a href="#" className="be-post-title">Mr. Incredible Unicorn</a>
    											<span className="just_part">
    												<span><i className="fa fa-line-chart"></i> +23.4453</span>
    												<span><i className="fa fa-cubes"></i> Gen-1</span>
    											</span>
    											<span>
    												<a href="#" className="be-post-tag">Nice</a>,
    												<a href="#" className="be-post-tag">Gute</a>,
    												<a href="#" className="be-post-tag">Usual</a>,
    												<a href="#" className="be-post-tag">Just</a>,
    												<a href="#" className="be-post-tag">Angry</a>
    											</span>
    											<div className="info-block">
    												<span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
    												<span><i className="fa fa-eye"></i> 789</span>
    												<span><i className="fa fa-comment-o"></i> 20</span>
    											</div>
    										</div>
    									</div>
    								</div>
                                </div>
                                <div className="tab-info">
    								<div className="row">
    									...
    								</div>
                                </div>
                                <div className="tab-info">
    								<div className="row">
    									...
    								</div>
                                </div>
                                <div className="tab-info">
                                	<div className="row">
    									...
    								</div>
                                </div>
                            </div>
                        </div>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default UserPage;
