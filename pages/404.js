// 404.js
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

export default function FourOhFour() {
  return <>

<Header />


<div className="main--container">

<h1>404 - Página não encontrada</h1>

<Image
        src="/error.gif"
        alt="Página não encontrada - Scafeli"
        width="250"
        height="214"
    />


<Link href="/">
  <a className="s-link">
    Voltar para o Início
  </a>
</Link>


</div>
    



    <Footer />
  </>
}