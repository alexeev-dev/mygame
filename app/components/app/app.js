import React, { Component } from 'react';
import Header from '../header/index';
import Hero from '../header/hero';
import Footer from '../footer/index';

class App extends Component {

  render() {
    return (
      <main>
        <Header />
				<Hero />
				<Footer />
      </main>
    );
  }
}

export default App;
