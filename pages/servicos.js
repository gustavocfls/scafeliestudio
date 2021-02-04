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

        <div className="servicos-page">

        <Container className="header-page text-center">
            <h1 className="title-page">Serviços</h1>
            <p>A Scafeli é uma Gestora e Produtora de Conteúdos Digitais.</p>
            <i class="fas fa-arrow-down"></i>
        </Container>

        <section className="service">
    
            <Container>
        
            <Row className="align-items-center">

                <Col md={4}>

                    <div className="service-item">
                        <Image
                            src="/supreme-scafeli.png"
                            alt="Scafeli"
                            width="1080"
                            height="1080"
                        />
                        <h2>Produção de conteúdo</h2>

                        <Link href="/sobre">
                            <a className="s-link">      
                                Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                            </a>
                        </Link>
                    </div>

                </Col>

                <Col md={4}>

                    <div className="service-item">
                        <Image
                            src="/supreme-scafeli.png"
                            alt="Scafeli"
                            width="1080"
                            height="1080"
                        />
                        <h2>Produção de conteúdo</h2>
                        <Link href="/sobre">
                            <a className="s-link">      
                                Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                            </a>
                        </Link>
                    </div>

                </Col>

                <Col md={4}>
                <div className="service-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Produção de conteúdo</h2>
                    <Link href="/sobre">
                            <a className="s-link">      
                                Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                </Col>

                
            </Row>

        </Container>
    </section>

    <GooglePartner />



    <section className="service">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={4}>
            <div className="service-item">
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Produção de conteúdo</h2>
                <Link href="/sobre">
                    <a className="s-link">      
                        Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                    </a>
                </Link>
                </div>
            </Col>

            <Col md={4}>
            <div className="service-item">
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Produção de conteúdo</h2>
                <Link href="/sobre">
                    <a className="s-link">      
                        Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                    </a>
                </Link>
                </div>
            </Col>

            <Col md={4}>
            <div className="service-item">
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />

                <h2>Produção de conteúdo</h2>
                <Link href="/sobre">
                    <a className="s-link">      
                        Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                    </a>
                </Link>
                </div>
            </Col>

            
        </Row>

        </Container>
    </section>

    </div>

    <Cta />

    <Footer />

    </>);
}