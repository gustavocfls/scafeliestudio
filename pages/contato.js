import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';


import { Container, Row, Col } from 'react-bootstrap'
import GooglePartner from '../components/googlepartner';


export default function Contato() {
    return(<>

    <Head>
        <title>Contato ─ Scafeli</title>
    </Head>

        <Header />

        <div className="contato-page">

        <Container className="header-page text-center">
                <h1 className="title-page">Contato</h1>
                <p>Que ótimo te ver por aqui. Estamos ansiosos para falar com você!</p>
                <i class="fas fa-arrow-down"></i>
        </Container>

        <GooglePartner />

        <Container>
            <Row>
                <Col md={4}>
                    <h4>Comercial</h4>

                    <p>Abaixo estão os principais canais para você entrar contato e começarmos uma parceria de muito sucesso!</p>

                    
                    <a className="s-link" target="_blank" href="https://wa.me/5521964105305">      
                        +55 21 96410-5305 <i class="fas fa-arrow-right"></i>
                    </a>

                    
                    <a className="s-link" href="mailto:contato@scafeli.com.br">      
                        contato@scafeli.com.br <i class="fas fa-arrow-right"></i>
                    </a>

                </Col>

                <Col md={4}>
                    <h4>Social</h4>

                    <p>Estamos diariamente nas principais redes sociais produzindo conteúdos gratuitos e de qualidade para ajudar o seu negócio.</p>
                    
                    <a className="s-link" target="_blank" href="https://instagram.com/agenciascafeli">      
                        Instagram <i class="fas fa-arrow-right"></i>
                    </a>
                    
                    <a className="s-link" target="_blank" href="https://www.behance.net/scafeli">      
                        Behance <i class="fas fa-arrow-right"></i>
                    </a>

                </Col>


                <Col md={4}>
                    <h4>Suporte</h4>

                    <p>Está com alguma dúvida, quer reportar um bug ou contribuir no desenvolvimento de algum de nossos produtos?</p>

                    <a className="s-link" href="mailto:suporte@scafeli.com.br">      
                        suporte@scafeli.com.br <i class="fas fa-arrow-right"></i>
                    </a>
                </Col>
            </Row>
        </Container>
        </div>

        <Footer />

    </>);
}