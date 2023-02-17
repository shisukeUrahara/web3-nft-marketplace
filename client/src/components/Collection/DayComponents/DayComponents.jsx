import React from 'react';
import Image from 'next/legacy/image';
import { MdVerified } from 'react-icons/md';
import Style from './DayComponents.module.css';
import images from '../../../img';

const DayComponents = ({ item, index }) => {
    return (
        <div className={Style.dayComponent}>
            <div className={Style.dayComponent_box}>
                <div className={Style.dayComponent_box_img}>
                    <Image
                        className={Style.dayComponent_box_img_img}
                        src={item.background}
                        alt="profile background"
                        width={500}
                        height={300}
                        objectFit="cover"

                    />

                </div>

                <div className={Style.dayComponent_box_profile}>
                    <Image
                        src={item.background}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.dayComponent_box_img_1}
                        objectFit="cover"
                    />
                    <Image
                        src={item.background}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.dayComponent_box_img_2}
                        objectFit="cover"
                    />

                    <Image
                        src={item.background}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.dayComponent_box_img_3}
                        objectFit="cover"
                    />

                </div>

                <div className={Style.dayComponent_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.dayComponent_box_title_info}>
                        <div className={Style.dayComponent_box_title_info_profile}>
                            <Image
                                src={item.user}
                                alt="profile"
                                width={30}
                                height={30}
                                className={Style.dayComponent_box_title_info_profile_img}
                                objectFit="cover"
                            />
                            <p>Shisuke Urahara <small><MdVerified /></small></p>
                        </div>

                        <div className={Style.dayComponent_box_title_info_price}>
                            <small>1.25 ETH</small>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default DayComponents

