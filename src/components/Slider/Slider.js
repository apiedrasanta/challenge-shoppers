import React from 'react';
import styles from './Slider.module.css';
import Slick from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Slider = () => (
  <div className={styles.Slider}>
    <Slick {...settings}>
      <div className={styles.Slider__content}>
        <img src={require("../../images/hero_1.jpg")} />
        <div className={styles.Slider__description__1}>
          <div>
            <h2>Finding Your Perfect Shoes</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus at iaculis quam.  Integer accumsan tincidunt fringilla</p>
            <a className="button" href="#">SHOP NOW</a>
          </div>
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slick>
  </div>
);

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
