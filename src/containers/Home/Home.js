import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <div className="container">
        </div>
      </div>
    );
  }
}
