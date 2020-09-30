import React, { useEffect, useState } from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import styles from './FeatureProduct.module.css';
import Slider from "react-slick";

const FeatureProduct = () => {
  const [screen, setScreen] = useState(window.innerWidth);
  const [settings, setSettings] = useState({
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow:  3,
    speed: 500
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSettings({
        slidesToShow: window.innerWidth <= 720 ? 1 : 3
      });
    });
  });

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div className={styles.FeatureProduct}>
        <Slider {...settings}>
            <div className={styles.FeatureProduct__slide}>
              <figure>
                <img src={require("../../images/cloth_1.jpg")} />
                <figcaption>
                  <h3>Tank Top</h3>
                  <p>Finding perfect t-shirt</p>
                  <span>$50</span>
                </figcaption>
              </figure>
            </div>
            <div className={styles.FeatureProduct__slide}>
              <figure>
                <img src={require("../../images/hero_1.png")} />
                <figcaption>
                  <h3>Corater</h3>
                  <p>Finding perfect products</p>
                  <span>$50</span>
                </figcaption>
              </figure>
            </div>
            <div className={styles.FeatureProduct__slide}>
              <figure>
                <img src={require("../../images/cloth_2.jpg")} />
                <figcaption>
                  <h3>Polo Shirt</h3>
                  <p>Finding perfect products</p>
                  <span>$50</span>
                </figcaption>
              </figure>
            </div>
            <div className={styles.FeatureProduct__slide}>
              <figure>
                <img src={require("../../images/cloth_1.jpg")} />
                <figcaption>
                  <h3>Tank Top</h3>
                  <p>Finding perfect t-shirt</p>
                  <span>$50</span>
                </figcaption>
              </figure>
            </div>
            <div className={styles.FeatureProduct__slide}>
              <figure>
                <img src={require("../../images/hero_1.png")} />
                <figcaption>
                  <h3>Corater</h3>
                  <p>Finding perfect products</p>
                  <span>$50</span>
                </figcaption>
              </figure>
            </div>
            <div className={styles.FeatureProduct__slide}>
              <figure>
                <img src={require("../../images/cloth_2.jpg")} />
                <figcaption>
                  <h3>Polo Shirt</h3>
                  <p>Finding perfect products</p>
                  <span>$50</span>
                </figcaption>
              </figure>
            </div>
          </Slider>
      </div>
    </ScrollAnimation>
  );
};

FeatureProduct.propTypes = {};

FeatureProduct.defaultProps = {};

export default FeatureProduct;
