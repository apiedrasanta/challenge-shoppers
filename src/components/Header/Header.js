import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.Header}>
    <div className={styles.Header__content}>
      <div className={styles.Header__search}>
        <i className="icon-search"></i>
        <input type="text" placeholder="Search" id="search" />
      </div>
      <div className={styles.Header__title}>
        <h1>SHOPPERS</h1>
      </div>
      <div className={styles.Header__icons}>
        <i className="icon-user"></i>
        <i className="icon-heart-o"></i>
        <i className="icon-cart"></i>
      </div>
    </div>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;