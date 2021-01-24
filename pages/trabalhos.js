import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';

import { Container, Row, Col } from 'react-bootstrap'


export default function Trabalhos() {
    return(<>
        <Header />

        <Container className="header-page">
            <Row>
                <Col md={8}>
                <h1 className="title-page">Trabalhos</h1>

                <p>
                    A Scafeli é uma Gestora e Produtora de Conteúdos Digitais fundada em 2014 pelo fotógrafo Gustavo Scafeli e com sede no Rio de Janeiro.
                </p>


                <p>
                Hoje contamos com a colaboração de ótimos profissionais do setor audiovisual e criadores de conteúdos no Rio de Janeiro, São Paulo e Curitiba. Essa união nos possibilita atender todo o território nacional de forma eficiente.
                </p>

                <p>
                Entre nossos serviços, destacamos:
                </p>
                </Col>
            </Row>
        </Container>


        <section className="service dark">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={6}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />
            </Col>

            <Col md={6}>

                <h2>CFB7 Brasil</h2>
                
                <ul>
                    <li><i class="far fa-circle"></i> Fotos para e-commerce</li>
                    <li><i class="far fa-circle"></i> Fashion Film</li>
                    <li><i class="far fa-circle"></i> Vídeos Institucionais</li>
                    <li><i class="far fa-circle"></i> Captação de cursos online</li>
                </ul>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Produção Audiovisual <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
            

            </Col>


            
        </Row>

        </Container>
    </section>

    <section className="service">
        <Container>
        
        
        <Row className="align-items-center">

            

            <Col md={6}>

                <h2>Empório Naval</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                <ul>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                </ul>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Redes Sociais <i class="fas fa-arrow-right"></i>
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

    <section className="service dark">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={6}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />
            </Col>

            <Col md={6}>

                <h2>Fredy Miller</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                
                <ul>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                </ul>



                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Marketing de Influência <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
            

            </Col>


            
        </Row>

        </Container>
    </section>


    <section className="service">
        <Container>
        
        
        <Row className="align-items-center">

            

            <Col md={6}>

                <h2>Bhappfit</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                <ul>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                </ul>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Redes Sociais <i class="fas fa-arrow-right"></i>
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

    <section className="service dark">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={6}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />
            </Col>

            <Col md={6}>

                <h2>Academia Be Fit</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                
                <ul>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                </ul>



                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Marketing de Influência <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
            

            </Col>


            
        </Row>

        </Container>
    </section>

    <section className="service">
        <Container>
        
        
        <Row className="align-items-center">

            

            <Col md={6}>

                <h2>OQNTESMKT</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                <ul>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                </ul>

                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Redes Sociais <i class="fas fa-arrow-right"></i>
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

    <section className="service dark">
        <Container>
        
        
        <Row className="align-items-center">

            <Col md={6}>
                <Image
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    width="1080"
                    height="1080"
                />
            </Col>

            <Col md={6}>

                <h2>Prof. Marcos Branco</h2>

                <p>Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho.</p>
                
                
                <ul>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                    <li><i class="far fa-circle"></i> </li>
                </ul>



                    <Link href="/sobre">
                        <a className="s-link">      
                            Fale conosco sobre Marketing de Influência <i class="fas fa-arrow-right"></i>
                        </a>
                    </Link>
            

            </Col>


            
        </Row>

        </Container>
    </section>



    </>);
}