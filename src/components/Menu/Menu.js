import React from 'react';
import styles from './Menu.module.css';

const Menu = () => (
  <div className={styles.Menu}>
    <nav>
      <ul>
        <li>
          <a href="">HOME</a>
        </li>
        <li>
          <a href="">ABOUT</a>
        </li>
        <li>
          <a href="">SHOP</a>
        </li>
        <li>
          <a href="">CATALOGUE</a>
        </li>
        <li>
          <a href="">NEW ARRIVALS</a>
        </li>
        <li>
          <a href="">CONTACT</a>
        </li>
      </ul>
    </nav>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
