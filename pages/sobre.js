import "../styles/global.scss"
import Head from 'next/head'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import Image from 'next/image'

function Sobre() {
       
    return <>

<Header />


<Head>
        <title>SOBRE // SCAFELI</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />
    </Head>

    
    <section className="hero--about">
        <div className="main--container">

            <div className="about">

            <Image
                src="/svg/slogan-square.svg"
                alt="FCKNG CRTVE STDIO"
                width="600"
                height="600"
            />
               
            </div>
                        
        </div>
    </section>

    <section>
        <div className="main--container text-center">
            <h2>Cada marca tem indicadores de sucesso ligeiramente diferentes. Avaliamos os nossos pela lista crescente de clientes recorrentes e resultados que excedem consistentemente os padrões da indústria. Somos inovadores, mudamos o jogo e temos orgulho de cada projeto que tocamos. Somos a Scafeli.</h2>
        </div>
    </section>


    <section className="adv--about">
        <div className="main--container flex wrap align-items-center">
            <div className="item">
                <ul>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                </ul>
            </div>

            <div className="item">
                <ul>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
                    <li><i class="fas fa-check"></i> Estrutura de preços abrangente com pagamentos flexíveis.</li>
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



    <section>
        <div className="main--container">
            <div>
            Nossa missão é liderar a criação de conteúdo gerado por influenciadores que permaneça envolvente, chame a atenção e resulte nas métricas que importam para as marcas.
            </div>
        </div>
    </section>
    
    
    <Footer />
    
    </>
}

export default Sobre