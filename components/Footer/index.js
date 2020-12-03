import "./Footer.scss"

import Image from 'next/image'
import Link from 'next/link'


function Footer() {
       
    return <>

<footer>

    <div className="main--container flex wrap align-items-center border--b">

        
        <div className="item">
            <h2>E aí, vamos buscar os melhores resultados?</h2>
        </div>

        <div className="item text-right">
            <a href="https://wa.me/5521964105305" target="_blank" className="cta-wp">Vamoooooos <i class="fas fa-long-arrow-alt-right"></i></a>
        </div>

    </div>

    <div className="main--container flex wrap align-items-center">

        
        <div className="item">
            <Image
                src="/svg/logo-scafeli.svg"
                alt="FCKNG CRTVE STDIO"
                width="60"
                height="80"
            />
        </div>

        <div className="item text-right">
            <h3>FCNKG</h3>
            
        </div>

        <div className="item text-right">
            <h3>CRTVE</h3>
        </div>

        <div className="item text-right">
            <h3>STDIO</h3>
        </div>

    </div>

    <div className="main--container flex wrap align-items-center">

        
        <div className="item">
            <p className="credits"><a href="#">Política de Privacidade</a> | <a href="#">Termos de Serviços</a></p>
            <p className="credits">© 2020 Scafeli, Inc. Todos os direitos reservados.</p>
        </div>

       

        <div className="item text-right">

        <p className="credits"><a href="mailto:gustavo@scafeli.com.br">gustavo@scafeli.com.br</a> | <a href="https://wa.me/5521964105305" target="_blank">+55 21 96410-5305</a></p>
            

            <ul className="social--footer">

                <li><a href="https://facebook.com/scafeliestudio" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://instagram.com/scafeliestudio" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://behance.net/scafeliestudio" target="_blank"><i class="fab fa-behance"></i></a></li>
                <li><a href="https://unsplash.com/gustavoscafeli" target="_blank"><i class="fab fa-unsplash"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC3qxlRY4Z9WbF_4QGK5CX-A" target="_blank"><i class="fab fa-youtube"></i></a></li>
                
            </ul>

        </div>

    </div>



</footer>


</>
}

export default Footer

