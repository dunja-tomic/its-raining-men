import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import Navbar from "../../components/Navbar";

import umbrella from "../../assets/images/umbrella.png";
import home from "../../assets/icons/home.png";
import book from "../../assets/icons/book.png";
import nano_logo from "../../assets/icons/nano_logo.png";
import comments from "../../assets/images/comments.png";

import styles from "./styles.module.css";

export default class RainingMen extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className={styles.container}>
          <Col className={styles.column}>
            <Row className={styles.row}>
              <Image src={umbrella} className={styles.icon} />
              <h1>It's Raining Men</h1>
            </Row>

            <p className={styles.text}>
              They say lightning doesn’t strike twice, but we wrote the original
              (incomplete) manuscript to It’s Raining Men with fervour, mostly
              flying by the seats of our pants with respect to plot. And it
              shows. Now, more than a decade later, we’ve been called back to
              reimagine the story.
              <br /> <br />
              Based on the simple (in theory, but not in practice) idea that men
              might fall from the sky upon the collective wish from a group of
              girls, we started writing It’s Raining Men in 2011. The idea was
              originally conceived during a camping trip our families take
              together yearly, and then the writing began! We supposedly
              “edited” our early chapters as we went, eventually publishing them
              to FictionPress.com (
              <a
                href="https://www.fictionpress.com/s/2930163/1/It-s-Raining-Men"
                target="_blank"
                rel="noopener noreferrer"
              >
                link here
              </a>
              ). We won’t make you navigate there, but we do want you to see
              some of the smashing reviews we were getting.
            </p>

            <Image src={comments} className={styles.comments} />

            <p className={styles.text}>
              <br />
              Sadly, we left our ardent fan base hanging, with the tenth being
              our last published chapter.
              <br />
              <br />
              Recently having found the document, we decided it might be fun to
              record our reactions in podcast form while reading the story out
              loud (see{" "}
              <a href="/podcast" target="_blank" rel="noopener noreferrer">
                Podcast
              </a>
              ). Our favourites are the Camping Extravaganza episodes. This was
              a blast to record, and led us down the path to thinking how we
              might re-imagine the story and characters.
            </p>
          </Col>
        </Container>
      </div>
    );
  }
}
