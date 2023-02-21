import React from 'react';
import Image from 'next/legacy/image';

import Style from '../styles/aboutUs.module.css';
import images from '../img';
import { Brand } from '../components';


const aboutUs = () => {
    const founderArray = [
        {
          name: "Niamh O'Shea",
          position: "Co-founder and Chief Executive",
          images: images.founder1,
        },
        {
          name: "Danien Jame",
          position: "Co-founder and Chief Executive",
          images: images.founder2,
        },
        {
          name: "Orla Dwyer",
          position: "Co-founder, Chairman",
          images: images.founder3,
        },
        {
          name: "Dara Frazier",
          position: "Co-Founder, Chief Strategy Officer",
          images: images.founder4,
        },
      ];

      const factsArray = [
        {
          title: "10 million",
          info: "Articles have been public around the world (as of Sept. 30, 2021)",
        },
        {
          title: "100,000",
          info: "Registered users account (as of Sept. 30, 2021)",
        },
        {
          title: "220+",
          info: "Countries and regions have our presence (as of Sept. 30, 2021",
        },
      ];

  return (
    <div className={Style.aboutUs}>
        <div className={Style.aboutUs_box}>
            <div className={Style.aboutUs_box_hero}>
                <div className={Style.aboutUs_box_hero_left}>
                <h1>👋 About Us.</h1>
                <p>
                We’re impartial and independent, and every day we create
                distinctive, world-class programmes and content which inform,
                educate and entertain millions of people in the around the world.
               </p>
                </div>

                <div className={Style.aboutUs_box_right}>
                    <Image src={images.hero2} />
                </div>

            </div>

            <div className={Style.aboutUs_box_title}>
            <h2>⛱ Founder</h2>
            <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
            </p>

            </div>

            <div className={Style.aboutUs_box_founder}>
                <div className={Style.aboutUs_box_founder_box}>
                {founderArray.map((item, index) => (
              <div className={Style.aboutUs_box_founder_box_img} key={index+1}>
                <Image
                  src={item.images}
                  alt={item.name}
                  width={500}
                  height={500}
                  className={Style.aboutUs_box_founder_box_img_img}
                  objectFit="cover"
                />
                <h3>{item.name}</h3>
                <p>{item.position}</p>
              </div>
            ))}
                </div>
            </div>

            <div className={Style.aboutUs_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutUs_box_facts}>
          <div className={Style.aboutUs_box_facts_box}>
            {factsArray.map((item, index) => (
              <div className={Style.aboutUs_box_facts_box_info} key={index+1}>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>

        </div>

        <Brand />
    </div>
  )
}

export default aboutUs