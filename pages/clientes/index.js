import Image from 'next/image'
import Link from 'next/link'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Row, Col } from 'react-bootstrap'


export default function Clientes() {
    return(<>
        <Header />

        <Container className="header-page text-center">
            <h1 className="title-page">Clientes</h1>
            <p>Com um trabalho de equipe, nós criamos e compartilhamos a sua marca.</p>
            <i class="fas fa-arrow-down"></i>
        </Container>


        <section className="clientes-page">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>CFB7 Brasil</h2>
                    <p>Produção de conteúdos digitais</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>

            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>RR MakeUp</h2>
                    <p>Fotos / Catálogo digital</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>

            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Fredy Miller</h2>
                    <p>Produção de conteúdos digitais</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>

            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Banned Store</h2>
                    <p>Criação / Gestão de loja virtual</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>


            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>OQNTESMKT</h2>
                    <p>Produção de conteúdos digitais</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>

            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Academia Be Fit</h2>
                    <p>Gestão de redes sociais</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>


            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Bhappfit</h2>
                    <p>Produção de vídeos institucionais</p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>


            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Sonho de Algodão</h2>
                    <p>Catálogo digital </p>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </Col>


            <Col md={4}>
                <div className="cliente-item">
                    <Image
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        width="1080"
                        height="1080"
                    />

                    <h2>Evoke Beachwear</h2>

                    <p>Fotos para e-commerce</p>

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



<Footer />

    </>);
}