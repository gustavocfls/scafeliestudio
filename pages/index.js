import React from "react";

import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Header from '../components/Header';

import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'


function Home() {
    return <>

    <Header />
    
    <section className="hero text-center">
        
        <Container>

            
            <h1>We are Creators</h1>
            <p className="lead">A Scafeli é uma Produtora de Conteúdos Digitais</p>


            <div class="embed-responsive embed-responsive-16by9" data-aos="fade">
                <iframe width="1920" height="1080" src="https://www.youtube.com/embed/hpHnxk4lv7g?autoplay=1&loop=1&mute=1&controls=0" allowfullscreen></iframe>
                </div>

        </Container>
        
    </section>

    <section className="about-home">
        <Container>
        
        
        <Row className="align-items-center">
            <Col md={6}>



                <p>Entregamos experiências, não anúncios.</p>
                <h2>Criamos parcerias para fornecer conteúdos incríveis e campanhas publicitárias com resultados reais.</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                
                    <p>É apenas o começo.</p>



                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
            

            </Col>


            <Col md={6}>
            
        
            <Image
                src="/supreme-scafeli.png"
                alt="Scafeli"
                width="1080"
                height="1080"
            />
                
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