import React from 'react';
import Image from 'next/legacy/image';
import Style from './HeroSection.module.css';
import { Button } from '..';
import images from '../../img'

const HeroSection = () => {
    return (
        <div className={Style.heroSection}>
            <div className={Style.heroSection_box}>
                <div className={Style.heroSection_box_left}>
                    <h1>Discover, collect, and sell NFTs</h1>
                    <p>
                        Discover the most outstanding NTFs in all topics of life. Creative
                        your NTFs and sell them
                    </p>
                    <Button btnText='Start your search' handleClick={() => { }} />
                </div>

                <div className={Style.heroSection_box_right}>
                    <Image src={images.hero} alt="Hero Section" height={600} width={600} objectFit="cover"
                    />

                </div>

            </div>
        </div>
    )
}

export default HeroSection