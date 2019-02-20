import React, { Component } from 'react';
import { Nav } from './components/Nav';
import Header  from './components/Header';
import { Container } from "reactstrap";


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
