import "./Footer.scss"

import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap'


function Footer() {
       
    return <>

<footer>


    <Container>
        <Row>
    
            <Col md={6}>
                <h2>Vamos conversar?</h2>
            </Col>

            <Col md={6}>
                <div className="item text-right">
                    <a href="https://wa.me/5521967572277" target="_blank" className="cta-wp">WhatsApp Comercial <i class="fas fa-long-arrow-alt-right"></i></a>
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
        <p className="credits">© 2021 Scafeli - Agência de Publicidade e Marketing.</p>
    </Col>

    <Col md={6}>
        <p className="credits"><a href="https://wa.me/5521967572277" target="_blank">+55 21 96757-2277</a></p>
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

