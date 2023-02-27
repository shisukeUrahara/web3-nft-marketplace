import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsImages } from 'react-icons/bs';
import Image from 'next/legacy/image';

import Style from './NFTCard.module.css';
import images from '../../img'

const NFTCard = ({ NFTData }) => {
    // const CardArray = [
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    //     images.nft_image_1,
    //     images.nft_image_2,
    //     images.nft_image_3,
    // ];

    const [like, setLike] = useState(false);

    return (
        <div className={Style.NFTCard}>
            {
                NFTData.map((item, index) => (
                    <div className={Style.NFTCard_box} key={index + 1}>
                        <div className={Style.NFTCard_box_img}>
                            <Image
                                src={item.image}
                                alt="NFT Images"
                                height={600}
                                width={600}
                                className={Style.NFTCard_box_img_img}
                                objectFit="cover"
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
                                    <h4>{item.name} #{item.tokenId}</h4>

                                    <div className={Style.NFTCard_box_update_details_price_box_box}>
                                        <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                            <small>Current Bid</small>
                                            <p>{item.price}ETH</p>
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