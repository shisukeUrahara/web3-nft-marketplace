import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti";


import Style from './Form.module.css';
import { Button } from '@/components/index';

const Form = () => {
    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form >
                    <div className={Style.Form_box_input}>
                        <label htmlFor="name"> Username</label>
                        <input type="text" placeholder='Shisuke Urahara' className={Style.Form_box_input_userName} />
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="email"> Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail />
                            </div>
                            <input type="email" placeholder='test@gmail.com' />
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="description" > Description</label>
                        <textarea name="" id="" cols="30" rows="6" placeholder='Write something about yourself'></textarea>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder='website' />
                        </div>
                    </div>

                    <div className={Style.Form_box_input_social}>
                        <div className={Style.Form_box_input}>
                            <label htmlFor="facebook"> Facebook</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialFacebook />
                                </div>
                                <input type="text" placeholder='http://shisuke@facebook.com' />
                            </div>
                        </div>

                        <div className={Style.Form_box_input}>
                            <label htmlFor="twitter"> Twitter</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialTwitter />
                                </div>
                                <input type="text" placeholder='http://shisuke@twitter.com' />
                            </div>
                        </div>

                        <div className={Style.Form_box_input}>
                            <label htmlFor="instagram"> Instagram</label>
                            <div className={Style.Form_box_input_box}>
                                <div className={Style.Form_box_input_box_icon}>
                                    <TiSocialInstagram />
                                </div>
                                <input type="text" placeholder='http://shisuke@instagram.com' />
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="wallet"> Wallet Address</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp />
                            </div>
                            <input type="text" placeholder='0xFd40b0823eD.....9f07E3Ec0eF9b4eBa' />
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineContentCopy />
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_btn}>
                        <Button btnText="Upload Profile" handleClick={() => { }} classStyle={Style.button} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form