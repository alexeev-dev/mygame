import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid cd-main-content custom-container">
          <div className="row">
            <div className="col-md-2 left-feild">
              <form action="./" className="input-search">
                <input type="text" required="" placeholder="Enter Unicorn Name" />
                  <i className="fa fa-search"></i>
                  <input type="submit" value="" />
              </form>
            </div>
            <div className="col-md-10 ">
              <div className="for-be-dropdowns">
                <div className="be-drop-down">
                  <i className="icon-creative"></i>
                  <span className="be-dropdown-content">All Gens
                  </span>
                  <ul className="drop-down-list">
                    <li className="filter" data-filter=".category-4"><a>All Gens</a></li>
                    <li className="filter" data-filter=".category-5"><a>Gen - 0</a></li>
                    <li className="filter" data-filter=".category-1"><a>Gen - 1</a></li>
                  </ul>
                </div>
                <div className="be-drop-down">
                  <i className="icon-worldwide"></i>
                  <span className="be-dropdown-content">Worldwide
                  </span>
                  <ul className="drop-down-list">
                    <li className="filter" data-filter=".category-2"><a>WorldWide</a></li>
                    <li className="filter" data-filter=".category-3"><a>United States</a></li>
                    <li className="filter" data-filter=".category-4"><a>Germany</a></li>
                    <li className="filter" data-filter=".category-5"><a>United Kingdom</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s_keywords">
          <div className="container-fluid custom-container">
            <a className="btn color-1 size-3 hover-10"><i className="fa fa-trash-o"></i>clear all filters</a>
            <a className="btn color-6 size-3 hover-10">gen-0 <i className="fa keyword fa-times"></i></a>
            <a className="btn color-6 size-3 hover-10">nice <i className="fa keyword fa-times"></i></a>
            <a className="btn color-6 size-3 hover-10">swift <i className="fa keyword fa-times"></i></a>
            <a className="btn color-6 size-3 hover-10">#ffffff <i className="fa keyword fa-times"></i></a>
          </div>
        </div>
        <div className="container-fluid custom-container">
          <div className="row">

            <div className="col-md-2 left-feild">
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Coldown
                </h3>
                <div className="creative_filds_block">
                  <div className="ul">
                    <a  data-filter=".category-1" className="filter">Fast		</a>
                    <a data-filter=".category-2" className="filter">Swift			</a>
                    <a data-filter=".category-3" className="filter">Snappy	</a>
                    <a data-filter=".category-4" className="filter">Brisk		</a>
                    <a data-filter=".category-5" className="filter">Plodding		</a>
                  </div>
                </div>
              </div>
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Popular Tags
                </h3>
                <div className="tags_block clearfix">
                  <ul>
                    <li><a data-filter=".category-6" className="filter">nice</a></li>
                    <li><a data-filter=".category-1" className="filter">gute</a></li>
                    <li><a data-filter=".category-2" className="filter">angry</a></li>
                    <li><a data-filter=".category-3" className="filter">fast</a></li>
                    <li><a data-filter=".category-4" className="filter">lovely</a></li>
                    <li><a data-filter=".category-5" className="filter">shine</a></li>
                    <li><a data-filter=".category-6" className="filter">fine</a></li>
                    <li><a data-filter=".category-1" className="filter">usual</a></li>
                    <li><a data-filter=".category-2" className="filter">shine</a></li>
                    <li><a data-filter=".category-3" className="filter">global</a></li>
                  </ul>
                </div>
              </div>
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  More Filtres
                </h3>
                <div className="filter-block">
                  <ul>
                    <li><a><i className="fa fa-paint-brush"></i>Color</a>
                      <div className="be-popup be-color-picker">
                      <h3 className="letf-menu-article">
                          Choose color
                        </h3>
                        <div className="for-colors">
                          <ul className="colors  cfix">
                              <li data-filter=".category-1" className="color filter color-0-0"></li>
                              <li data-filter=".category-2" className="color filter color-0-1"></li>
                              <li data-filter=".category-3" className="color filter color-0-2"></li>
                              <li data-filter=".category-4" className="color filter color-0-3"></li>
                              <li data-filter=".category-5" className="color filter color-0-4"></li>
                              <li data-filter=".category-1" className="color filter color-0-5"></li>
                              <li data-filter=".category-2" className="color filter color-0-6"></li>
                              <li data-filter=".category-3" className="color filter color-0-7"></li>
                              <li data-filter=".category-4" className="color filter color-0-8"></li>
                              <li data-filter=".category-5" className="color filter color-0-9"></li>
                              <li data-filter=".category-1" className="color filter color-0-10"></li>
                              <li data-filter=".category-5" className="color filter color-0-11"></li>
                              <li data-filter=".category-1" className="color filter color-1-0"></li>
                              <li data-filter=".category-2" className="color filter color-1-1"></li>
                              <li data-filter=".category-1" className="color filter color-1-2"></li>
                              <li data-filter=".category-1" className="color filter color-1-3"></li>
                              <li data-filter=".category-1" className="color filter color-1-4"></li>
                              <li data-filter=".category-4" className="color filter color-1-5"></li>
                              <li data-filter=".category-1" className="color filter color-1-6"></li>
                              <li data-filter=".category-1" className="color filter color-1-7"></li>
                              <li data-filter=".category-6" className="color filter color-1-8"></li>
                              <li data-filter=".category-1" className="color filter color-1-9"></li>
                              <li data-filter=".category-1" className="color filter color-1-10"></li>
                              <li data-filter=".category-1" className="color filter color-1-11"></li>
                              <li data-filter=".category-1" className="color filter color-2-0"></li>
                              <li data-filter=".category-1" className="color filter color-2-1"></li>
                              <li data-filter=".category-1" className="color filter color-2-2"></li>
                              <li data-filter=".category-1" className="color filter color-2-3"></li>
                              <li data-filter=".category-1" className="color filter color-2-4"></li>
                              <li data-filter=".category-1" className="color filter color-2-5"></li>
                              <li data-filter=".category-1" className="color filter color-2-6"></li>
                              <li data-filter=".category-1" className="color filter color-2-7"></li>
                              <li data-filter=".category-1" className="color filter color-2-8"></li>
                              <li data-filter=".category-1" className="color filter color-2-9"></li>
                              <li data-filter=".category-1" className="color filter color-2-10"></li>
                              <li data-filter=".category-1" className="color filter color-2-11"></li>
                              <li data-filter=".category-1" className="color filter color-3-0"></li>
                              <li data-filter=".category-1" className="color filter color-3-1"></li>
                              <li data-filter=".category-1" className="color filter color-3-2"></li>
                              <li data-filter=".category-1" className="color filter color-3-3"></li>
                              <li data-filter=".category-1" className="color filter color-3-4"></li>
                              <li data-filter=".category-1" className="color filter color-3-5"></li>
                              <li data-filter=".category-1" className="color filter color-3-6"></li>
                              <li data-filter=".category-1" className="color filter color-3-7"></li>
                              <li data-filter=".category-1" className="color filter color-3-8"></li>
                              <li data-filter=".category-1" className="color filter color-3-9"></li>
                              <li data-filter=".category-1" className="color filter color-3-10"></li>
                              <li data-filter=".category-1" className="color filter color-3-11"></li>
                              <li data-filter=".category-1" className="color filter color-4-0"></li>
                              <li data-filter=".category-1" className="color filter color-4-1"></li>
                              <li data-filter=".category-1" className="color filter color-4-2"></li>
                              <li data-filter=".category-1" className="color filter color-4-3"></li>
                              <li data-filter=".category-1" className="color filter color-4-4"></li>
                              <li data-filter=".category-1" className="color filter color-4-5"></li>
                              <li data-filter=".category-1" className="color filter color-4-6"></li>
                              <li data-filter=".category-1" className="color filter color-4-7"></li>
                              <li data-filter=".category-1" className="color filter color-4-8"></li>
                              <li data-filter=".category-1" className="color filter color-4-9"></li>
                              <li data-filter=".category-1" className="color filter color-4-10"></li>
                              <li data-filter=".category-1" className="color filter color-4-11"></li>
                              <li data-filter=".category-1" className="color filter color-5-0"></li>
                              <li data-filter=".category-1" className="color filter color-5-1"></li>
                              <li data-filter=".category-1" className="color filter color-5-2"></li>
                              <li data-filter=".category-1" className="color filter color-5-3"></li>
                              <li data-filter=".category-1" className="color filter color-5-4"></li>
                              <li data-filter=".category-1" className="color filter color-5-5"></li>
                              <li data-filter=".category-1" className="color filter color-5-6"></li>
                              <li data-filter=".category-1" className="color filter color-5-7"></li>
                              <li data-filter=".category-1" className="color filter color-5-8"></li>
                              <li data-filter=".category-1" className="color filter color-5-9"></li>
                              <li data-filter=".category-1" className="color filter color-5-10"></li>
                              <li data-filter=".category-1" className="color filter color-5-11"></li>
                              <li data-filter=".category-1" className="color filter color-6-0"></li>
                              <li data-filter=".category-1" className="color filter color-6-1"></li>
                              <li data-filter=".category-6" className="color filter color-6-2"></li>
                              <li data-filter=".category-1" className="color filter color-6-3"></li>
                              <li data-filter=".category-1" className="color filter color-6-4"></li>
                              <li data-filter=".category-1" className="color filter color-6-5"></li>
                              <li data-filter=".category-1" className="color filter color-6-6"></li>
                              <li data-filter=".category-1" className="color filter color-6-7"></li>
                              <li data-filter=".category-1" className="color filter color-6-8"></li>
                              <li data-filter=".category-1" className="color filter color-6-9"></li>
                              <li data-filter=".category-1" className="color filter color-6-10"></li>
                              <li data-filter=".category-1" className="color filter color-6-11"></li>
                              <li data-filter=".category-1" className="color filter color-7-0"></li>
                              <li data-filter=".category-1" className="color filter color-7-1"></li>
                              <li data-filter=".category-1" className="color filter color-7-2"></li>
                              <li data-filter=".category-1" className="color filter color-7-3"></li>
                              <li data-filter=".category-1" className="color filter color-7-4"></li>
                              <li data-filter=".category-1" className="color filter color-7-5"></li>
                              <li data-filter=".category-1" className="color filter color-7-6"></li>
                              <li data-filter=".category-1" className="color filter color-7-7"></li>
                              <li data-filter=".category-1" className="color filter color-7-8"></li>
                              <li data-filter=".category-1" className="color filter color-7-9"></li>
                              <li data-filter=".category-1" className="color filter color-7-10"></li>
                              <li data-filter=".category-1" className="color filter color-7-11"></li>
                              <li data-filter=".category-1" className="color filter color-8-0"></li>
                              <li data-filter=".category-1" className="color filter color-8-1"></li>
                              <li data-filter=".category-1" className="color filter color-8-2"></li>
                              <li data-filter=".category-1" className="color filter color-8-3"></li>
                              <li data-filter=".category-1" className="color filter color-8-4"></li>
                              <li data-filter=".category-1" className="color filter color-8-5"></li>
                              <li data-filter=".category-1" className="color filter color-8-6"></li>
                              <li data-filter=".category-6" className="color filter color-8-7"></li>
                              <li data-filter=".category-1" className="color filter color-8-8"></li>
                              <li data-filter=".category-1" className="color filter color-8-9"></li>
                              <li data-filter=".category-1" className="color filter color-8-10"></li>
                              <li data-filter=".category-1" className="color filter color-8-11"></li>
                              <li data-filter=".category-1" className="color filter color-9-0"></li>
                              <li data-filter=".category-1" className="color filter color-9-1"></li>
                              <li data-filter=".category-1" className="color filter color-9-2"></li>
                              <li data-filter=".category-1" className="color filter color-9-3"></li>
                              <li data-filter=".category-6" className="color filter color-9-4"></li>
                              <li data-filter=".category-1" className="color filter color-9-5"></li>
                              <li data-filter=".category-1" className="color filter color-9-6"></li>
                              <li data-filter=".category-1" className="color filter color-9-7"></li>
                              <li data-filter=".category-1" className="color filter color-9-8"></li>
                              <li data-filter=".category-1" className="color filter color-9-9"></li>
                              <li data-filter=".category-1" className="color filter color-9-10"></li>
                              <li data-filter=".category-1" className="color filter color-9-11"></li>
                          </ul>
                        </div>
                        <i className="fa fa-times"></i>

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-10">
              <div id="container-mix"  className="row _post-container_">
                <div className="category-1 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
                    <span className="just_part">
                      <span><i className="fa fa-cubes"></i> Gen-1</span>
                      <span><i className="fa fa-line-chart"></i> +23.4453</span>
                    </span>
                    <span>
                      <a href="#" className="be-post-tag">Nice</a>,
                      <a href="#" className="be-post-tag">Gute</a>,
                      <a href="#" className="be-post-tag">Usual</a>,
                      <a href="#" className="be-post-tag">Just</a>,
                      <a href="#" className="be-post-tag">Angry</a>
                    </span>
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-2 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>fast <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-3 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>swift <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-4 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>slow <i className="fa fa-info-circle"></i><i className="fa fa-clock-o"></i> > 24h.</span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-5 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-clock-o"></i> ... </span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-6 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-5 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-3 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-2 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-4 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-6 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-2 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-1 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-3 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
                <div className="category-1 mix custom-column-5">
                  <div className="be-post">
                    <div className="info-block">
                      <span><i className="fa fa-tag"></i> 0.042 <i className="fa fa-btc"></i></span>
                      <span>extra <i className="fa fa-info-circle"></i><i className="fa fa-venus-mars"></i> 0.00093 <i className="fa fa-btc"></i></span>
                    </div>
                    <a href="#" className="be-img-block">
                    <img src="img/p1.jpg" alt="omg" />
                    </a>
                    <a href="page1.html" className="be-post-title">Mr. Incredible Unicorn</a>
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
                    <div className="author-post">
                      <img src="img/a1.png" alt="" className="ava-author" />
                      <span>by <a href="page1.html">Alex Alexeev <span><i className="fa fa-globe"></i> USA</span></a></span>
                    </div>
                    <div className="info-block">
                      <span><i className="fa fa-heart-o" aria-hidden="true"></i> 360</span>
                      <span><i className="fa fa-eye"></i> 789</span>
                      <span><i className="fa fa-comment-o"></i> 20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
			</section>
    );
  }
}

export default Filter;
