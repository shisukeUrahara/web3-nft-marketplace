import React,{useState,useEffect} from 'react'

import Style from '../styles/author.module.css';
import { Banner ,NFTCardTwo} from 'src/collectionPage';
import { Brand,Title } from '../components';
import { AuthorProfileCard,AuthorTabs,AuthorNFTCardBox } from 'src/authorPage';
import images from '../img';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';

const author = () => {
    const followerArray = [
        {
          background: images.creatorbackground1,
          user: images.user1,
          seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
          seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground3,
          user: images.user3,
          seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground4,
          user: images.user4,
          seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground5,
          user: images.user5,
          seller: "7d64gf748849j47fy488444",
        },
        {
          background: images.creatorbackground6,
          user: images.user6,
          seller: "7d64gf748849j47fy488444",
        },
      ];

const [option,setOption]=useState('collectibles');


  return (
    <div className={Style.Banner}>
        <Banner bannerImage={images.creatorbackground3} />
        <AuthorProfileCard />
        <AuthorTabs option={option} setOption={setOption}/>
        <AuthorNFTCardBox option={option} setOption={setOption} />
        <Title
        heading="Popular Creators"
        content="Click on music icon and enjoy NTF music or audio"
      />

      <div className={Style.author_box}>
        {followerArray.map((item, index) => (
          <FollowerTabCard key={index+1} index={index} item={item} />
        ))}
      </div>
      <Brand />
     

    </div>
  )
}

export default author