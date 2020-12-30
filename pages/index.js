import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

function Home() {
    return <>

    <Header />

    <Head>
        <title>Scafeli Rio de Janeiro</title>
        <meta name="description" content="Desde 2014, já são mais de 200 clientes atendidos por todo o mundo e milhões de pessoas impactadas pelo nosso trabalho. Isso é Scafeli." />

        <meta name="robots" content="all" />

        <meta content="pt_BR" property="og:locale" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />

        <link href="https://www.scafeli.com.br" rel="canonical" />
        <link href="https://www.scafeli.com.br" rel="home" />
    </Head>
    
    <section className="hero">        
        
        <Container className="text-center">

            <h1>Creative Agency</h1>
            <p>Uma agência criativa que atende as melhores marcas e pessoas do mundo desde 2014.</p>

        </Container>
        
    </section>


    
    <section className="services--home">
        
        <Container className="text-center">

            <ul>
                <li>Campanhas Publicitárias</li>
                <li>Produção de Conteúdo</li>
                <li>Gestão de Redes Sociais</li>
                <li>Marketing de Influência</li>
                <li>Desenvolvimento Web</li>
                <li>E-Commerce</li>
            </ul>

            <Link href="/servicos">
                <a className="s-link">Saiba mais sobre nossos serviços <i class="fas fa-arrow-right"></i></a>
            </Link>

            </Container>
            
    </section>


    <section className="call--about">

        <Container>
            <Row>
                <Col md={6}>

                <p>Entregamos experiências, não anúncios.</p>

                <h2>Criamos parcerias para fornecer conteúdos incríveis e campanhas de marketing com resultados reais. </h2>

                <p>Desde 2014, já são mais de 200 clientes atendidos por todo o mundo e milhões de pessoas impactadas pelo nosso trabalho.</p>

                <p>é apenas o começo.</p>

                <Link href="/sobre">
                    <a className="s-link">Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i> </a>
                </Link>

                </Col>


                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        height="1200"
                        width="1200"
                    />
                </Col>
                
            </Row>
        </Container>

        
    </section>

    



    <Footer />

        
        
    </>
}



export default Home

