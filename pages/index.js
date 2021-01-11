import React from "react";

import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'


function Home() {
    return <>

    <Head>
        <title>Scafeli - Produtora de Conteúdos Digitais</title>
        <meta name="description" content="A Scafeli é a uma empresa de Marketing de Conteúdo. Gestão de Redes Sociais, Criação de Sites e Produção de Conteúdo é na Scafeli." />

        <meta name="robots" content="all" />

        <meta content="pt_BR" property="og:locale" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />

        <link href="https://www.scafeli.com.br" rel="canonical" />
        <link href="https://www.scafeli.com.br" rel="home" />
    </Head>


    <header className="stick">

<Container>
    <Navbar collapseOnSelect expand="lg" variant="light" >
      <Navbar.Brand href="/" className="mr-auto">
          <Image
                src="/svg/logo.svg"
                alt="Scafeli"
                width="150"
                height="45"
            />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">


    <Link href="/socialmedia">
    <Nav.Link as="a" href="/socialmedia">      
        Social Media <Badge variant="secondary">Novo!</Badge>
    </Nav.Link>
    </Link>

    

    <Link href="/sites">
      <Nav.Link as="a" href="/sites">      
          Criação de Sites
      </Nav.Link>
    </Link>

    <Link href="/conteudo">
    <Nav.Link as="a" href="/conteudo">      
        Produção de Conteúdo
    </Nav.Link>
    </Link>
      
    </Nav>
    <Nav>

  

    <Link href="/">
    <Nav.Link as="a" href="/">      
        Quem somos
    </Nav.Link>
  </Link>

  <Link href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli.">
    <Nav.Link as="a" target="_blank" href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli." className="p-color">      
        Fale conosco <i class="fas fa-arrow-right"></i>
    </Nav.Link>
  </Link>

</Nav>
</Navbar.Collapse>
</Navbar>

</Container>
</header>
    
    <section className="hero d-flex">        
        
        <Container>

            <Row className="align-items-center">
                <Col md={6} >

                    <div className="#">
                
                <p className="lead hide p-sec-color"><b>Conteúdo de valor para marcas inteligentes</b></p>
                <h1>Ajudamos a sua empresa crescer na internet</h1>
                </div>

                </Col>


                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/iphone-hero.png"
                        alt="Scafeli"
                        height="1080"
                        width="1080"
                    />
                </Col> 

            </Row>            

        </Container>
        
    </section>   

    <section className="socialmedia-home d-flex">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/iphone-hero.png"
                        alt="Scafeli"
                        height="1080"
                        width="1080"
                    />
                </Col>

                <Col md={6}>
                <h1 className="p-color">Social Media</h1>
                    <h1>Gestão inteligente e produção de conteúdo para redes sociais.</h1>

                    <Link href="/socialmedia">
                        <a className="s-link">Conheça nossos planos <i class="fas fa-arrow-right"></i> </a>
                    </Link>
                </Col>

            </Row>
        </Container>
    </section>


    <section className="d-flex criacaodesites-home">

        <Container>
            <Row className="align-items-center">

                <Col md={6}>

                    <h1 className="p-sec-color">Criação de sites</h1>
                    <h1>Sites institucionais e gestão de lojas virtuais para a sua empresa.</h1>

                    <Link href="/sites">
                        <a className="s-link">Conheça nossos planos <i class="fas fa-arrow-right"></i> </a>
                    </Link>

                </Col>

                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/sites-hook.png"
                        alt="Scafeli"
                        height="1200"
                        width="1200"
                    />
                </Col>
                
            </Row>
        </Container>
        
    </section>


    <section className="producaodeconteudo-home d-flex">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                <Image
                        layout="responsive"
                        src="/iphone-hero.png"
                        alt="Scafeli"
                        height="1080"
                        width="1080"
                    />
                </Col>

                <Col md={6}>
                     <h1 className="p-color">Produção de conteúdo</h1>
                    <h1>Fotos e vídeos para destacar o potencial da sua marca na internet.</h1>

                    <Link href="/conteudo">
                        <a className="s-link">Conheça nossos planos <i class="fas fa-arrow-right"></i> </a>
                    </Link>
                </Col>

            </Row>
        </Container>
    </section>


    <footer>
        <Container className="text-center">

            <ul>
                <li><a target="_blank" href="https://instagram.com/agenciascafeli"><i class="fab fa-instagram"></i></a></li>
                <li><a target="_blank" href="https://behance.net/agenciascafeli"><i class="fab fa-behance"></i></a></li>
                
                <li><a target="_blank" href="https://www.youtube.com/channel/UC3qxlRY4Z9WbF_4QGK5CX-A"><i class="fab fa-youtube"></i></a></li>
                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli."><i class="fab fa-whatsapp"></i></a></li>
            </ul>

            <p>© 2021 Scafeli - Conteúdos Digitais <br></br>BR 101, Km 295 - Itaboraí, RJ</p>

            <p className="credits">May the force be with you! <br></br><i class="fas fa-jedi"></i></p>
            
        </Container>
    </footer>

        
    </>
}


export default Home

