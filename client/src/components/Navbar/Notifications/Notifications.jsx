import React from 'react';
import Image from 'next/legacy/image';
import Style from './Notifications.module.css';
import images from '../../../img';

const Notifications = () => {
    return (
        <div className={Style.notification}>
            <p>Notification</p>
            <div className={Style.notification_box}>
                <div className={Style.notification_box_img}>
                    <Image
                        src={images.user1}
                        alt="profile image"
                        width={50}
                        height={50}
                        className={Style.notification_box_img}
                        objectFit="cover"
                    />

                </div>

                <div className={Style.notification_box_info}>
                    <h4>Shisuke Urahara</h4>
                    <p>Measure your action User .....</p>
                    <small>3 minutes ago</small>
                </div>

                <span className={Style.notification_box_new}></span>


            </div>

        </div>
    )
}

export default Notifications