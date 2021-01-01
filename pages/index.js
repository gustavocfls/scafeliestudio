import React from "react";

import "../styles/global.scss"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Container, Row, Col, Button } from 'react-bootstrap'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

function Home(props) {
    return <>

    <Header />

    <Head>
        <title>Scafeli - Marketing Digital sob medida para PMEs</title>
        <meta name="description" content="A Scafeli é a sua agência de marketing digital. Gestão inteligente de redes. Planos a partir de R$89/mês." />

        <meta name="robots" content="all" />

        <meta content="pt_BR" property="og:locale" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Scafeli" key="title" />

        <link href="https://www.scafeli.com.br" rel="canonical" />
        <link href="https://www.scafeli.com.br" rel="home" />

        <script src="//code.jivosite.com/widget/IzyMPqdDXw" async></script>

    </Head>
    
    <section className="hero d-flex">        
        
        <Container>

            <Row className="align-items-center">
                <Col md={6}>
                
                {/* <p>Muito mais que uma agência</p> */}
                <h1>Ajudamos a sua empresa crescer na internet</h1>
                <p className="lead">Site velho e parado? Redes sociais sem engajamento e vendas? Mude para a Scafeli e se destaque no universo digital.</p>

                </Col>


                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/girl-hero.png"
                        alt="Scafeli"
                        height="1200"
                        width="1200"
                    />
                </Col>

            </Row>            

        </Container>
        
    </section>

    {/* <section>
        <Container>
        <h1>Blog list</h1>
        <ul>
            {props.blogs.map((blog, idx) => {
            return (
                <li key={blog.id}>
                <Link href={`/blog/${blog.slug}`}>
                    <a>{blog.title}</a>
                </Link>
                </li>
            );
            })}
        </ul>
        </Container>
    </section> */}



    <section className="plans-home">
        <Container>
            <Row>
                <Col md={4}>
                    <div className="s-plan-home">
                        <h2>Social Media</h2>
                        <p>Conteúdos e estratégias para aumentar o seu engajamento</p>
                        
                        <p>a partir de</p>
                        <h2><small>R$ </small>189 <small>/mês</small></h2>

                        <Button variant="outline-primary">Saiba mais</Button>

                    </div>
                </Col>

                <Col md={4}>
                    <div className="s-plan-home">
                        <h2>Criação de Sites</h2>
                        <p>Todos os recursos para colocar o seu site ou loja virtual no ar</p>

                        <p>a partir de</p>
                        <h2><small>R$ </small>129 <small>/mês</small></h2>

                        <Button variant="outline-primary">Saiba mais</Button>
                    </div>
                </Col>

                <Col md={4}>
                    <div className="s-plan-home">
                        <h2>Marketing Digital</h2>
                        <p>Uma equipe inteira trabalhando para o seu negócio</p>

                        <p>a partir de</p>
                        <h2><small>R$ </small>1.490 <small>/mês</small></h2>

                        <Button variant="outline-primary">Saiba mais</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>


    <section className="d-flex social-home">

        <Container>
            <Row className="align-items-center">

                <Col md={6}>

                    <h1 className="p-color">Social Media</h1>
                    <h1>Gestão inteligente e produção de conteúdo para redes sociais.</h1>

                    <Link href="/sobre">
                        <a className="s-link">Conheça nossos planos <i class="fas fa-arrow-right"></i> </a>
                    </Link>

                </Col>

                <Col md={6}>
                    <Image
                        layout="responsive"
                        src="/supreme-scafeli.png"
                        alt="Scafeli"
                        height="1200"
                        width="1200"
                    />
                </Col>
                
            </Row>
        </Container>
        
    </section>

    



    <Footer />

        
        
    </>
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
    const fs = require("fs");
    const matter = require("gray-matter");
    const { v4: uuid } = require("uuid");
  
    const files = fs.readdirSync(`${process.cwd()}/contents`, "utf-8");
  
    const blogs = files
      .filter((fn) => fn.endsWith(".md"))
      .map((fn) => {
        const path = `${process.cwd()}/contents/${fn}`;
        const rawContent = fs.readFileSync(path, {
          encoding: "utf-8",
        });
        const { data } = matter(rawContent);
  
        return { ...data, id: uuid() };
      });
  
      // By returning { props: blogs }, the IndexPage component
    // will receive `blogs` as a prop at build time
    return {
      props: { blogs },
    };
  }
  



export default Home

