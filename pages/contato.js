import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, Row, Col } from 'react-bootstrap'


export default function Contato() {
    return(<>

    <Head>
        <title>Contato ─ Scafeli</title>
    </Head>

        <Header />

        <Container className="header-page text-center">
           
                <h1 className="title-page">Contato</h1>

                <p>
                    A Scafeli é uma Gestora e Produtora de Conteúdos Digitais fundada em 2014 pelo fotógrafo Gustavo Scafeli e com sede no Rio de Janeiro.
                </p>

                

        </Container>

        <Container>
        <Row>
                    <Col md={4}>
                        <h4>Comercial</h4>

                        <p>Abaixo estão os principais canais para você entrar contato e começarmos uma parceria de muito sucesso!</p>

                        <ul>
                            <li>+55 21 96410-5305</li>
                            <li>comercial@scafeli.com.br</li>
                            <li>comercial@scafeli.com.br</li>
                        </ul>
                    </Col>

                    <Col md={4}>
                        <h4>Social</h4>

                        <p>Estamos diariamente nas principais redes sociais produzindo conteúdos gratuitos e de qualidade para ajudar o seu negócio.</p>

                        <ul>
                            <li>Instagram</li>
                            <li>Behance</li>
                            <li>YouTube</li>
                        </ul>
                    </Col>


                    <Col md={4}>
                        <h4>Suporte</h4>

                        <p>Está com alguma dúvida, quer reportar um bug ou contribuir no desenvolvimento de algum de nossos produtos?</p>

                        <ul>
                            <li>suporte@scafeli.com.br</li>
                        </ul>
                    </Col>
                </Row>
        </Container>

        <Footer />

    </>);
}