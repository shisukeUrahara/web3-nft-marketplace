import React from 'react';
import { TiTick } from 'react-icons/ti';

import Style from './Subscription.module.css';
import { Button } from '@/components/index';

const Subscription = ({ item, index }) => {
    return (
        <div className={Style.SubscriptionBox}>
            <div className={Style.SubscriptionBox_box}>
                <span className={Style.SubscriptionBox_box_span}>{item.plan}</span>
                {
                    item.popular && (
                        <small className={Style.SubscriptionBox_box_small}>
                            {item.popular}
                        </small>
                    )
                }
                <p className={Style.SubscriptionBox_box_price}>{item.price}</p>

                <div className={Style.SubscriptionBox_box_info}>
                    {item.service.map((item, i) => (
                        <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
                            <span>
                                <TiTick />
                            </span>
                            {item}
                        </p>
                    ))}
                </div>
                <Button
                    btnText="Submit"
                    handleClick={() => { }}
                    classStyle={Style.button}
                />
            </div>
        </div>
    )
}

export default Subscription