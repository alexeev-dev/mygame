import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './Header';
import Footer from './Footer';

import UnicornFull from '../unicorn/Full';

import PopupInvite from '../popups/Invite';
import PopupRegister from '../popups/Register';

import Marketplace from '../../pages/Marketplace';
import PageStock from '../../pages/Stock';
import PageLaboratory from '../../pages/Laboratory';

import PageUser from '../../pages/User';
import PageActions from '../../pages/Actions';

import PageFaq from '../../pages/Faq';
import PageAbout from '../../pages/About';
import PageContact from '../../pages/Contact';
import PagePrivacy_policy from '../../pages/Privacy_policy';

import smartUnicorn from '../../utils/smart-unicorn'
import db from '../../utils/db'

import {login} from '../../actions/account'
import {toggleMetamask, setMetamaskAccount} from '../../actions/metamask'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleMetamask = this.handleMetamask.bind(this)
    this.handleAccount = this.handleAccount.bind(this)
  }

  componentDidMount() {
    smartUnicorn.on('metamask', this.handleMetamask)
    smartUnicorn.on('account', this.handleAccount)
    const info = smartUnicorn.info()
    console.log(info)
    if (info.metamask === true) {
      this.handleMetamask()
    }
    if (info.wallet !== undefined) {
      this.handleAccount(info.wallet)
    }
  }

  handleMetamask() {
    this.props.dispatch(toggleMetamask(true))
  }

  handleAccount(wallet) {
    this.props.dispatch(setMetamaskAccount(wallet))
    const result = db.findAccount(wallet)
    if (result.success === 1) {
      this.props.dispatch(login(result.user))
    }
  }

  render() {
    return (
      <main>
        <Header />

				<Route exact path='/' component={Marketplace}/>
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

export default connect()(App)
