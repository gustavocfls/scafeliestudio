import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'


export default function Cta() {
    return(
        <>
        
<section className="text-center cta">
    <Container>
    <Link href="contato">
                <a>
        <div className="cta-area">
            <h3>Fale conosco!</h3>
        </div>
        </a>
            </Link>
    </Container>
</section>

        
        
        </>
    )
}