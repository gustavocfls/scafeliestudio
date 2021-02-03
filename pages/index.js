import React from "react";

import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Header from '../components/Header';
import Footer from '../components/Footer';

import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'


function Home() {
    return <>

    <Header />
    
    <section className="hero text-center">
        
        <Container fluid>

            
            <h1>we are creators</h1>
            <p className="lead">scafeli ─ advertising ─ marketing ─ rio de janeiro</p>


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

    

<Footer />


    

    </>
}

export default Home