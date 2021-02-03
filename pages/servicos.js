import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

import GooglePartner from '../components/googlepartner';

import Cta from '../components/Cta';



import { Container, Row, Col } from 'react-bootstrap'


export default function Servicos() {
    return(<>
        <Header />


        <Container className="header-page text-center">
            
                
                <h1 className="title-page">Nossos serviços</h1>

                <p>
                    A Scafeli é uma Gestora e Produtora de Conteúdos Digitais fundada em 2014 pelo fotógrafo Gustavo Scafeli e com sede no Rio de Janeiro.
                </p>
            
        </Container>




        <section className="service">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={4}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Produção de conteúdo</h2>
            </Col>

            <Col md={4}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Sites e lojas virtuais</h2>
            </Col>

            <Col md={4}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Marketing de influência</h2>
            </Col>

            
        </Row>

        </Container>
    </section>

    <GooglePartner />



    <section className="service">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={4}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Produção Audiovisual</h2>
            </Col>

            <Col md={4}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Criação de aplicativos</h2>
            </Col>

            <Col md={4}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Gestão de anúncios</h2>
            </Col>

            
        </Row>

        </Container>
    </section>

    <Cta />

    <Footer />

    </>);
}