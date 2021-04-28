import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import Navbar from "../../components/Navbar";

import lightning from "../../assets/images/lightning.png";
import twitter from "../../assets/icons/twitter.png";
import microphone from "../../assets/icons/microphone.png";
import email from "../../assets/icons/email.png";
import home from "../../assets/icons/home.png";
import polaroids from "../../assets/images/polaroids.png";

import styles from "./styles.module.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Container className={styles.container}>
          <Col className={styles.column}>
            <Image src={polaroids} className={styles.image} />
            <Row className={styles.row}>
              <Image src={lightning} className={styles.icon} />
              <h1>About</h1>
            </Row>

            <p className={styles.text}>
              You've found our About page, an improbable feat given that we
              started our writing and internet journey hiding our identities!
              Claudia Rush and Alexa Love are our noms de plume, chosen by our
              pre-teen selves. At the time, the safest thing we could do while
              still publishing our writing on FictionPress.com was to hide our
              true names.
              <br />
              <br />
              Today, more than a decade later, we can finally reveal that:
            </p>

            <p className={styles.list}>
              1) We are no longer pre-teens (and thankfully no longer teens,
              either)
              <br />
              2) Actually, Claudia is finishing her undergrad and Alexa is
              starting her Master’s!
              <br />
              3) A summer full of Just Dance 2 originally inspired the story we
              have recently excavated from our files and revived
              <br />
              4) We have written for NaNoWriMo
              <br />
              5) We are avid fans of The Great Canadian Baking Show
            </p>

            <Row style={{ marginBottom: "15vh", marginTop: "5vh" }}>
              <a
                href="https://twitter.com/UrWeatherGirls"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} />
              </a>
              <a
                href="https://anchor.fm/its-probably-raining-men"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={microphone} />
              </a>
              <a
                href="mailto:words.are.magic7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={email} />
              </a>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}
