import React, { useState, useEffect } from 'react';
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine } from 'react-icons/ri';

import Style from './FollowerTab.module.css'
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';
import images from '../../img';

const FollowerTab = () => {
    const [option, setOption] = useState('popular');

    const CardArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
        },
        {
            background: images.creatorbackground3,
            user: images.user3,
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
        },
        {
            background: images.creatorbackground7,
            user: images.user7,
        },
        {
            background: images.creatorbackground8,
            user: images.user8,
        },
    ];
    const FollowingArray = [
        {
            background: images.creatorbackground3,
            user: images.user3,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground1,
            user: images.user1,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
    ];
    const NewsArray = [
        {
            background: images.creatorbackground1,
            user: images.user1,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground3,
            user: images.user3,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground4,
            user: images.user4,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground5,
            user: images.user5,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground6,
            user: images.user6,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground7,
            user: images.user7,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
        {
            background: images.creatorbackground8,
            user: images.user8,
            seller: "7200d8d8390d9993ujdc93900399djj277x",
        },
    ];


    return (
        <div className={Style.followerTab}>
            <div className={Style.followerTab_title}>
                <h2>Top Creators List...</h2>
                <div className={Style.followerTab_tabs}>
                    <div className={Style.followerTab_tabs_btn}>
                        <button onClick={() => setOption('popular')}>
                            <RiUserFollowFill /> Popular
                        </button>

                        <button onClick={() => setOption('following')}>
                            <RiUserFollowFill /> Following
                        </button>

                        <button onClick={() => setOption('news')}>
                            <RiAwardLine /> NoteWorthy
                        </button>

                    </div>

                </div>

            </div>

            {
                option === 'popular' && (
                    <div className={Style.followerTab_box}>
                        {
                            CardArray.map((item, index) => (
                                <FollowerTabCard key={index + 1} index={index} item={item} />
                            ))
                        }
                    </div>
                )
            }

            {
                option === 'following' && (
                    <div className={Style.followerTab_box}>
                        {
                            FollowingArray.map((item, index) => (
                                <FollowerTabCard key={index + 1} index={index} item={item} />
                            ))
                        }
                    </div>
                )
            }

            {
                option === 'news' && (
                    <div className={Style.followerTab_box}>
                        {
                            NewsArray.map((item, index) => (
                                <FollowerTabCard key={index + 1} index={index} item={item} />
                            ))
                        }
                    </div>
                )
            }

            <div className={Style.followerTab_member}>
                <div className={Style.followerTab_member_box}>
                    <a href="#"> Show me more</a>
                    <a href="#">Become author</a>
                </div>

            </div>

        </div>
    )
}

export default FollowerTab