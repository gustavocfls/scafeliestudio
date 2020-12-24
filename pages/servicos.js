import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

function Servicos() {
    return <>

    <Head>
        <title>Serviços - Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />
    </Head>

    <Header />


    <section className="adv--about">
        <div className="main--container flex wrap align-items-center">
            <div className="item">
                <ul>
                    <li><i class="fas fa-check"></i> Fashion Film</li>
                    <li><i class="fas fa-check"></i> Fotografia de Moda</li>
                    <li><i class="fas fa-check"></i> Direção e Produção Criativa</li>
                    <li><i class="fas fa-check"></i> Gestão de Redes Sociais</li>
                    <li><i class="fas fa-check"></i> Marketing de Influência</li>
                    <li><i class="fas fa-check"></i> Fashion Branding</li>
                    <li><i class="fas fa-check"></i> E-Commerce e Webdesign</li>
                </ul>
            </div>

          

            <div className="item">
                <Image
                    src="/scafeli-about.jpg"
                    alt="FCKNG CRTVE STDIO"
                    width="600"
                    height="600"
                />
            </div>
        </div>
    </section>



    <Footer />


    </>
}

export default Servicos