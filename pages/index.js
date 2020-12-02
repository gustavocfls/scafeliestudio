import "../styles/styles.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'


function Home() {
    return <>

    <Header />

    <Head>
        <title>SCAFELI // FCKNG CRTVE STDIO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />
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

            <h3>Marketing de Influência 
                <small>Produção de Conteúdo</small> 

                Gestão de Redes Sociais 
                <small>Campanhas Publicitárias</small> 
                
                Desenvolvimento Web 
                <small>Gestão de E-Commerce</small>

                Produção Executiva 
                
                </h3>

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

                <Link href="/sobre">
                    <a className="s-link">Saiba mais sobre a Scafeli <i class="fas fa-arrow-right"></i> </a>
                </Link>

            </div>

            <div className="item">

            <Image
            layout="responsive"

            src="/supreme-scafeli.png"
            alt="Scafeli"
            height="1650"
            width="1275"
                    />

            </div>

        </div>

        <div className="main--container">


{/* <div className="flex wrap">
    <div className="item">
    <Image
 layout="responsive"

 src="/svg/microsoft.svg"
 alt="Picture of the author"
 height="200"
 width="250"
         />
    </div>

    <div className="item">
    <Image
 layout="responsive"

 src="/svg/microsoft.svg"
 alt="Picture of the author"
 height="200"
 width="250"
         />
    </div>

    <div className="item">
    <Image
 layout="responsive"

 src="/svg/microsoft.svg"
 alt="Picture of the author"
 height="200"
 width="250"
         />
    </div>

    <div className="item">
    <Image
 layout="responsive"

 src="/svg/microsoft.svg"
 alt="Picture of the author"
 height="200"
 width="250"
         />
    </div>

    <div className="item">
    <Image
 layout="responsive"

 src="/svg/microsoft.svg"
 alt="Picture of the author"
 height="200"
 width="250"
         />
    </div>
</div> */}


</div>



    </section>

    



    <Footer />

        
        
    </>
}



export default Home

