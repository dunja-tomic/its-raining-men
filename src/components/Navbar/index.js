import React, { Component } from "react";

import { Image, Dropdown, Row } from "react-bootstrap";
// import { slide as Menu } from "react-burger-menu";

import home from "../../assets/icons/home.png";
import lightning from "../../assets/images/lightning.png";
import cloud from "../../assets/images/cloud.png";
import sun from "../../assets/images/sun.png";
import umbrella from "../../assets/images/umbrella.png";

import styles from "./styles.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className={styles.button}
          //   styles={{ backgroundColor: "white", border: "0" }}
        >
          <Image src={home} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">
            <Row className={styles.row}>
              <Image src={home} className={styles.icon} />
              <p className={styles.text}>Home</p>
            </Row>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/about">
            <Row className={styles.row}>
              <Image src={lightning} className={styles.icon} />
              <p className={styles.text}>About</p>
            </Row>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/podcast">
            <Row className={styles.row}>
              <Image src={cloud} className={styles.icon} />
              <p className={styles.text}>Podcast</p>
            </Row>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/its-raining-men">
            <Row className={styles.row}>
              <Image src={umbrella} className={styles.icon} />
              <p className={styles.text}>It's Raining Men</p>
            </Row>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/contact">
            <Row className={styles.row}>
              <Image src={sun} className={styles.icon} />
              <p className={styles.text}>Contact</p>
            </Row>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
