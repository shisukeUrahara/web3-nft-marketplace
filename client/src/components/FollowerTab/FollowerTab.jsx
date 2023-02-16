import React, { useState, useEffect } from 'react';
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine } from 'react-icons/ri';

import Style from './FollowerTab.module.css'
import FollowerTabCard from './FollowerTabCard/FollowerTabCard';

const FollowerTab = () => {
    const [option, setOption] = useState('popular');
    const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const FollowingArray = [1, 2, 3, 4, 5, 6];
    const NewsArray = [1, 2, 3, 4];


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