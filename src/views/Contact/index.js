import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import Navbar from "../../components/Navbar";

import home from "../../assets/icons/home.png";

import styles from "./styles.module.css";

export default class Podcast extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className={styles.container}>
          <Col className={styles.column}>
            {/* <Row className={styles.row}>
              <Image src={sun} className={styles.icon} />
              <h1>Contact</h1>
            </Row>

            <p className={styles.text}>Drop us a line!</p>

            <Row>
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
            </Row> */}

            <iframe
              title="contact form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdy1jLa7sVwdzcwAFvPVg_ydtxpWmOdNPddfjp92gZq15pz1g/viewform?embedded=true"
              width="100%"
              height="800"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </Col>
        </Container>
      </div>
    );
  }
}
