import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, Row, Col } from 'react-bootstrap'

export default function Projects() {
    return(<>

        <Header />

        <div className="servicos-page">

        <Container className="header-page">
            <h1 className="title-page">Projects</h1>
            <p>Here are some personal projects and some selected projects from clients.</p>
        </Container>

        <section className="projects">
    
            <Container>


            <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/banned.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>Banned Store <a target="_blank" href="https://banned.com.br"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>WordPress ─ Sass ─ Gulp</p>
                        </div>
                    </Col>                
                </Row>
        
                <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/movier.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>Projeto Med <a href="#"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>WordPress ─ Sass ─ Gulp <i class="fas fa-arrow-right"></i> ReactJs ─ MongoDB ─ Styled Components</p>
                        </div>
                    </Col>                
                </Row>

                <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/payplug.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>PayPlug <a target="_blank" href="https://docs.payplug.com/api/"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>PHP ─ WordPress ─ Python</p>
                        </div>
                    </Col>                
                </Row>

                

                <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/rrmakeup.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>Digital Catalog - RR MakeUp <a target="_blank" href="https://rrmakeup.netlify.app/"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>ReactJs ─ NextJS ─ Vanilla JS ─ Sass</p>
                        </div>
                    </Col>                
                </Row>

                <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/sda.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>Digital Catalog - Sonho de Algodão <a href="#"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>ReactJs ─ Vanilla JS ─ MovieDB API</p>
                        </div>
                    </Col>                
                </Row>

                <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/movier.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>Movier (Nextflix Clone) <a href="#"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>ReactJs ─ Vanilla JS ─ MovieDB API</p>
                        </div>
                    </Col>                
                </Row>

                <Row className="align-items-center">
                    <Col md={3}>
                    <Image
                        src="/olga.png"
                        alt="Scafeli"
                        width="1366"
                        height="756"
                    />
                    </Col>
                    <Col md={9}>
                        <div className="item">                                               
                            <h2>Olga Music <a target="_blank" href="http://itsolgamusic.com/"><i class="fas fa-external-link-alt"></i></a></h2>    
                            <p>ReactJs ─ NextJS</p>
                        </div>
                    </Col>                
                </Row>

                

            </Container>
    </section>

    </div>


    <Footer />

    </>);
}