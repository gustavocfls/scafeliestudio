import "./Header.scss"

import Image from 'next/image'
import Link from 'next/link'

import { Nav, Navbar, NavDropdown, Container, Row, Col, Button, Badge } from 'react-bootstrap'

function Header() {
       
    return <>




    <header>

    <Container>

        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="/" className="mr-auto"><Image
                    src="/svg/logo.svg"
                    alt="Gustavo Scafeli"
                    width="40"
                    height="50"
                /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">


        <Link href="/">
        <Nav.Link as="a" href="/">      
            Início
        </Nav.Link>
        </Link>


        <Link href="/social-media">
        <Nav.Link as="a" href="/social-media">      
            Social Media <Badge variant="secondary">Novo!</Badge>
        </Nav.Link>
        </Link>

        <Link href="/criar-sites">
          <Nav.Link as="a" href="/criar-sites">      
              Criação de Sites
          </Nav.Link>
        </Link>

        <Link href="/marketing-digital">
          <Nav.Link as="a" href="/marketing-digital">      
              Marketing Digital
          </Nav.Link>
        </Link>

          
        </Nav>
        <Nav>

      

      <Link href="/atendimento">
        <Nav.Link as="a" href="/atendimento">      
            Atendimento
        </Nav.Link>
      </Link>

      <Link href="/">
        <Nav.Link as="a" href="/" className="p-color">      
            Entrar <i class="fas fa-arrow-right"></i>
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