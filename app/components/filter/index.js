import React, { Component } from 'react';


import ItemPreview from '../item/item-preview';
import SidebarMenu from '../pages/sidebar_menu';

import Search from './search';
import Dropdown from './dropdown';
import Tags from './tags';
import Color from './color';

class Filter extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid cd-main-content custom-container">
          <div className="row">
            <div className="col-md-2 left-feild">

              <Search />

            </div>
            <div className="col-md-10 ">
              <div className="for-be-dropdowns">

                <Dropdown />
                <Dropdown />

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

              <SidebarMenu />

              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  Popular Tags
                </h3>

                <Tags />

              </div>
              <div className="be-vidget">
                <h3 className="letf-menu-article">
                  More Filtres
                </h3>

                <Color />

              </div>
            </div>

            <div className="col-md-10">
              <div id="container-mix"  className="row _post-container_">
                <div className="category-1 mix custom-column-5">

                  <ItemPreview />

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
