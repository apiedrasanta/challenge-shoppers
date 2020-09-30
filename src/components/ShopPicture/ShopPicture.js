import React from 'react';
import styles from './ShopPicture.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const ShopPicture = () => (
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={true}>
    <div className={styles.ShopPicture}>
      <div>
        <div>
          <img src={require("../../images/blog_1.jpg")} />
        </div>
        <div>
          <h3>50% less in all times</h3>
          <span>By Alfonso Piedrasanta - September 2020</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus at iaculis quam.  Integer accumsan tincidunt fringilla</p>
          <a className="button" href="#">SHOP NOW</a>
        </div>
      </div>
    </div>
  </ScrollAnimation>
);

ShopPicture.propTypes = {};

ShopPicture.defaultProps = {};

export default ShopPicture;
