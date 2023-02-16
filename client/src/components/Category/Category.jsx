import React from 'react';
import Image from 'next/legacy/image';
import { BsCircleFill } from 'react-icons/bs';
import Style from './Category.module.css';
import images from '../../img'

const Category = () => {

    const CategoryArray = [
        {
            images: images.creatorbackground1,
            name: "Dance Monkey",
        },
        {
            images: images.creatorbackground2,
            name: "Sports",
        },
        {
            images: images.creatorbackground3,
            name: "Entirtment Art",
        },
        {
            images: images.creatorbackground4,
            name: "Time Life",
        },
        {
            images: images.creatorbackground5,
            name: "Animals Art",
        },
        {
            images: images.creatorbackground6,
            name: "Music",
        },
        {
            images: images.creatorbackground7,
            name: "Digital Arts",
        },
        {
            images: images.creatorbackground8,
            name: "Hubby",
        },
        {
            images: images.creatorbackground8,
            name: "Bad Arts",
        },
        {
            images: images.creatorbackground9,
            name: " Arts",
        },
        {
            images: images.creatorbackground10,
            name: "My Fav",
        },
    ];

    return (
        <div className={Style.category_container}>
            <div className={Style.category}>
                {
                    CategoryArray.map((item, index) => (
                        <div className={Style.category_box} key={index + 1}>
                            <Image
                                src={item.images}
                                alt="Background image"
                                className={Style.category_box_img}
                                width={350}
                                height={150}
                                objectFit="cover"
                            />

                            <div className={Style.category_box_title}>
                                <span>
                                    <BsCircleFill />
                                </span>

                                <div className={Style.category_box_title_info}>
                                    <h4>Entertainment</h4>
                                    <small>{item.name}</small>

                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Category