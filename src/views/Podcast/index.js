import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import Navbar from "../../components/Navbar";

import cloud from "../../assets/images/cloud.png";
import home from "../../assets/icons/home.png";

import styles from "./styles.module.css";

export default class Podcast extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Container className={styles.container}>
          <Col className={styles.column}>
            <Row className={styles.row}>
              <Image src={cloud} className={styles.icon} />
              <h1>Podcast</h1>
            </Row>

            <p className={styles.text}>
              In an unlikely marriage of podcast and audiobook, we have recorded
              our reactions to the original incarnation of{" "}
              <a
                href="/its-raining-men"
                target="_blank"
                rel="noopener noreferrer"
              >
                It’s Raining Men (novel by Claudia Rush & Alexa Love)
              </a>
              , while dramatically reading it. Over the course of a dozen or so
              episodes, we meet the ensemble cast of our story, cringe and
              squirm through the imagined lives of young adults written by 12
              year-olds (us), and occasionally pat ourselves on the back for
              good pacing or suspense.
              <br />
              <br />
              Find the latest episode below, and our{" "}
              <a
                href="https://anchor.fm/its-probably-raining-men"
                target="_blank"
                rel="noopener noreferrer"
              >
                full list of epsiodes here.
              </a>
            </p>

            <iframe
              title="podcast"
              src="https://anchor.fm/its-probably-raining-men/embed/episodes/Episode-8-Camping-Extravaganza-Part-1-ehltm8/a-a2s4m7k"
              height="102px"
              width="400px"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </Col>
        </Container>
      </div>
    );
  }
}
