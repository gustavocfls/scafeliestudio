import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';

import { Container, Row, Col } from 'react-bootstrap'


export default function Sobre() {
    return(<>
        <Header />

        <Container className="header-page">
            <Row>
                <Col md={8}>
                <h1 className="title-page">Sobre</h1>

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


       

    </>);
}