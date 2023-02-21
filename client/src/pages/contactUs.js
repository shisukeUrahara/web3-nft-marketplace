import React from 'react';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialInstagram,
    TiSocialYoutube,
    TiSocialTwitter,
    TiArrowSortedDown,
    TiArrowSortedUp
} from 'react-icons/ti';
import { HiOutlineMail } from 'react-icons/hi';

import Style from '../styles/contactUs.module.css';
import formStyle from '../accountPage/Form/Form.module.css';
import { Button } from '../components';

const contactUs = () => {
  return (
    <div className={Style.contactUs}>
        <div className={Style.contactUs_box}>
            <h1>Contact</h1>
            <div className={Style.contactUs_box_box}>
                <div className={Style.contactUs_box_box_left}>
                <h3>🗺 ADDRESS</h3>
                <p>
                Photo booth tattooed prism, portland taiyaki hoodie neutra
                typewriter
                </p>

                <div className={Style.contactUs_box_box_left_item}>
                <h3>💌 EMAIL</h3>
                <p>nc.example@example.com</p>
                </div>

                <div className={Style.contactUs_box_box_left_item}>
                <h3>☎ PHONE</h3>
                <p>000-123-456-7890</p>
                </div>

                <div className={Style.contactUs_box_box_left_item}>
              <h3>🌏 SOCIALS</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
                </div>


                <div className={Style.contactUs_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  placeholder="Shisuke Urahara"
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="Email*" />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="something about yourself in few words"
                ></textarea>
              </div>
              <Button
                btnText="Send Message"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>

            </div>

        </div>

    </div>
  )
}

export default contactUs