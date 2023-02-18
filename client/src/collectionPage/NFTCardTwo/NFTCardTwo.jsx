import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';

import Style from './NFTCardTwo.module.css';
import images from '../../img';
import { LikeProfile, NFTCard } from '@/components/index';


const NFTCardTwo = ({ NFTData }) => {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(21);

    const likeNft = () => {
        setLikeCount(like ? likeCount - 1 : likeCount + 1);
        setLike((prevValue) => !prevValue);
    }

    return (
        <div className={Style.NFTCardTwo}>
            {
                NFTData.map((item, index) => (
                    <div className={Style.NFTCardTwo_box} key={index + 1}>
                        <div className={Style.NFTCardTwo_box_like}>
                            <div className={Style.NFTCardTwo_box_like_box}>
                                <div className={Style.NFTCardTwo_box_like_box_box}>
                                    <BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
                                    <p onClick={() => likeNft()}>
                                        {like ? (<AiFillHeart />) : (<AiOutlineHeart />)}
                                        {""}
                                        <span>{likeCount}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={Style.NFTCardTwo_box_img}>
                            <Image src={item.image} alt="NFT" width={500} height={500} objectFit="cover" />

                        </div>

                        <div className={Style.NFTCardTwo_box_info}>
                            <div className={Style.NFTCardTwo_box_info_left}>
                                <LikeProfile />
                                <p>Clone #{index + 1}</p>
                            </div>
                            <small>4{index + 2}</small>
                        </div>

                        <div className={Style.NFTCardTwo_box_price}>
                            <div className={Style.NFTCardTwo_box_price_box}>
                                <small>Current Bid</small>
                                <p>1{index + 5}.000 ETH</p>
                            </div>


                            <p className={Style.NFTCardTwo_box_price_stock}>
                                <MdTimer /> <span>{index + 1} hours left</span>
                            </p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default NFTCardTwo