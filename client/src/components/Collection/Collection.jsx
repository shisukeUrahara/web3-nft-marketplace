import React, { useState, useEffect } from 'react';
import { BsAlarmFill, BsFillCalendarFill, BsCalendar3, BsCalendarDateFill } from 'react-icons/bs';

import Style from './Collection.module.css';
import DayComponents from './DayComponents/DayComponents';
import images from '../../img';

const Collection = () => {
    const [option, setOption] = useState('popular');

    const cardArray = [
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
    const newsArray = [
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
            background: images.creatorbackground1,
            user: images.user1,
        },
        {
            background: images.creatorbackground2,
            user: images.user2,
        },
    ];
    const followingArray = [
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


    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => setOption('popular')}>
                            <BsAlarmFill /> Last 24 Hours
                        </button>

                        <button onClick={() => setOption('following')}>
                            <BsCalendar3 /> Last 7 Days
                        </button>

                        <button onClick={() => setOption('news')}>
                            <BsCalendarDateFill /> Last 30 Days
                        </button>

                    </div>

                </div>


            </div>
            {
                option === 'popular' && (
                    <div className={Style.collection_box}>
                        {
                            cardArray.map((item, index) => (
                                <DayComponents key={index + 1} item={item} index={index} />
                            ))
                        }
                    </div>
                )
            }

            {
                option === 'following' && (
                    <div className={Style.collection_box}>
                        {
                            followingArray.map((item, index) => (
                                <DayComponents key={index + 1} item={item} index={index} />
                            ))
                        }
                    </div>
                )
            }

            {
                option === 'news' && (
                    <div className={Style.collection_box}>
                        {
                            newsArray.map((item, index) => (
                                <DayComponents key={index + 1} item={item} index={index} />
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default Collection