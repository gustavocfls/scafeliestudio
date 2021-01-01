import "./Footer.scss"

import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'


function Footer() {
       
    return <>

<footer>

<Container>
        <Row>
    
            <Col md={4}>
                <h4>Produtos</h4>

                <ul>
                    <li>Social Media</li>
                    <li>Criação de Sites</li>
                    <li>Marketing Digital</li>
                </ul>
            </Col>

            <Col md={4}>
            <h4>A Scafeli</h4>

                <ul>
                    <li>Sobre</li>
                    <li>Trabalhe na Scafeli</li>
                    <li>Blog</li>
                    <li>Atendimento</li>
                    <li>Área do Cliente</li>
                </ul>
            </Col>


            <Col md={4}>
            <h4>Links úteis</h4>

<ul>
    <li>Criação de Sites</li>
    <li>Anunciar no Google</li>
    <li>Plano de Marketing Digital</li>
    <li>Criar Loja Virtual</li>
    <li>Criação de Sites</li>
</ul>
            </Col>



        </Row>
    </Container>



    <Container>
        <Row>
    
            <Col md={6}>
                <h2>Vamos conversar?</h2>
            </Col>

            <Col md={6}>
                <div className="item text-right">
                    <a href="https://wa.me/5521967572277" target="_blank" className="cta-wp">Iniciar Conversa <i class="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </Col>

        </Row>
    </Container>

    


<Container>
    <Row>

    <Col md={6}>
        <p className="credits">
            <Link href="/servicos"><a>Política de Privacidade</a></Link> | <Link href="/servicos"><a>Termos de Serviços</a></Link>
        </p>
        <p className="credits">© 2021 Scafeli - Agência de Marketing Digital.</p>
    </Col>

    <Col md={6}>
        <ul className="social--footer">
            <li><a href="https://instagram.com/gustavoscafeli" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://facebook.com/gustavoscafeli" target="_blank"><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://behance.net/gustavoscafeli" target="_blank"><i class="fab fa-behance"></i></a></li>
            <li><a href="mailto:gustavo@scafeli.com.br" target="_blank"><i class="fas fa-envelope"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UC3qxlRY4Z9WbF_4QGK5CX-A" target="_blank"><i class="fab fa-youtube"></i></a></li>
        </ul>
    </Col>

    </Row>
</Container>

    



</footer>


</>
}

export default Footer

