import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

import Cta from '../components/Cta';

import { Container, Row, Col } from 'react-bootstrap'


export default function Sobre() {
    return(<>
        <Header />

        <Container className="header-page text-center">
            
                <h1 className="title-page">Sobre a Scafeli</h1>

                <p>
                    A Scafeli é uma Gestora e Produtora de Conteúdos Digitais fundada em 2014 pelo fotógrafo Gustavo Scafeli e com sede no Rio de Janeiro.
                </p>
        </Container>

        <Container fluid>
            imagem
        </Container>

        <Container>
            <Row>
                <Col md={6}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis dignissim, semper justo vitae, lobortis lacus. Nam id urna sit amet nunc sodales sollicitudin. Aenean pellentesque nunc vel mattis sollicitudin. Morbi risus erat, aliquam eget scelerisque non, accumsan quis nisi. Cras fermentum tincidunt finibus. Phasellus commodo felis id ante fringilla, malesuada tincidunt velit condimentum. Pellentesque finibus nisi nisi, at laoreet ante sollicitudin eget.</p>
                </Col>

                <Col md={6}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis dignissim, semper justo vitae, lobortis lacus. Nam id urna sit amet nunc sodales sollicitudin. Aenean pellentesque nunc vel mattis sollicitudin. Morbi risus erat, aliquam eget scelerisque non, accumsan quis nisi. Cras fermentum tincidunt finibus. Phasellus commodo felis id ante fringilla, malesuada tincidunt velit condimentum. Pellentesque finibus nisi nisi, at laoreet ante sollicitudin eget.</p>
                    
                </Col>
            </Row>
        </Container>

        <Container>
            <div className="cta-area">

            </div>
        </Container>

       <Cta />
       
       <Footer />

    </>);
}