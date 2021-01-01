import "../styles/global.scss"
import Head from 'next/head'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import { Container, Row, Col, Button } from 'react-bootstrap'

function Atendimento() {
       
    return <>
    
    <Head>
        <title>Atendimento - Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Contato - Scafeli" key="title" />
    </Head>

    <Header />

    <section className="support-hero">

    <Container>

        <h1>Precisando de ajuda?</h1>

    </Container>

    </section>

    
    
    <Footer />
    
    </>
}

export default Atendimento