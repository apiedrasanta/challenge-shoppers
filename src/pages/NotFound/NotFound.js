import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.css';

const NotFound = () => (
  <div className={styles.NotFound}>
    Sitio web no encontrado :(
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;