import Head from "next/head";
import Image from "next/image";

import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Head>
        <title>adidas® Superstar por Gustavo Scafeli</title>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="description"
          content="Desde 2014, já são mais de 300 clientes atendidos em todo o mundo e mais de 1 bilhão de pessoas impactadas pelo nosso trabalho. Fale conosco!"
        />

        <meta name="robots" content="all" />
        <meta content="pt_BR" property="og:locale" />
      </Head>

      <header className="text-center">
        <Container>
          <Image
            src="/logo.png"
            width="80"
            height="80"
            alt="adidas® Superstar"
          />
        </Container>
      </header>
    </>
  );
}
