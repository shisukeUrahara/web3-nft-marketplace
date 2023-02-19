import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '@/components/index';

const AuthorProfileCard = () => {
    const [option, setOption] = useState('');

    const manageOption = (selectedOption) => {
        if (option !== selectedOption) {
            setOption(selectedOption);
        }
        else {
            setOption('')
        }
    }

    const copyAddress = () => {
        const copyText = document.getElementById("myInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };


    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <Image
                        src={images.nft_image_1}
                        alt="NFT Images"
                        className={Style.AuthorProfileCard_box_img_img}
                        width={220}
                        height={220}
                    />

                </div>

                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>Danny Jones{" "} <span><MdVerified />{" "}</span></h2>

                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input type="text" readOnly={true} value="0xF7df43751C27f55A3077557D0579Ef7ebFffc7FC" id="myInput" />

                        <FiCopy onClick={() => copyAddress()} className={Style.AuthorProfileCard_box_info_address_icon} />
                    </div>

                    <p>
                        Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
                        Contributing to @ether_cards, an NFT Monetization Platform.
                    </p>

                    <div className={Style.AuthorProfileCard_box_info_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>

                        <a href="#">
                            <TiSocialInstagram />
                        </a>

                        <a href="#">
                            <TiSocialLinkedin />
                        </a>

                        <a href="#">
                            <TiSocialTwitter />
                        </a>

                    </div>

                </div>

                <div className={Style.AuthorProfileCard_box_share}>
                    <Button btnText="Follow" handleClick={() => { }} />
                    <MdCloudUpload
                        onClick={() => { manageOption('share') }}
                        className={Style.AuthorProfileCard_box_share_icon}
                    />

                    {
                        option === 'share' && (
                            <div className={Style.AuthorProfileCard_box_share_upload}>
                                <p>
                                    <span>
                                        <TiSocialFacebook />
                                    </span>{" "}
                                    {""}
                                    Facebook
                                </p>

                                <p>
                                    <span>
                                        <TiSocialInstagram />
                                    </span>{" "}
                                    {""}
                                    Instagram
                                </p>

                                <p>
                                    <span>
                                        <TiSocialLinkedin />
                                    </span>{" "}
                                    {""}
                                    LinkedIn
                                </p>

                                <p>
                                    <span>
                                        <TiSocialTwitter />
                                    </span>{" "}
                                    {""}
                                    Twitter
                                </p>

                            </div>
                        )
                    }

                    <BsThreeDots onClick={() => { manageOption("report") }} className={Style.AuthorProfileCard_box_share_icon} />

                    {
                        option === 'report' && (
                            <p className={Style.AuthorProfileCard_box_share_report}>
                                <span>
                                    <MdOutlineReportProblem />
                                </span>{" "}
                                {""}
                                Report Abuse
                            </p>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default AuthorProfileCard