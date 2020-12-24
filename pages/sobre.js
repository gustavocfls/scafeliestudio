import "../styles/global.scss"
import Head from 'next/head'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import Image from 'next/image'

function Sobre() {
       
    return <>

<Header />


<Head>
        <title>Sobre - Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />
    </Head>

    


    <section>
        <div className="main--container">

            <h1>Sobre</h1>
<p>Um estúdio completo à disposição da sua marca!</p>

            <h2>Cada marca tem indicadores de sucesso ligeiramente diferentes. Avaliamos os nossos pela lista crescente de clientes recorrentes e resultados que excedem consistentemente os padrões da indústria. Somos inovadores, mudamos o jogo e temos orgulho de cada projeto que tocamos. Somos a Scafeli.</h2>
        
            <h3>UFRJ, Globo.com, BNDES, Prefeitura do Rio, Microsoft,   alguns blogs como Omelete, Homens da Casa e muitos outros.</h3>
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