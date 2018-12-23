import React, { Component } from 'react';
import Logo from '../Assets/logo.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';
import '../Assets/Custom-style.css';
import {Link} from 'react-router-dom';

class Header extends Component{
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
      <div class="ant-affix">
        <Navbar color="light" light expand="md">
            <Link to ='/'>
              <NavbarBrand ><img style = {{width:46}} src={Logo} alt= 'santren koding'></img></NavbarBrand>
            </Link>
            <Link to='/'>
                <NavbarBrand>Santren Koding</NavbarBrand>
            </Link>            
            <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/kajian'>
                  <NavLink >Kajian Koding</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/mondok'>
                <NavLink>Mondok Koding</NavLink>
                </Link>
                
              </NavItem>
              <NavItem>
                <Link to='/kitab'>
                  <NavLink>Kitab Koding</NavLink>
                </Link>
              </NavItem>
              <Link to = '/notFound' exact>
                  <Button outline color="primary">Masuk/Daftar</Button>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;