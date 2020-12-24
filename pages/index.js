import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

function Home() {
    return <>

    <Header />

    <Head>
        <title>Scafeli | Publicidade e Marketing</title>
        <meta name="description" content="Desde 2014, já são mais de 200 clientes atendidos por todo o mundo e milhões de pessoas impactadas pelo nosso trabalho. Isso é Scafeli." />

        <meta name="robots" content="all" />

        <meta content="pt_BR" property="og:locale" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />

        <link href="https://www.scafeli.com.br" rel="canonical" />
        <link href="https://www.scafeli.com.br" rel="home" />
    </Head>



    <section className="hero">
        
        <div className="main--container text-center">

            <h1>Fckng Crtve Stdio</h1>
            <p>Um estúdio de criação que atende as melhores marcas e pessoas do mundo desde 2014.</p>


            <div
                className="video"
                style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
                }}
            >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/BqGvwzaVL9I`}
          frameBorder="0"
        />
      </div>

            

        </div>

    </section>


    
    <section className="services--home">
        <div className="main--container text-center">


            <ul>
                <li>Campanhas Publicitárias</li>
                <li>Produção de Conteúdo</li>
                <li>Gestão de Redes Sociais</li>
                <li>Marketing de Influência</li>
                <li>Desenvolvimento Web</li>
                <li>E-Commerce</li>
            </ul>

            <Link href="/servicos">
                <a className="s-link">Saiba mais sobre nossos serviços <i class="fas fa-arrow-right"></i></a>
            </Link>
            
        </div>
    </section>


    <section className="call--about">
        <div className="main--container align-items-center flex wrap">
            
            <div className="item content-call--about">

                <p>Entregamos experiências, não anúncios.</p>

                <h2>Criamos parcerias para fornecer conteúdos incríveis e campanhas de marketing com resultados reais. </h2>

                <p>Desde 2014, já são mais de 200 clientes atendidos por todo o mundo e milhões de pessoas impactadas pelo nosso trabalho.</p>

                <p>é apenas o começo.</p>

                <Link href="/sobre">
                    <a className="s-link">Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i> </a>
                </Link>

            </div>

            <div className="item">

                <Image
                    layout="responsive"
                    src="/supreme-scafeli.png"
                    alt="Scafeli"
                    height="1200"
                    width="1200"
                />

            </div>

        </div>

        <div className="main--container">

</div>



    </section>

    



    <Footer />

        
        
    </>
}



export default Home

