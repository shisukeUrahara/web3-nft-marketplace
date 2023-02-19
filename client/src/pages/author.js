import React,{useState,useEffect} from 'react'

import Style from '../styles/author.module.css';
import { Banner ,NFTCardTwo} from 'src/collectionPage';
import { Brand,Title } from '../components';
import { AuthorProfileCard,AuthorTabs } from 'src/authorPage';
import images from '../img';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';

const author = () => {
    const popularArray=[
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8
];

const [option,setOption]=useState('collectibles');


  return (
    <div className={Style.Banner}>
        <Banner bannerImage={images.creatorbackground3} />
        <AuthorProfileCard />
        <AuthorTabs option={option} setOption={setOption}/>
        <Title
        heading="Popular Creators"
        content="Click on music icon and enjoy NTF music or audio"
      />
      <Brand />
      {/* {
        popularArray.map((item,index)=>(
            <FollowerTabCard key={index+1} item={item} index={index} />
        ))
      } */}

    </div>
  )
}

export default author