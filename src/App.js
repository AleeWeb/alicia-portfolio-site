import React, { Component } from 'react';
import './style/main.scss';
import { TopNav } from './components/Nav';
import Header from './components/Header/Header';
import CodePortfolio from './components/Code/CodePortfolio';
import DesignPortfolio from './components/Design/DesignPortfolio';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobeAmericas, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGlobeAmericas, faCode)

class App extends Component {
  render() {
    return (
      <>
        <TopNav />

        <Header />

        <CodePortfolio />

        <DesignPortfolio />

        <AboutMe />

        <Footer />

      </>
    );
  }
}

export default App;
