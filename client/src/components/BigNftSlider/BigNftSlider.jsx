import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine, TbArrowBigRightLines } from "react-icons/tb";

import Style from './BigNftSlider.module.css';
import images from '../../img';
import { Button } from '..';

const BigNftSlider = () => {
    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Daulat Hussain",
            collection: "GYm",
            price: "00664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 21,
                hours: 40,
                minutes: 81,
                seconds: 15,
            },
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Shoaib Hussain",
            collection: "Home",
            price: "0000004 ETH",
            like: 243,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 77,
                hours: 11,
                minutes: 21,
                seconds: 45,
            },
        },
        {
            title: "Gym NFT",
            id: 3,
            name: "Raayan Hussain",
            collection: "GYm",
            price: "0000064 ETH",
            like: 243,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 37,
                hours: 20,
                minutes: 11,
                seconds: 55,
            },
        },
        {
            title: "Home NFT",
            id: 4,
            name: "Raayan Hussain",
            collection: "GYm",
            price: "4664 ETH",
            like: 243,
            image: images.user4,
            nftImage: images.nft_image_1,
            time: {
                days: 87,
                hours: 29,
                minutes: 10,
                seconds: 15,
            },
        },
    ];

    //-------INC
    const inc = useCallback(() => {
        if (idNumber + 1 < sliderData.length) {
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, sliderData.length]);

    //-------DEC
    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1);
        }
    }, [idNumber]);

    return (
        <div className={Style.BigNftSlider}>
            <div className={Style.BigNftSlider_box}>
                <div className={Style.BigNftSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.BigNftSlider_box_left_creator}>
                        <div className={Style.BigNftSlider_box_left_creator_profile}>
                            <Image
                                className={Style.BigNftSlider_box_left_creator_profile_img}
                                src={sliderData[idNumber].image}
                                alt="Creator Profile"
                                width={50}
                                height={50}
                            />

                            <div className={Style.BigNftSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h4>{sliderData[idNumber].name}{" "}
                                    <span><MdVerified /></span>
                                </h4>
                            </div>

                        </div>

                        <div className={Style.BigNftSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.BigNftSlider_box_left_creator_collection_icon} />

                            <div className={Style.BigNftSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>

                            </div>

                        </div>

                    </div>

                    <div className={Style.BigNftSlider_box_left_bidding}>
                        <div className={Style.BigNftSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{sliderData[idNumber].price}</p> <span>$100,000</span>
                        </div>
                        <p className={Style.BigNftSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.BigNftSlider_box_left_bidding_box_icon} />
                            <span>Auction ending in</span>
                        </p>

                        <div className={Style.BigNftSlider_box_left_bidding_box_timer}>
                            <div className={Style.BigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div className={Style.BigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div className={Style.BigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Mins</span>
                            </div>

                            <div className={Style.BigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Secs</span>
                            </div>

                        </div>

                        <div className={Style.BigNftSlider_box_left_button}>
                            <Button btnText="Place" handleClick={() => { }} />
                            <Button btnText="View" handleClick={() => { }} />
                        </div>

                    </div>

                    <div className={Style.BigNftSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={Style.BigNftSlider_box_left_sliderBtn_icon}
                            onClick={() => { dec() }}
                        />

                        <TbArrowBigRightLines
                            className={Style.BigNftSlider_box_left_sliderBtn_icon}
                            onClick={() => { inc() }}
                        />

                    </div>

                </div>

                <div className={Style.BigNftSlider_box_right}>
                    <div className={Style.BigNftSlider_box_right_box}>
                        <Image src={sliderData[idNumber].nftImage} alt="Nft Image" />

                        <div className={Style.BigNftSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like}</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default BigNftSlider