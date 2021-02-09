import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'

export default function Header () {
    return (<>

    <Head>
        <title>Gustavo Souza - Software Developer</title>
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
    <Navbar collapseOnSelect expand="lg" variant="light" >
      <Navbar.Brand href="/" className="mr-auto">
          <Image
                src="/svg/logo.svg"
                alt="Scafeli"
                width="80"
                height="50"
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

    <Link href="/about">
    <Nav.Link as="a" href="/about">      
        About
    </Nav.Link>
    </Link>

    <Link href="/projects">
    <Nav.Link as="a" href="/projects">      
        Projects
    </Nav.Link>
    </Link>

    <Link href="/blog">
    <Nav.Link as="a" href="/blog">      
        Blog
    </Nav.Link>
    </Link>


    <Link href="/contact">
    <Nav.Link as="a" href="/contact">      
        Get in touch
    </Nav.Link>
    </Link> 


</Nav>
</Navbar.Collapse>
</Navbar>

</Container>
</header>

    </>);
}