import "../styles/global.scss"
import Link from 'next/link'

import Image from 'next/image'

function Bio( {stars} ) {
    return <>


<section className="bio">
 
    <div className="bio-links">

        

       
    <Image
            src="/svg/logo-scafeli.svg"
            alt="Gustavo Scafeli"
            width="55"
            height="80"
        />


<h3>Scafeli <i class="fas fa-check-circle"></i></h3>
<p>Publicidade e Marketing</p>

        <ul>
            <li>
                <Link href="/">
                    <a>Fale Conosco no WhatsApp</a>
                </Link>
            </li>

            <li>
                <Link href="/">
                    <a>PROMO 50% OFF // SS21</a>
                </Link>
            </li>

            <li>
                <a href="#">Veja nossos últimos trabalhos</a>
            </li>

            
        </ul>

        <p classNam="credits"> © 2021 Scafeli Publicidade e Marketing.</p>

        Next stars: {stars}

        </div>

       

</section>



</>

Page.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/user/gustavocfls')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

}
export default Bio





