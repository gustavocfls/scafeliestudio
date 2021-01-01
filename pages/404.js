// 404.js
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

import { Container, Row, Col, Button } from 'react-bootstrap'


export default function FourOhFour() {
  return <>

<Header />



<Container className="text-center page-error">

<h1>Página não encontrada</h1>

<p>A página que você procurou foi removida ou nunca existiu.</p>

<Link href="/">
  <a className="s-link">
    Voltar para o Início <i class="fas fa-undo-alt"></i>
  </a>
</Link>

</Container>


    <Footer />
  </>
}