import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavBrand, Nav, NavItem, CollapsibleNav } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';

/*
function fetchData(getState, dispatch) {
  const promises = [];

  return Promise.all(promises);
}

@connectData(fetchData)
*/
@connect(
  state => ({app: state}),
  {pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    return nextProps;
  }

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
