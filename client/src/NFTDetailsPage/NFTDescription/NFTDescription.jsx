import React, { useState } from 'react';
import Image from 'next/legacy/image';
import {
    MdVerified, MdCloudUpload, MdTimer,
    MdReportProblem, MdOutlineDeleteSweep
} from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { FaWallet, FaPercentage } from 'react-icons/fa';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiSocialYoutube,
    TiSocialTwitter,
    TiArrowSortedDown,
    TiArrowSortedUp
} from 'react-icons/ti';
import { BiTransferAlt, BiDollar } from 'react-icons/bi'

import Style from './NFTDescription.module.css';
import images from '../../img';
import { Button } from '@/components/index';
import { NFTTabs } from '..';

const NFTDescription = () => {
    const [option, setOption] = useState('');
    const [tab, setTab] = useState('history');

    const historyArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5,
    ];
    const provananceArray = [
        images.user6,
        images.user7,
        images.user8,
        images.user9,
        images.user10,
    ];
    const ownerArray = [
        images.user1,
        images.user8,
        images.user2,
        images.user6,
        images.user5,
    ];


    return (
        <div className={Style.NFTDescription}>
            <div className={Style.NFTDescription_box}>
                <div className={Style.NFTDescription_box_share}>
                    <p>Virtual Worlds</p>
                    <div className={Style.NFTDescription_box_share_box}>
                        <MdCloudUpload className={Style.NFTDescription_box_share_box_icon} onClick={() => { option === 'social' ? setOption('') : setOption('social') }} />
                        {
                            option === 'social' && (
                                <div className={Style.NFTDescription_box_share_box_social}>
                                    <a href="#">
                                        <TiSocialFacebook /> <span>Facebook</span>
                                    </a>
                                    <a href="#">
                                        <TiSocialInstagram /><span>Instagram</span>
                                    </a>
                                    <a href="#">
                                        <TiSocialTwitter /> <span>Twitter</span>
                                    </a>
                                    <a href="#">
                                        <TiSocialLinkedin /> <span>LinkedIn</span>
                                    </a>
                                    <a href="#">
                                        <TiSocialYoutube /> <span>YouTube</span>
                                    </a>
                                </div>
                            )
                        }

                        <BsThreeDots className={Style.NFTDescription_box_share_box_icon} onClick={() => option === 'nftMenu' ? setOption('') : setOption('nftMenu')} />
                        {
                            option === 'nftMenu' && (
                                <div className={Style.NFTDescription_box_share_box_icon}>
                                    <a href="#">
                                        <BiDollar /> <span>Change Price</span>
                                    </a>
                                    <a href="#">
                                        <BiTransferAlt /> <span>Transfer</span>
                                    </a>
                                    <a href="#">
                                        <MdReportProblem /> <span>Report Abuse</span>
                                    </a>

                                    <a href="#">
                                        <MdOutlineDeleteSweep /> <span>Delete Item</span>
                                    </a>

                                </div>
                            )
                        }

                    </div>

                </div>

                <div className={Style.NFTDescription_box_profile}>
                    <h1>BearX #23456</h1>
                    <div className={Style.NFTDescription_box_profile_box}>
                        <div className={Style.NFTDescription_box_profile_box_left}>
                            <Image
                                src={images.user1}
                                alt="profile"
                                width={40}
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />

                            <div className={Style.NFTDescription_box_profile_box_left_info}>
                                <small>Creator</small> <br />
                                <small> Karli Costa <MdVerified /> </small>
                            </div>

                        </div>

                        <div className={Style.NFTDescription_box_profile_box_right}>
                            <Image
                                src={images.creatorbackground1}
                                alt="profile"
                                width={40}
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />

                            <div className={Style.NFTDescription_box_profile_box_right_info}>
                                <small>Collection</small> <br />
                                <span>
                                    Mokeny app <MdVerified />
                                </span>

                            </div>
                        </div>
                    </div>

                    <div className={Style.NFTDescription_box_profile_bidding}>
                        <p>
                            <MdVerified /> <span>Auction ending in: </span>
                        </p>

                        <div className={Style.NFTDescription_box_profile_bidding_box_timer}>
                            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                <p>21</p>
                                <span>Days</span>
                            </div>

                            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                <p>22</p>
                                <span>Hours</span>
                            </div>

                            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                <p>45</p>
                                <span>mins</span>
                            </div>

                            <div className={Style.NFTDescription_box_profile_bidding_box_timer_item}>
                                <p>12</p>
                                <span>secs</span>
                            </div>

                        </div>

                        <div className={Style.NFTDescription_box_profile_bidding_box_price}>
                            <div className={Style.NFTDescription_box_profile_bidding_box_price_bid}>
                                <small>Current Bid</small>
                                <p>1.000 ETH <span>(( ≈ $ 3,221.21))</span></p>

                            </div>

                            <span>[96 in stock]</span>

                        </div>

                        <div className={Style.NFTDescription_box_profile_bidding_box_button}>
                            <Button
                                icon={<FaWallet />}
                                btnText="Place a bid"
                                handleClick={() => { }}
                                classStyle={Style.button}
                            />

                            <Button
                                icon={<FaPercentage />}
                                btnText="Make offer"
                                handleClick={() => { }}
                                classStyle={Style.button}
                            />

                        </div>

                        <div className={Style.NFTDescription_box_profile_bidding_box_tabs}>
                            <button onClick={() => { setTab('history') }}>Bid History</button>
                            <button onClick={() => { setTab('provenance') }}>Provenance</button>
                            <button onClick={() => { setTab('owner') }}>Owner</button>
                        </div>

                        {
                            tab === 'history' && (
                                <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                                    <NFTTabs data={historyArray} />
                                </div>
                            )
                        }

                        {
                            tab === 'provenance' && (
                                <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                                    <NFTTabs data={provananceArray} />
                                </div>
                            )
                        }

                        {
                            tab === 'owner' && (
                                <div className={Style.NFTDescription_box_profile_bidding_box_card}>
                                    <NFTTabs data={ownerArray} icon={<MdVerified />} />
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default NFTDescription