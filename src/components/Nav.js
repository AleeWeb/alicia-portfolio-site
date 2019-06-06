import React from 'react';
import {
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Scrollchor from 'react-scrollchor';

const mainNav = {
  position: 'relative',
  float: 'left',
  top: '30px',
  zIndex: '1',
  left: '218px',
  fontSize: '1.2em',
  fontWeight: '700',
  padding: '.5rem'
};

const navLink = {
  color: '#484242',
  padding: '10px',
  textDecoration: 'none'
}

const toggler = {
  border: 'none'
}


export class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Navbar style={mainNav} light expand="md">
            <NavbarToggler onClick={this.toggle} style={toggler} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <Scrollchor to="#summary" style={navLink}>
                    My Creative Process
                  </Scrollchor>
                </NavItem>

                <NavItem>
                  <Scrollchor to="#code" style={navLink}>
                    Code
                  </Scrollchor>
                </NavItem>

                <NavItem>
                  <Scrollchor to="#design" style={navLink}>
                    Design
                  </Scrollchor>
                </NavItem>

                <NavItem>
                  <Scrollchor to="#me" style={navLink}>
                    About Me
                  </Scrollchor>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

