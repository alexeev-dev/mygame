import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Header from '../header/index';
import Footer from '../footer/index';

import MarketplacePage from '../../pages/marketplace/index';
import StockPage from '../../pages/stock/index';
import LabPage from '../../pages/lab/index';

import UserPage from '../../pages/user/index';
import ActionPage from '../../pages/user/actions';

import FaqPage from '../../pages/help/faq';
import AboutPage from '../../pages/about/index';
import ContactPage from '../../pages/contact/index';
import InnerPrivacyPage from '../../pages/inner/privacy_policy';


class App extends Component {

  render() {
    return (
      <main>
        <Header />

				<Route exact path='/' component={MarketplacePage} />
				<Route exact path='/stock' component={StockPage} />
				<Route exact path='/lab' component={LabPage} />

				<Route path='/user' component={UserPage} />
				<Route path='/action' component={ActionPage} />

				<Route path='/faq' component={FaqPage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/contact' component={AboutPage} />
				<Route path='/privacy_policy' component={InnerPrivacyPage} />

				<Footer />
      </main>
    );
  }
}

export default App;
