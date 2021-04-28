import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Row,
  Col,
  Container,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap";

import lightning from "../../assets/images/lightning.png";
import sun from "../../assets/images/sun.png";
import umbrella from "../../assets/images/umbrella.png";
import cloud from "../../assets/images/cloud.png";
import snowflake from "../../assets/images/snowflake.png";

import bitmoji_umbrella from "../../assets/images/bitmoji_umbrella.png";
import bitmoji_sun from "../../assets/images/bitmoji_sun.png";
import bitmoji_cloud from "../../assets/images/bitmoji_cloud.png";
import bitmoji_snow from "../../assets/images/bitmoji_snow.png";

import bottom_rainy from "../../assets/images/bottom_rainy.png";
import bottom_sun from "../../assets/images/bottom_sun.png";
import bottom_cloud from "../../assets/images/bottom_cloud.png";
import bottom_snowy from "../../assets/images/bottom_snowy.png";

import styles from "./styles.module.css";

const states = {
  SUNNY: "SUNNY",
  CLOUDY: "CLOUDY",
  RAINY: "RAINY",
  WINDING: "WINDING",
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_state: states.RAINY,
      curr_bitmoji: bitmoji_umbrella,
    };
  }

  changeToSunny = () => {
    this.setState({
      curr_state: states.SUNNY,
      curr_bitmoji: bitmoji_sun,
    });
  };

  changeToCloudy = () => {
    this.setState({ curr_state: states.CLOUDY, curr_bitmoji: bitmoji_cloud });
  };

  changeToSnowy = () => {
    this.setState({ curr_state: states.SNOWY, curr_bitmoji: bitmoji_snow });
  };

  changeToRainy = () => {
    this.setState({ curr_state: states.RAINY, curr_bitmoji: bitmoji_umbrella });
  };

  render() {
    return (
      <div>
        {/* Radio buttons */}
        <div className={styles.buttonContainer}>
          <ButtonGroup>
            <Button className={styles.button} onClick={this.changeToSunny}>
              <Image src={sun} className={styles.buttonIcon} />
            </Button>
            <Button className={styles.button} onClick={this.changeToSnowy}>
              <Image src={snowflake} className={styles.buttonIcon} />
            </Button>
            <Button className={styles.button} onClick={this.changeToRainy}>
              <Image src={umbrella} className={styles.buttonIcon} />
            </Button>
            <Button className={styles.button} onClick={this.changeToCloudy}>
              <Image src={cloud} className={styles.buttonIcon} />
            </Button>
          </ButtonGroup>
        </div>
        <Container className={styles.container}>
          <Row className={styles.row}>
            {/*  bitmoji */}
            <Col md className={styles.bitmojiCol}>
              <Image src={this.state.curr_bitmoji} className={styles.bitmoji} />
            </Col>

            {/* Headings */}
            <Col md className={styles.headingsCol}>
              {/* About */}
              <Link to="/about" className={styles.link}>
                <Row className={styles.headingsRow}>
                  <Image src={lightning} className={styles.icon} />
                  <h2>About</h2>
                </Row>
              </Link>

              {/* Podcast */}
              <Link to="/podcast" className={styles.link}>
                <Row className={styles.headingsRow}>
                  <Image src={cloud} className={styles.icon} />
                  <h2>Podcast</h2>
                </Row>
              </Link>

              {/* It's Raining Men */}
              <Link to="/its-raining-men" className={styles.link}>
                <Row className={styles.headingsRow}>
                  <Image src={umbrella} className={styles.icon} />
                  <h2>It's Raining Men</h2>
                </Row>
              </Link>

              {/* Contact */}
              <Link to="/contact" className={styles.link}>
                <Row className={styles.headingsRow}>
                  <Image src={sun} className={styles.icon} />
                  <h2>Contact</h2>
                </Row>
              </Link>
            </Col>
          </Row>
        </Container>

        {this.state.curr_state === states.RAINY && (
          <Image src={bottom_rainy} className={styles.bitmojiRaining} />
        )}

        {this.state.curr_state === states.SUNNY && (
          <Image src={bottom_sun} className={styles.bitmojiSunny} />
        )}

        {this.state.curr_state === states.CLOUDY && (
          <Image src={bottom_cloud} className={styles.bitmojiCloudy} />
        )}

        {this.state.curr_state === states.SNOWY && (
          <Image src={bottom_snowy} className={styles.bitmojiSnowy} />
        )}
      </div>
    );
  }
}
