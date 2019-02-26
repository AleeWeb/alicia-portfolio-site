import React, { Component } from 'react';
import { Nav } from './components/Nav';
import Header from './components/Header';
import ServiceBlocks from './components/ServiceBlocks';
import CodeCards from './components/CodeCards';
import CodePortfolio from './components/CodePortfolio';
import DesignPortfolio from './components/DesignPortfolio';
import Footer from './components/Footer';



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
