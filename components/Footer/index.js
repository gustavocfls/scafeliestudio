import Image from 'next/image'
import Link from 'next/link'

import { Container, Row, Col } from 'react-bootstrap'


export default function Footer () {
    return (<>


<footer>
        <Container className="text-center">

            <ul>
                <li><a target="_blank" href="https://instagram.com/agenciascafeli"><i class="fab fa-instagram"></i></a></li>

                <li><a target="_blank" href="http://be.net/agenciascafeli"><i class="fab fa-behance"></i></a></li>
                
                <li><a target="_blank" href="https://www.youtube.com/channel/UC3qxlRY4Z9WbF_4QGK5CX-A"><i class="fab fa-youtube"></i></a></li>

                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=5521964105305&text=Ol%C3%A1!%20Eu%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20produ%C3%A7%C3%A3o%20de%20conte%C3%BAdo%20da%20Scafeli."><i class="fab fa-whatsapp"></i></a></li>
            </ul>

            <p>Copyright © All rights reserved.</p>
            
        </Container>
    </footer>

    </>)
}
