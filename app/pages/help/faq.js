import React, { Component } from 'react';

import SidebarMenu from '../../components/pages/sidebar_menu';
import FaqItem from '../../components/pages/faq_item';

class FaqPage extends Component {
  render() {
    return (
      <div id="content-block">
    		<div className="container be-detail-container">
    			<h2 className="content-title">FAQs</h2>
    			<div className="row">
    				<div className="left-feild col-xs-12 col-sm-3">

    					<SidebarMenu />

    				</div>
    				<div className="col-xs-12 col-sm-9">
              <div className="accordion style-2">

                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />
                  <FaqItem />

              </div>
    				</div>
    			</div>
    		</div>
    	</div>
    );
  }
}

export default FaqPage;
