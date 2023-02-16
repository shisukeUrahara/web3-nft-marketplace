import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import Image from 'next/image';

import Style from './NFTCard.module.css';
import images from '../../img'

const NFTCard = () => {
    const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [like, setLike] = useState(false);

    return (
        <div className={Style.NFTCard}>
            {
                featureArray.map((item, index) => (
                    <div className={Style.NFTCard_box} key={index + 1}>
                        <div className={Style.NFTCard_box_img}>
                            <Image
                                src={images.nft_image_1}
                                alt="NFT Images"
                                height={600}
                                width={600}
                                className={Style.NFTCard_box_img_img}
                            />
                        </div>

                        <div className={Style.NFTCard_box_update}>
                            <div className={Style.NFTCard_box_update_left}>
                                <div className={Style.NFTCard_box_update_left_like} onClick={() => setLike((prevValue) => !prevValue)}>
                                    {
                                        like ? <AiFillHeart className={Style.NFTCard_box_update_left_like_icon} /> : <AiOutlineHeart />
                                    }{" "} 22
                                </div>


                            </div>

                            <div className={Style.NFTCard_box_update_right}>
                                <div className={Style.NFTCard_box_update_right_info}>
                                    <small>Remaining Time</small>
                                    <p>3h : 15m : 20s</p>

                                </div>


                            </div>

                        </div>
                        <div className={Style.NFTCard_box_update_details}>
                            <div className={Style.NFTCard_box_update_details_price}>
                                <div className={Style.NFTCard_box_update_details_price_box}>
                                    <h4>Clone No. #132234</h4>

                                    <div className={Style.NFTCard_box_update_details_price_box_box}>
                                        <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                            <small>Current Bid</small>
                                            <p>1.000 ETH</p>
                                        </div>

                                        <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                            <small>61 in stock</small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className={Style.NFTCard_box_update_details_category}>
                                <BsImages />

                            </div>

                        </div>
                    </div>

                ))
            }

        </div>
    )
}

export default NFTCard