import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaFilter, FaAngleUp, FaAngleDown, FaWallet, FaMusic, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa';
import { FaFillCloseCircle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import Style from './Filter.module.css'

const Filter = () => {
    const [filter, setFilter] = useState(true);
    const [image, setImage] = useState(true);
    const [video, setVideo] = useState(true);
    const [music, setMusic] = useState(true);


    return (
        <div className={Style.filter}>
            <div className={Style.filter_box}>
                <div className={Style.filter_box_left}>
                    <button onClick={() => { }}>NFTs</button>
                    <button onClick={() => { }}>ART</button>
                    <button onClick={() => { }}>MUSIC</button>
                    <button onClick={() => { }}>SPORTS</button>
                    <button onClick={() => { }}>PHOTOGRAPHY</button>
                </div>

                <div className={Style.filter_box_right}>
                    <div className={Style.filter_box_right_box} onClick={() => setFilter((prevValue) => !prevValue)}>
                        <FaFilter />
                        <span>Filter</span>
                        {filter ? <FaAngleDown /> : <FaAngleUp />}



                    </div>

                </div>

            </div>

            {
                filter && (
                    <div className={Style.filter_box_items}>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaWallet /> <span>0.01 ETH - 10 ETH</span>
                            </div>

                        </div>

                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setImage((prevValue) => !prevValue)}>
                                <FaImages /> <span>Images</span>
                                {image ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>

                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setVideo((prevValue) => !prevValue)}>
                                <FaVideo /> <span>Videos</span>
                                {video ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>

                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setMusic((prevValue) => !prevValue)}>
                                <FaMusic /> <span>Music</span>
                                {music ? <AiFillCloseCircle /> : <TiTick />}
                            </div>
                        </div>

                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item} >
                                <FaUserAlt /> <span>Verified</span>
                                <MdVerified />
                            </div>
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Filter