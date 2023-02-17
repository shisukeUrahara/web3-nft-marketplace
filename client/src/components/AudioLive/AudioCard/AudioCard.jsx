import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

import Style from './AudioCard.module.css'
import images from '../../../img'
import { LikeProfile } from '../..';

const AudioCard = () => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);


    return (
        <div className={Style.audioCard}>
            <div className={Style.audioCard_box}>
                <div className={Style.audioCard_box_like_time}>
                    <div className={Style.audioCard_box_like} onClick={() => setLike((prevValue) => !prevValue)}>
                        {
                            like ? (
                                <AiFillHeart className={Style.audioCard_box_like_icon} />
                            ) : (
                                <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />
                            )
                        }
                        <span>24</span>
                    </div>

                    <div className={Style.audioCard_box_time}>
                        <div className={Style.audioCard_box_like_time_remaining}>
                            <span>Remaining</span>
                            <h5>3h : 15m : 20s</h5>
                        </div>
                    </div>
                </div>

                <div className={Style.audioCard_box_player}>
                    <Image src={images.musiceWave} alt="music" width={200} objectFit="cover" />
                    <div className={Style.audioCard_box_musicPlayer} onClick={() => setPlay((prevValue) => !prevValue)}>
                        {
                            play ? (
                                <div className={Style.audioCard_box_musicPlayer_icon}>
                                    <TbPlayerPause />
                                </div>
                            ) : (
                                <div className={Style.audioCard_box_musicPlayer_icon}>
                                    <TbPlayerPlay />
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className={Style.audioCard_box_details}>
                    <div className={Style.audioCard_box_details_info}>
                        <h4>Music NFT #1345</h4>
                        <div className={Style.audioCard_box_details_info_price}>
                            <small>Price</small>
                            <p>$3221.123</p>
                        </div>
                    </div>

                    <div className={Style.audioCard_box_details_stock}>
                        <LikeProfile />
                        <small>24 in stock</small>
                    </div>
                </div>

                <div className={Style.audioCard_box_img}>
                    <Image
                        src={images.creatorbackground10}
                        alt="Creator background"
                        width={500}
                        height={500}
                        objectFit="cover"
                    />

                </div>
            </div>
        </div>
    )
}

export default AudioCard