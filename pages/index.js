import React from "react";

import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Header from '../components/Header';
import Footer from '../components/Footer';
import CarouselHome from '../components/CarouselHome';



import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'


function Home() {
    return <>

    <Header />

    
    
    <section className="hero">
        
        <Container>

            <Row className="align-items-center">
                <Col md={6}>
                <p className="lead">Developer ─ Consultant ─ Creator</p>
                <h1>Hey, I'm Gustavo Souza</h1>

                <p>You’ve found my personal slice of the internet</p>
            
                </Col>

                <Col md={6}>
                <CarouselHome />
                </Col>
            </Row>

            

        </Container>
        
    </section>





<Footer />


    

    </>
}

export default Home