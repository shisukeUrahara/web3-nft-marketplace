import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

import Style from './AudioCard.module.css'
import images from '../../../img'

const AudioCard = () => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);


    return (
        <div className={Style.audioCard}>

        </div>
    )
}

export default AudioCard