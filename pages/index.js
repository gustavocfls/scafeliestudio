import React from "react";

import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'


function Home() {
    return <>

    <Head>
        <title>Gustavo Scafeli - Director of Photography</title>
        <meta name="description" content="A Scafeli é a uma empresa de Marketing de Conteúdo. Gestão de Redes Sociais, Criação de Sites e Produção de Conteúdo é na Scafeli." />

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
                height="60"
            />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">


   
      
    </Nav>
    <Nav>

    <Link href="/socialmedia">
    <Nav.Link as="a" href="/socialmedia">      
        Home
    </Nav.Link>
    </Link>

    <Link href="/socialmedia">
    <Nav.Link as="a" href="/socialmedia">      
        Films
    </Nav.Link>
    </Link>

    

    <Link href="/sites">
      <Nav.Link as="a" href="/sites">      
          Stills
      </Nav.Link>
    </Link>

    <Link href="/conteudo">
    <Nav.Link as="a" href="/conteudo">      
        Prints
    </Nav.Link>
    </Link> 

  

    <Link href="/">
    <Nav.Link as="a" href="/">      
        About
    </Nav.Link>
  </Link>

  <Link href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli.">
    <Nav.Link as="a" target="_blank" href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli.">      
        Contact 
    </Nav.Link>
  </Link>

</Nav>
</Navbar.Collapse>
</Navbar>

</Container>
</header>
    
    <section className="hero text-center">        
        
        <Container>

                              
                {/* <p className="lead">Gustavo Scafeli</p> */}
                {/* <h1>Gustavo Scafeli</h1> */}
                
                


                <div class="embed-responsive embed-responsive-16by9" data-aos="fade">
    <iframe width="1920" height="1080" src="https://www.youtube.com/embed/hpHnxk4lv7g?autoplay=1&loop=1&mute=1&controls=0" allowfullscreen></iframe>
    </div>



                         

        </Container>
        
    </section>   

    <section className="social-home d-flex">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/carol-salucci-scafeli.jpg"
                        alt="Scafeli"
                        height="650"
                        width="1000"
                    />
                </Col>

                <Col md={6}>

                <h1>Photographer</h1>
                <h1>Director of Photography</h1>
                <h1>Cinematographer</h1>
                </Col>

            </Row>
        </Container>
    </section>



    <footer>
        <Container className="text-center">

            <ul>
                <li><a target="_blank" href="https://instagram.com/agenciascafeli"><i class="fab fa-instagram"></i></a></li>
                <li><a target="_blank" href="http://be.net/agenciascafeli"><i class="fab fa-behance"></i></a></li>
                
                <li><a target="_blank" href="https://www.youtube.com/channel/UC3qxlRY4Z9WbF_4QGK5CX-A"><i class="fab fa-youtube"></i></a></li>
                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli."><i class="fab fa-whatsapp"></i></a></li>
            </ul>

            <p>Copyright © All rights reserved.</p>
            
        </Container>
    </footer>

        
    </>
}


export default Home

