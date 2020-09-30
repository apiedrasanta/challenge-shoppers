import React from 'react';
import PropTypes from 'prop-types';
import styles from './SliderAside.module.css';

const SliderAside = () => (
  <div className={styles.SliderAside}>
    <ul>
      <li>
        <div>
          <i className="icon-truck"></i>
        </div>
        <div>
          <h3>FREE SHIPPING</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus at iaculis quam.  Interger accumsan tincidunt fringillia</p>
        </div>
      </li>
      <li>
      <div>
        <i className="icon-spinner11"></i>
        </div>
        <div>
          <h3>FREE RETURNS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus at iaculis quam.  Interger accumsan tincidunt fringillia</p>
        </div>
      </li>
      <li>
        <div>
          <i className="icon-help"></i>
        </div>
        <div>
          <h3>CUSTOMER SUPPORT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus at iaculis quam.  Interger accumsan tincidunt fringillia</p>
        </div>
      </li>
    </ul>
  </div>
);

SliderAside.propTypes = {};

SliderAside.defaultProps = {};

export default SliderAside;
