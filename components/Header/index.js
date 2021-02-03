import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'

export default function Header () {
    return (<>

    <Head>z\
        <title>Scafeli ─ Agência de Publicidade e Marketing no Rio de Janeiro</title>
        <meta name="description" content="Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho. Fale conosco!" />

        <meta name="robots" content="all" />

        <meta content="pt_BR" property="og:locale" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />

        <link href="https://www.scafeli.com.br" rel="canonical" />
        <link href="https://www.scafeli.com.br" rel="home" />
    </Head>


    <header>

<Container>
    <Navbar collapseOnSelect expand="lg" variant="dark" >
      <Navbar.Brand href="/" className="mr-auto">
          <Image
                src="/svg/logo-scafeli.svg"
                alt="Scafeli"
                width="180"
                height="40"
            />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">


   
      
    </Nav>
    <Nav>

    <Link href="/">
    <Nav.Link as="a" href="/">      
        Home
    </Nav.Link>
    </Link>

    <Link href="/sobre">
    <Nav.Link as="a" href="/sobre">      
        Sobre
    </Nav.Link>
    </Link>

    <Link href="/produtos">
    <Nav.Link as="a" href="/produtos">      
        Produtos
    </Nav.Link>
    </Link>

    <Link href="/servicos">
    <Nav.Link as="a" href="/servicos">      
        Serviços
    </Nav.Link>
    </Link>

    <Link href="/clientes">
      <Nav.Link as="a" href="/clientes">      
          Clientes
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

    </>);
}