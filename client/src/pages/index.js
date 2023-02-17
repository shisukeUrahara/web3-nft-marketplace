import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Style from '../styles/index.module.css';
import { HeroSection,Service ,BigNftSlider,Subscribe,Title, Category, Filter, NFTCard, Collection, FollowerTab ,AudioLive} from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    <Title
        heading="Latest Audio Collection"
        content="Discover the most outstanding NFTs in all topics of life."
      />
    <AudioLive />
    {/* <Title
        heading="New collection"
        content="Discover the most outstanding NFTs in all topics of life."
      /> */}
      <FollowerTab />
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
    </div>


  );
}
