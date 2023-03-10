import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { BsImages } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import Style from './NFTDetailsImg.module.css';
import images from '../../img'

const NFTDetailsImg = ({ nft }) => {
    const [description, setDescription] = useState(true);
    const [details, setDetails] = useState(true);
    const [like, setLike] = useState(false);


    return (
        <div className={Style.NFTDetailsImg}>
            <div className={Style.NFTDetailsImg_box}>
                <div className={Style.NFTDetailsImg_box_NFT}>
                    <div className={Style.NFTDetailsImg_box_NFT_like}>
                        <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
                        <p onClick={() => setLike((prevValue) => !prevValue)}>
                            {
                                like ? (
                                    <AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />
                                ) : (
                                    <AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />
                                )
                            }
                            <span>23</span>

                        </p>

                    </div>

                    <div className={Style.NFTDetailsImg_box_NFT_img}>
                        <Image
                            src={nft?.image}
                            alt="NFT Image"
                            className={Style.NFTDetailsImg_box_NFT_img_img}
                            width={700}
                            height={800}
                            objectFit="cover"
                        />

                    </div>

                </div>

                <div className={Style.NFTDetailsImg_box_description} onClick={() => { setDescription((prevValue) => !prevValue) }}>
                    <p>Description</p>
                    {
                        description ? (
                            <TiArrowSortedUp />
                        ) : (
                            <TiArrowSortedDown />
                        )
                    }

                </div>
                {
                    description && (
                        <div className={Style.NFTDetailsImg_box_description_box}>
                            <p>
                                {nft?.description}
                            </p>
                        </div>
                    )
                }

                <div className={Style.NFTDetailsImg_box_details} onClick={() => setDetails((prevValue) => !prevValue)}>
                    <p>Details</p>
                    {
                        details ? (
                            <TiArrowSortedUp />
                        ) : (
                            <TiArrowSortedDown />
                        )
                    }
                </div>

                {
                    details && (
                        <div className={Style.NFTDetailsImg_box_details_box}>
                            <small>2000 x 2000 px.IMAGE(685KB)</small>
                            <p>
                                <small>Contract Address</small>
                                <br />
                                {nft?.seller}
                            </p>
                            <p>
                                <small>TOKEN ID </small>
                                {"  "} {nft?.tokenId}
                            </p>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NFTDetailsImg