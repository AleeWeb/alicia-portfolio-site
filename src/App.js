import React, { Component } from 'react';
import { Nav } from './components/Nav';
import Header from './components/Header';
import ServiceBlocks from './components/ServiceBlocks';
import CodeCards from './components/CodeCards';
import CodePortfolio from './components/CodePortfolio';
import DesignPortfolio from './components/DesignPortfolio';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGlobeAmericas, faCode } from '@fortawesome/free-solid-svg-icons'



library.add(fab, faGlobeAmericas, faCode)

class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <Header />

        <ServiceBlocks />

        <CodePortfolio />

        <CodeCards />

       <DesignPortfolio /> 

      <Footer />

      </>

    );
  }
}

export default App;
