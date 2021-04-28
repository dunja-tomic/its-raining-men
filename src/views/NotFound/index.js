import React, { Component } from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import Navbar from "../../components/Navbar";

import not_found_gif from "../../assets/gifs/404.gif";
import home from "../../assets/icons/home.png";
import tornado from "../../assets/images/tornado.png";

import styles from "./styles.module.css";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className={styles.container}>
          <Col className={styles.column}>
            <Row className={styles.row}>
              <Image src={tornado} className={styles.icon} />
              <h1>Oh, no! Page not found.</h1>
            </Row>
            <p className={styles.text}>
              They say that not all who wander are lost, but you sure are.
            </p>
            <Image src={not_found_gif} />
          </Col>
        </Container>
      </div>
    );
  }
}
