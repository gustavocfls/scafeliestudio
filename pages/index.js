import React from "react";

import "../styles/global.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Nav,
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";

function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>50 anos de adidas Superstar</h1>
            </Col>

            <Col md={6}>
              <Image
                src="/kareem-abdul-jabbar-superstar-adidas-ad.jpg"
                width="600"
                height="800"
                alt="adidas® Superstar"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Home;
