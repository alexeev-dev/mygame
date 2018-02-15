import React, { Component } from 'react'

import UnicornCard from '../common/UnicornCard'
import Button from '../common/Button'
import SideGroup from '../Unicorn/SideGroup'
import UnicornInfo from '../Unicorn/UnicornInfo'
import Comments from '../Unicorn/Comments'

const unicorn = {
  id: 153330988,
  dna: 8890509998,
  name: 'Mr. Incredible Unicorn',
  price: 0.042,
  reproduction: {
    type: 'extra',
    price: 0.00093
  },
  popularity: 23.4453,
  generation: 1,
  tags: ['Nice', 'Gute', 'Usual', 'Just', 'Angry'],
  owner: {
    name: 'Alex Alexeev',
    url: '/alex_alexeev'
  },
  country: 'USA',
  counters: {
    likes: 50,
    views: 150,
    comments: 20
  }
}

const comment = {
  user: 'Guest',
  date: 'May 27, 2015 at 3:14am',
  text: 'Cras magna nunc, cursus lobortis luctus at, sollicitudin vel neque. Duis eleifend lorem non ant',
}

const UnicornPage = () => (
  <div id="content-block">
    <div className="container custom-container be-detail-container">
      <div className="row">
        <div className="col-md-9 col-md-push-3">
          <div className="row"><div id="chartContainer"></div></div>

          <UnicornInfo unicorn={unicorn} />

          <Comments items={[comment, comment, comment]} price="0.00000054312" onSubmit={(text) => {}} />

        </div>
        <div className="col-md-3 col-md-pull-9 left-feild">

          <Button type="primary" onClick={() => {}}>
            <a href="#" className="be-button-vidget like-btn blue-style"><i className="fa fa-heart-o"></i>LIKE ME</a>
          </Button>
          <br />
          <Button type="primary" onClick={() => {}}>
            <a href="#" className="be-button-vidget like-btn blue-style"><i className="fa fa-bullhorn"></i> <small>promote for</small> <span> 0.00000012 <i className="fa fa-btc"></i></span></a>
          </Button>
          <br />
          <Button type="primary" onClick={() => {}}>
            <a href="#" className="be-button-vidget like-btn blue-style"><i className="fa fa-tag"></i> <small>buy for</small> <span> 0.042 <i className="fa fa-btc"></i> <i className="fa fa-cog"></i></span></a>
          </Button>
          <br />
          <Button type="secindary" onClick={() => {}}>
            <a href="#" className="be-button-vidget add-btn grey-style"><i className="fa fa fa-venus-mars"></i> <small>modify for</small> <span> 0.000027 <i className="fa fa-btc"></i> <i className="fa fa-cog"></i></span></a>
          </Button>
          <br />
          
          <div className="info-block style-2">
            <h3 className="info-block-label"><i className="fa fa-child"></i> Owner</h3>
          </div>

          <UnicornCard unicorn={unicorn} />

          <br /><br />

          <SideGroup title="Parents">
            <div className="swiper-container" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <UnicornCard unicorn={unicorn} />
                </div>
                <div className="swiper-slide">
                  <UnicornCard unicorn={unicorn} />
                </div>
              </div>
              <div className="pagination">

              </div>
            </div>
          </SideGroup>  

          <SideGroup title="Children">
            <div className="swiper-container" data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <UnicornCard unicorn={unicorn} />
                </div>
                <div className="swiper-slide">
                  <UnicornCard unicorn={unicorn} />
                </div>
                <div className="swiper-slide">
                  <UnicornCard unicorn={unicorn} />
                </div>
                <div className="swiper-slide">
                  <UnicornCard unicorn={unicorn} />
                </div>
              </div>
              <div className="pagination">

              </div>
            </div>
          </SideGroup>  

        </div>
      </div>
    </div>
  </div>
)

export default UnicornPage
