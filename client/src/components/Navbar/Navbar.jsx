import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { DiJqueryLogo } from "react-icons/di";
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Style from './Navbar.module.css';
import { Discover, Notifications, HelpCenter, Profile, Sidebar } from './';
import images from '../../img';
import { Button, Error } from '..';
import { useNftMarketPlaceContext } from 'src/Context/NftMarketPlaceContext';

const Navbar = () => {
    // use states
    const [option, setOption] = useState('');
    const [openSidebar, setOpenSidebar] = useState(false);
    const { currentAccount, openError } = useNftMarketPlaceContext();
    const router = useRouter();

    const openMenu = (e) => {
        let selectedOption = e.target.innerText;
        // console.log("**@ openMenu called with option , ", selectedOption);
        if (option === selectedOption) {
            setOption('');
        }
        else {
            setOption(selectedOption);
        }
    }

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <DiJqueryLogo onClick={() => router.push("/")} />
                    </div>

                    <div className={Style.navbar_container_left_box_input}>
                        <div className={Style.navbar_container_left_box_input_box}>
                            <input type="text" placeholder='Search Nft' />
                            <BsSearch
                                className={Style.search_icon}
                                onClick={() => { }}
                            />

                        </div>

                    </div>

                </div>

                <div className={Style.navbar_container_right}>
                    {/* Discover section */}
                    <div className={Style.navbar_container_right_discover}>
                        <p onClick={(e) => { openMenu(e) }} >Discover</p>
                        {
                            option === 'Discover' && <div className={Style.navbar_container_right_discover_box}>
                                <Discover />
                            </div>
                        }
                    </div>

                    {/* Help Center section */}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={(e) => { openMenu(e) }} >Help Center</p>
                        {
                            option === 'Help Center' && <div className={Style.navbar_container_right_help_box}>
                                <HelpCenter />
                            </div>
                        }
                    </div>

                    {/* Notifications section */}
                    <div className={Style.navbar_container_right_notifications}>
                        <MdNotifications className={Style.notify} onClick={() => option == 'Notifications' ? setOption('') : setOption('Notifications')} />
                        {
                            option === 'Notifications' && <div className={Style.navbar_right_notifications_box}>
                                <Notifications />
                            </div>
                        }
                    </div>

                    {/* Create button section  */}
                    <div className={Style.navbar_container_right_button}>
                        {/* {
                            currentAccount == "" ?
                                (<Button btnText="Connect" handleClick={() => { connectWallet() }} />) :
                                (<Link href={{ pathname: "/uploadNFT" }}>
                                    <Button btnText="Create" handleClick={() => { }} />
                                </Link>)
                        } */}

                        <ConnectButton
                            accountStatus="address"
                            showBalance={false}
                            label="Connect wallet"
                        />

                    </div>

                    {/* user profile section */}
                    <div className={Style.navbar_container_right_profile_box}>
                        <div className={Style.navbar_container_right_profile}>
                            <Image
                                src={images.user1}
                                alt="Profile"
                                width={40}
                                height={40}
                                onClick={(e) => option === 'Profile' ? setOption('') : setOption('Profile')}
                                className={Style.navbar_container_right_profile}
                                objectFit="cover"
                            />

                            {
                                option === 'Profile' && <Profile />
                            }

                        </div>

                    </div>

                    {/* menu button */}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight
                            className={Style.menuIcon}
                            onClick={() => setOpenSidebar(!openSidebar)}
                        />
                    </div>

                </div>

            </div>

            {
                openSidebar && <div className={Style.sideBar}>
                    <Sidebar setOpenSideMenu={setOpenSidebar} currentAccount={currentAccount} />
                </div>
            }

            {openError && <Error />}


        </div>
    )
}

export default Navbar