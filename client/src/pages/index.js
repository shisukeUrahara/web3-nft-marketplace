import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Style from '../styles/index.module.css';
import { HeroSection,Service ,BigNftSlider,
  Subscribe,Title, Category, 
  Filter, NFTCard, Collection,
   FollowerTab ,AudioLive, Slider,
    Brand, Video} from "../components";

import { useNftMarketPlaceContext } from "src/Context/NftMarketPlaceContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {checkIfWalletConnected}=useNftMarketPlaceContext();

  useEffect(()=>{

checkIfWalletConnected();
  },[]);


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
      <FollowerTab />
      {/* <Title
        heading="Explore NFTs Video"
        content="Click on play icon and enjoy NFTs video"
      /> */}
      <Slider />
    <Collection />
    <Title
        heading="Featured NFTs"
        content="Discover the most outstanding NFTs in all topics of life."
      />
    <Filter />
    <NFTCard />
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
