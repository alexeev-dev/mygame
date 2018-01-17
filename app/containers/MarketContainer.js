import { connect } from 'react-redux'
import PageMarketplace from '../pages/Marketplace.js'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.account.isLoggedIn
  }
}

const MarketContainer = connect(
  mapStateToProps,
)(PageMarketplace)

export default MarketContainer
