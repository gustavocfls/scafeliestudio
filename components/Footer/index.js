import "./Footer.scss"

import Link from 'next/link'


function Footer() {
       
    return <>

<footer>

    <div className="main--container flex wrap align-items-center border--b">

        
        <div className="item">
            <h2>Vamos conversar?</h2>
        </div>

        <div className="item text-right">
            <a href="https://wa.me/5521964105305" target="_blank" className="cta-wp">WhatsApp Comercial <i class="fas fa-long-arrow-alt-right"></i></a>
        </div>

    </div>


    <div className="main--container flex wrap align-items-center">

        
        <div className="item">
            <p className="credits">

            <Link href="/servicos"><a>Política de Privacidade</a></Link> | <Link href="/servicos"><a>Termos de Serviços</a></Link>

            </p>

            <p className="credits">© 2021 Scafeli Publicidade e Marketing. Todos os direitos reservados.</p>
        </div>

       

        <div className="item text-right">

        <p className="credits"><a href="https://wa.me/5521964105305" target="_blank">+55 21 96410-5305</a></p>
            

            <ul className="social--footer">
                <li><a href="https://instagram.com/scafelistudio" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://facebook.com/scafelistudio" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://behance.net/scafelistudio" target="_blank"><i class="fab fa-behance"></i></a></li>
                <li><a href="mailto:contato@scafeli.com.br" target="_blank"><i class="fas fa-envelope"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC3qxlRY4Z9WbF_4QGK5CX-A" target="_blank"><i class="fab fa-youtube"></i></a></li>
            </ul>

        </div>

    </div>



</footer>


</>
}

export default Footer

