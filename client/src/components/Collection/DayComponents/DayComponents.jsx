import React from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import Style from './DayComponents.module.css';
import images from '../../../img';

const DayComponents = () => {
    return (
        <div className={Style.dayComponent}>
            <div className={Style.dayComponent_box}>
                <div className={Style.dayComponent_box_img}>
                    <Image
                        className={Style.dayComponent_box_img_img}
                        src={images.creatorbackground1}
                        alt="profile background"
                        width={500}
                        height={300}
                    />

                </div>

                <div className={Style.dayComponent_box_profile}>
                    <Image
                        src={images.creatorbackground2}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.dayComponent_box_img_1}
                    />
                    <Image
                        src={images.creatorbackground2}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.dayComponent_box_img_2}
                    />

                    <Image
                        src={images.creatorbackground2}
                        alt="profile"
                        width={200}
                        height={200}
                        className={Style.dayComponent_box_img_3}
                    />

                </div>

                <div className={Style.dayComponent_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.dayComponent_box_title_info}>
                        <div className={Style.dayComponent_box_title_info_profile}>
                            <Image
                                src={images.user1}
                                alt="profile"
                                width={30}
                                height={30}
                                className={Style.dayComponent_box_title_info_profile_img}
                            />
                            <p>Shisuke Urahara <small><MdVerified /></small></p>
                        </div>

                        <div className={Style.dayComponent_box_title_info_profile}>
                            <small>1.25 ETH</small>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default DayComponents