import React from 'react';
import styles from './CollectionPicture.module.css';

const CollectionPicture = () => (
  <div className={styles.CollectionPicture}>
    <ul>
      <li>
        <figure>
          <img src={require("../../images/women.jpg")} />
          <figcaption>
            <span>COLLECTIONS</span>
            <h3>Women</h3>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src={require("../../images/children.jpg")} />
          <figcaption>
            <span>COLLECTIONS</span>
            <h3>Children</h3>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src={require("../../images/men.jpg")} />
          <figcaption>
            <span>COLLECTIONS</span>
            <h3>Men</h3>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
);

CollectionPicture.propTypes = {};

CollectionPicture.defaultProps = {};

export default CollectionPicture;