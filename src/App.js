import React, { Component } from 'react';
import { Container } from "reactstrap";
import { Nav } from './components/Nav';
import { Header } from './components/Header';



class App extends Component {
  render() {
    return (
      <Container>

        <Nav />
        <Header />
        
      </Container>
    );
  }
}

export default App;
