import React from "react";
import "../styles/global.scss"
import Link from 'next/link'
import Image from 'next/image'
import { Nav, Navbar, Container, Row, Col, Button, Badge } from 'react-bootstrap'

function Bio() {
    return <>

    <section className="bio">
        <Container className="text-center">
        <Image
            src="/bio-scafeli.png"
            alt="Scafeli"
            width="100"
            height="100"
        />

        <p><b>Scafeli</b> <i class="fas fa-check-circle"></i> <br></br>Conteúdos Digitais</p>


            <ul>
                <li><a href="https://wa.me/5521964105305">Fale conosco no WhatsApp <i class="fab fa-whatsapp"></i></a></li>
                <li><a href="https://behance.com/scafeliestudio">Veja mais trabalhos <i class="fab fa-behance"></i></a></li>
                
                <li><a href="https://scafeli.com.br/blog">Últimos posts no blog <i class="fas fa-asterisk"></i></a></li>
                <li><a href="https://scafeli.com.br">Conheça o nosso site <i class="fas fa-bolt"></i></a></li>
                <li><a href="https://scafeli.com.br/sobre">Sobre a Scafeli <i class="fas fa-award"></i></a></li>
            </ul>

            <p className="credits">May the force be with you! <br></br><i class="fas fa-jedi"></i></p>
        </Container>
    </section>


</>
}
export default Bio
