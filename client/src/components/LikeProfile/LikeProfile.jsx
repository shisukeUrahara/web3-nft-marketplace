import React from 'react';
import Image from 'next/legacy/image';

import Style from './LikeProfile.module.css';
import images from '../../img';

const LikeProfile = () => {
    const imageArray = [1, 2, 3, 4];

    return (
        <div className={Style.like}>
            {
                imageArray.map((item, index) => (
                    <div className={Style.like_box} key={index + 1}>
                        <Image
                            src={images.user + `${index + 1}`}
                            width={15}
                            height={15}
                            objectFit="cover"
                            key={index + 1}
                        />

                    </div>


                ))
            }

        </div>
    )
}

export default LikeProfile