import React, { useState } from 'react';
import { MdVerified } from 'react-icons/md';
import Image from 'next/legacy/image';
import { TiTick } from 'react-icons/ti';

import Style from './FollowerTabCard.module.css';
import images from '../../../img';

const FollowerTabCard = ({ item, index }) => {
    const [following, setFollowing] = useState(false);

    return (
        <div className={Style.followerTabCard}>
            <div className={Style.followerTabCard_rank}>
                <p>#{index + 1} <span>🥇</span></p>
            </div>

            <div className={Style.followerTabCard_box}>
                <div className={Style.followerTabCard_box_img}>
                    <Image
                        src={images.creatorbackground1}
                        alt="profile background"
                        width={500}
                        height={300}
                        className={Style.followerTabCard_box_img_img}
                        objectFit="cover"
                    />
                </div>

                <div className={Style.followerTabCard_box_profile}>
                    <Image
                        className={Style.followerTabCard_box_profile_img}
                        src={images.user1}
                        alt="profile picture"
                        width={50}
                        height={50}
                        objectFit="cover"
                    />

                </div>

                <div className={Style.followerTabCard_box_info}>
                    <div className={Style.followerTabCard_box_info_name}>
                        <h4>John Davis {" "}
                            <span>
                                <MdVerified />
                            </span>
                        </h4>
                        <p>1.234 ETH</p>
                    </div>
                    <div className={Style.followerTabCard_box_info_following}>
                        {
                            following ? (
                                <a onClick={() => setFollowing(false)}>Following{" "}{" "} <span><TiTick /></span></a>
                            ) : (
                                <a onClick={() => setFollowing(true)}>Follow{" "}{" "}</a>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FollowerTabCard