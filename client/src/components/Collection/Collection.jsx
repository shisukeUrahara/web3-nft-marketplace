import React, { useState, useEffect } from 'react';
import { BsAlarmFill, BsFillCalendarFill, BsCalendar3, BsCalendarDateFill } from 'react-icons/bs';

import Style from './Collection.module.css';
import DayComponents from './DayComponents/DayComponents';

const Collection = () => {
    const [option, setOption] = useState('popular');
    const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const followingArray = [1, 2, 3, 4];
    const newsArray = [1, 2, 3, 4, 5, 6];


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
                                <DayComponents key={index + 1} />

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
                                <DayComponents key={index + 1} />

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
                                <DayComponents key={index + 1} />

                            ))
                        }

                    </div>
                )
            }

        </div>
    )
}

export default Collection