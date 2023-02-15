import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Style from '../styles/index.module.css';
import { HeroSection,Service } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div className={Style.homePage}>
    <HeroSection />
    <Service />

   </div>
  );
}
