import React from 'react';
import styles from './Home.module.css';
import Layout from './../../layout/Layout/Layout';
import Header from './../../components/Header/Header.lazy';
import Menu from './../../components/Menu/Menu.lazy';
import Slider from './../../components/Slider/Slider.lazy';
import SliderAside from './../../components/SliderAside/SliderAside.lazy';
import CollectionPicture from './../../components/CollectionPicture/CollectionPicture.lazy';
import FeatureProduct from './../../components/FeatureProduct/FeatureProduct.lazy';
import ShopPicture from './../../components/ShopPicture/ShopPicture.lazy';
import Footer from './../../components/Footer/Footer.lazy';

const Home = () => (
  <div className={styles.Home}>
    <Layout>
      <Header />
      <hr style={{margin: "0"}} />
      <Menu />
      <Slider />
      <SliderAside />
      <hr />
      <CollectionPicture />
      <FeatureProduct />
      <hr />
      <ShopPicture />
      <hr />
      <Footer />
    </Layout>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
