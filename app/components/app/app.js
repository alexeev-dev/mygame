import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import UnicornFull from '../unicorn/Full';

import PopupInvite from '../popups/Invite';
import PopupRegister from '../popups/Register';

import PageMarketplace from '../../pages/Marketplace';
import PageStock from '../../pages/Stock';
import PageLaboratory from '../../pages/Laboratory';

import PageUser from '../../pages/User';
import PageActions from '../../pages/Actions';

import PageFaq from '../../pages/Faq';
import PageAbout from '../../pages/About';
import PageContact from '../../pages/Contact';
import PagePrivacy_policy from '../../pages/PagePrivacy_policy';


class App extends Component {

  render() {
    return (
      <main>
        <Header />

				<Route exact path='/' component={PageMarketplace} />
				<Route path='/stock' component={PageStock} />
				<Route path='/laboratory' component={PageLaboratory} />

        <Route path='/unicorn' component={UnicornFull} />

				<Route path='/owner' component={PageUser} />
				<Route path='/actions' component={PageActions} />

				<Route path='/faq' component={PageFaq} />
				<Route path='/about' component={PageAbout} />
				<Route path='/contact' component={PageContact} />
				<Route path='/privacy_policy' component={PagePrivacy_policy} />

				<Footer />

        <PopupInvite />
        <PopupRegister />
      </main>
    );
  }
}

export default App;
