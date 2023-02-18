import React from 'react';
import { Banner,CollectionProfile ,NFTCardTwo} from 'src/collectionPage';
import { Slider,Brand } from '../components';
import Filter from '../components/Filter/Filter'

import Style from '../styles/collection.module.css';
import images from '../img';

const collection = () => {
  const collectionArray = [
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
    {
      image: images.nft_image_3,
    },
    {
      image: images.nft_image_1,
    },
    {
      image: images.nft_image_2,
    },
  ];

  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1}/>
      <CollectionProfile />
      <NFTCardTwo  NFTData={collectionArray} />
      <Filter />
      <Slider />
      <Brand />
    </div>
  )
}

export default collection