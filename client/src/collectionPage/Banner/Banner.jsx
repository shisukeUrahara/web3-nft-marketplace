import React from 'react';
import Image from 'next/legacy/image';
import Style from './Banner.module.css';

const Banner = ({ bannerImage }) => {
    return (
        <div className={Style.banner}>
            <div className={Style.banner_img}>
                <Image src={bannerImage} objectFit="cover" alt="background" height={300} width={1600} />
            </div>

            <div className={Style.banner_img_mobile}>
                <Image src={bannerImage} objectFit="cover" alt="background" height={900} width={1600} />
            </div>

        </div>
    )
}

export default Banner