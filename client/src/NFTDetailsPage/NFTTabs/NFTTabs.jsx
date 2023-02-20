import React from 'react';
import Image from 'next/legacy/image';

import Style from './NFTTabs.module.css';

const NFTTabs = ({ data, icon }) => {
    return (
        <div className={Style.NFTTabs}>
            {
                data.map((item, index) => (
                    <div className={Style.NFTTabs_box} key={index + 1}>
                        <Image
                            src={item}
                            alt="profile image"
                            width={40}
                            height={40}
                            className={Style.NFTTabs_box_img}
                        />

                        <div className={Style.NFTTabs_box_info}>
                            <span>Offer by $770 by <span>Shisuke Urahara</span></span>
                            {icon}
                            <small>  June 14 - 12:03pm</small>

                        </div>

                    </div>

                ))
            }

        </div>
    )
}

export default NFTTabs