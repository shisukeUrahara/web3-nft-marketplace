import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Style from '../styles/index.module.css';
import { HeroSection,Service ,BigNftSlider,Subscribe, Title} from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className={Style.homePage}>
    <HeroSection />
    <Service />
    <BigNftSlider />
    <Subscribe />
    <Title
        heading="Browse by category"
        content="Explore the NFTs in the most featured categories."
      />   </div>
  );
}
