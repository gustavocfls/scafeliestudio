import "../styles/global.scss"
import Head from 'next/head'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

function Servicos() {
    return <>

    <Head>
        <title>SERVIÇOS // SCAFELI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />
    </Head>

    <Header />

    <section className="services">
        <div className="main--container flex wrap">
            <div className="item text-center">
                <h3>Fotografia</h3>
                <ul>
                    <li>Fotos para E-Commerce</li>
                    <li>Fotos para E-Commerce</li>
                    <li>Fotos para E-Commerce</li>
                    <li>Fotos para E-Commerce</li>
                    <li>Fotos para E-Commerce</li>
                </ul>
            </div>

            <div className="item text-center">
                <h3>Vídeos</h3>
                <ul>
                    <li>Vídeos Institucionais</li>
                    <li>Produtos / E-Commerce</li>
                    <li>Videoclipes</li>
                    <li>Fotos para E-Commerce</li>
                    <li>Fotos para E-Commerce</li>
                </ul>
            </div>

            <div className="item text-center">
                <h3>Internet</h3>
                <ul>
                    <li>Marketing de Influência</li>
                    <li>Gestão de Redes Sociais</li>
                    <li>Desenvolvimento Web</li>
                    <li>Gestão de E-Commerce</li>
                    <li>Fotos para E-Commerce</li>
                </ul>
            </div>
        </div>
    </section>


    <Footer />


    </>
}

export default Servicos