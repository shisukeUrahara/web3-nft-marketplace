import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiSocialYoutube,
    TiSocialTwitter,
    TiArrowSortedDown,
    TiArrowSortedUp
} from 'react-icons/ti';
import Style from './SideBar.module.css';
import images from '../../../img';
import { Button } from '../..';


const Sidebar = ({ setOpenSideMenu }) => {
    const [option, setOption] = useState('');
    const discover = [
        {
            name: "Collection",
            link: "collection",
        },
        {
            name: "Search",
            link: "searchPage",
        },
        {
            name: "Author Profile",
            link: "author",
        },
        {
            name: "NFT Details",
            link: "NFT-details",
        },
        {
            name: "Account Setting",
            link: "account",
        },
        {
            name: "Upload NFT",
            link: "uploadNFT",
        },
        {
            name: "Connect Wallet",
            link: "connectWallet",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];

    const helpCenter = [
        {
            name: "About",
            link: "aboutus",
        },
        {
            name: "Contact Us",
            link: "contactus",
        },
        {
            name: "Sign Up",
            link: "signUp",
        },
        {
            name: "LogIn",
            link: "login",
        },
        {
            name: "Subscription",
            link: "subscription",
        },
    ];



    return (
        <div className={Style.sideBar}>
            <GrClose
                className={Style.sideBar_closeBtn}
                onClick={() => setOpenSideMenu('')}
            />

            <div className={Style.sideBar_box}>
                <Image
                    src={images.logo}
                    alt="logo"
                    width={150}
                    height={150}
                />

                <p>
                    Discover the best articles on all topics of NFT & your own stories and share them.
                </p>

                <div className={Style.sideBar_social}>
                    <a href="#">
                        <TiSocialFacebook />
                    </a>
                    <a href="#">
                        <TiSocialLinkedin />
                    </a>
                    <a href="#">
                        <TiSocialTwitter />
                    </a>
                    <a href="#">
                        <TiSocialYoutube />
                    </a>
                    <a href="#">
                        <TiSocialInstagram />
                    </a>

                </div>

            </div>

            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => option === 'Discover' ? setOption('') : setOption('Discover')}>
                        <p>Discover</p>
                        <TiArrowSortedDown />
                    </div>

                    {
                        option === 'Discover' && (
                            <div className={Style.sideBar_discover}>
                                {
                                    discover.map((item, index) => (
                                        <p key={index + 1}>
                                            <Link href={{ pathname: `${item.link}` }} >
                                                {item.name}
                                            </Link>

                                        </p>

                                    ))
                                }

                            </div>
                        )
                    }
                </div>

                <div>
                    <div
                        className={Style.sideBar_menu_box}
                        onClick={() => option === 'Help Center' ? setOption('') : setOption('Help Center')}
                    >
                        <p>Help Center</p>
                        <TiArrowSortedUp />
                    </div>

                    {
                        option === 'Help Center' && (
                            <div className={Style.sideBar_discover}>
                                {
                                    helpCenter.map((item, index) => (
                                        <p key={index + 1}>
                                            <Link href={{ pathname: `${item.link}` }} >
                                                {item.name}
                                            </Link>

                                        </p>

                                    ))
                                }
                            </div>
                        )
                    }
                </div>

            </div>

            <div className={Style.sideBar_button}>
                <Button btnText="Create" />
                <Button btnText="Connect Wallet" />

            </div>

        </div>
    )
}

export default Sidebar