import React from 'react';

import Style from '../styles/searchPage.module.css';
import { Slider,Brand } from '../components';
import { SearchBar } from 'src/searchPage';
import { Filter } from '../components';
import { NFTCardTwo,Banner } from 'src/collectionPage';
import images from '../img';

const searchPage = () => {
    const collectionArray = [
    {
      image:images.nft_image_1
    },
    {
      image:images.nft_image_2
    },{
      image:images.nft_image_3
    },{
      image:images.nft_image_1
    },{
      image:images.nft_image_2
    },{
      image:images.nft_image_3
    },{
      image:images.nft_image_1
    },{
      image:images.nft_image_2
    },
   
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2}/>
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />

    </div>
  )
}

export default searchPage