import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useAccount } from "wagmi";
import Style from '../styles/index.module.css';
import { HeroSection,Service ,BigNftSlider,
  Subscribe,Title, Category, 
  Filter, NFTCard, Collection,
   FollowerTab ,AudioLive, Slider,
    Brand, Video,Loader} from "../components";

import { useNftMarketPlaceContext } from "src/Context/NftMarketPlaceContext";
import { getTopCreators } from "TopCreators/TopCreators";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {fetchNfts}=useNftMarketPlaceContext();
  const [showLoader,setShowLoader]=useState(false);
  const [nfts,setNfts]=useState([]);
  const [nftsCopy,setNftsCopy]=useState([]);
  const { address: currentAccount } = useAccount();

  //  creators list
  const creators=getTopCreators(nfts);
  console.log("**@ home page creators are , ",creators)


  useEffect(()=>{
    try {
      setShowLoader(true);
      if (currentAccount) {
        fetchNfts().then((items) => {
          console.log("**@ fetch nft home items are , ",items)
         if(items){
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
         }
        });
      }
      setShowLoader(false);
    } catch (err) {
      console.log("**@ search page , error while fetching nfts , error is ", err);
      setShowLoader(false);
    }
  },[currentAccount]);


  return (
   <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    <Title
        heading="Audio Collection"
        content="Discover the most outstanding NFTs in all topics of life."
      />
    <AudioLive />
      <FollowerTab TopCreator={creators} />
      <Slider />
    <Collection />
    <Title
        heading="Featured NFTs"
        content="Discover the most outstanding NFTs in all topics of life."
      />
    <Filter />
    {showLoader?<Loader />:<NFTCard NFTData={nfts} />}
    
    <Title
        heading="Browse by category"
        content="Explore the NFTs in the most featured categories."
      />
    <Category />
    <Subscribe />
    <Brand />
    <Video />
    </div>


  );
}
