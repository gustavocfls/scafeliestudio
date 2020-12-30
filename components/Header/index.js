import "./Header.scss"

import Image from 'next/image'
import Link from 'next/link'

import { Nav, Navbar, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap'

function Header() {
       
    return <>


    <header>
        <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="/" className="mr-auto"><Image
            src="/svg/logo-scafeli.svg"
            alt="Gustavo Scafeli"
            width="55"
            height="80"
        /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>

      <Link href="/sobre">
        <Nav.Link as="a" href="/sobre">      
            Sobre
        </Nav.Link>
      </Link>

      <Link href="/servicos">
        <Nav.Link as="a" href="/servicos">      
            Serviços
        </Nav.Link>
      </Link>

      <Link href="/trabalhos">
        <Nav.Link as="a" href="/trabalhos">      
            Trabalhos
        </Nav.Link>
      </Link>

      <Link href="/contato">
        <Nav.Link as="a" href="/contato">      
            Contato
        </Nav.Link>
      </Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </Container>
    </header>

   
    </>
}

export default Header