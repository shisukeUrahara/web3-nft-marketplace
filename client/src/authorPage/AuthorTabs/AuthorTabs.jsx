import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { TiArrowSortedUp, TiArrowSortedDown, TiTick } from 'react-icons/ti';


import Style from './AuthorTabs.module.css';
import images from '../../img'

const AuthorTabs = ({ option, setOption }) => {
    const [openList, setOpenList] = useState(false);
    const [activeBtn, setActiveBtn] = useState(0);
    const [selectedMenu, setSelectedMenu] = useState("Most Recent");
    const listArray = [
        "Created By Admin",
        "Most Appreciated",
        "Most Discussed",
        "Most Viewed",
    ];

    const openTab = (option, btnValue) => {
        setOption(option);
        setActiveBtn(btnValue)
    }


    return (
        <div className={Style.AuthorTabs}>
            <div className={Style.AuthorTabs_box}>
                <div className={Style.AuthorTabs_box_left}>
                    <div className={Style.AuthorTabs_box_left_btn}>
                        <button
                            className={`${activeBtn == 1 ? Style.active : ""}`}
                            onClick={() => openTab('collectibles', 1)}
                        >
                            Listed NFTs
                        </button>

                        <button
                            className={`${activeBtn == 2 ? Style.active : ""}`}
                            onClick={() => openTab('created', 2)}
                        >
                            Own Nft
                        </button>

                        <button
                            className={`${activeBtn == 3 ? Style.active : ""}`}
                            onClick={() => openTab('like', 3)}
                        >
                            Liked
                        </button>

                        <button
                            className={`${activeBtn == 4 ? Style.active : ""}`}
                            onClick={() => openTab('following', 4)}
                        >
                            Following
                        </button>

                        <button
                            className={`${activeBtn == 5 ? Style.active : ""}`}
                            onClick={() => openTab('followers', 5)}
                        >
                            Followers
                        </button>

                    </div>

                </div>

                <div className={Style.AuthorTabs_box_right}>
                    <div
                        className={Style.AuthorTaps_box_right_para}
                        onClick={() => setOpenList((prevValue) => !prevValue)}
                    >
                        <p>{selectedMenu}</p>
                        {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
                    </div>

                    {openList && (
                        <div className={Style.AuthorTaps_box_right_list}>
                            {listArray.map((item, index) => (
                                <div
                                    key={index + 1}
                                    onClick={() => setSelectedMenu(item)}
                                    className={Style.AuthorTaps_box_right_list_item}
                                >
                                    <p>{item}</p>
                                    <span>{selectedMenu == item && <TiTick />}</span>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}

export default AuthorTabs