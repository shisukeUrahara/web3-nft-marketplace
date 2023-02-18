import React from 'react';
import { Banner,CollectionProfile } from 'src/collectionPage';
import { Slider,Brand } from '../components';
import Filter from '../components/Filter/Filter'

import Style from '../styles/collection.module.css';
import images from '../img';

const collection = () => {
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1}/>

    </div>
  )
}

export default collection