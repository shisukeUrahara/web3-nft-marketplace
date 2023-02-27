import React from 'react';
import Image from 'next/legacy/image';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff, TbDownload } from 'react-icons/tb';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import Style from './Profile.module.css';
import images from '../../../img';

const Profile = () => {
    const { address: currentAccount } = useAccount();

    return (
        <div className={Style.profile}>
            <div className={Style.profile_account}>
                <Image
                    src={images.user1}
                    alt="user profile"
                    width={50}
                    height={50}
                    className={Style.profile_account_img}
                    objectFit="cover"
                />

                <div className={Style.profile_account_info}>
                    <p>Shisuke Urahara</p>
                    <small>{currentAccount ? (currentAccount.substring(0, 6) + "....." + currentAccount.substring(currentAccount.length - 5)) : ("")}</small>
                </div>

            </div>

            <div className={Style.profile_menu}>
                <div className={Style.profile_menu_one}>
                    <div className={Style.profile_menu_one_item}>
                        <FaUserAlt />
                        <p>
                            <Link href={{ pathname: '/author' }}> My Profile</Link>
                        </p>
                    </div>

                    <div className={Style.profile_menu_one_item}>
                        <FaRegImage />
                        <p>
                            <Link href={{ pathname: '/author' }}> My Items</Link>
                        </p>
                    </div>

                    <div className={Style.profile_menu_one_item}>
                        <FaUserEdit />
                        <p>
                            <Link href={{ pathname: '/account' }}>Edit Profile</Link>
                        </p>
                    </div>

                </div>

                <div className={Style.profile_menu_two}>
                    <div className={Style.profile_menu_one_item}>
                        <MdHelpCenter />
                        <p>
                            <Link href={{ pathname: '/contactUs' }}>
                                Help
                            </Link>
                        </p>
                    </div>

                    <div className={Style.profile_menu_one_item}>
                        <TbDownload />
                        <p>
                            <Link href={{ pathname: '/aboutUs' }}>
                                About Us
                            </Link>
                        </p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Profile