import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { BsImages } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

import Style from './NFTDetailsImg.module.css';
import images from '../../img'

const NFTDetailsImg = () => {
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
                            src={images.nft_image_1}
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
                                Tattooed Kitty Gang (“TKG”) is a collection of 666 badass kitty gangsters,
                                with symbol of tattoos, living in the Proud Kitty Gang (“PKG”) metaverse.
                                Each TKG is an 1/1 ID as gangster member & all the joint rights.
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
                                0xFd40b0823eD5072C0890f2a9f07E3Ec0eF9b4eBa
                            </p>
                            <p>
                                <small>TOKEN ID </small>
                                {"  "} 102345
                            </p>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NFTDetailsImg