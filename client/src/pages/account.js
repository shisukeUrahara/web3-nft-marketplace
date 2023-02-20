import React,{useState,useMemo,useCallback,useContext} from 'react';
import Image from 'next/legacy/image';
import {useDropZone} from 'react-dropzone'

import Style from '../styles/account.module.css';
import images from '../img';
import { Form } from 'src/accountPage';

const account = () => {
  const [fileUrl,setFileUrl]=useState(null);

  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
      <h1>Profile settings</h1>
        <p>
          You can set preferred display name, create your profile URL and manage
          other personal settings.
        </p>

      </div>

     <div className={Style.account_box}>
      <div className={Style.account_box_img}>
        <input />
        <Image
        src={images.user1}
        alt="account upload"
        width={150}
        height={150}
        className={Style.account_box_img_img} 
        />
        <p className={Style.account_box_img_para}>Change Image</p>
      </div>

      <div className={Style.account_box_form}>
        <Form />
      </div>

      

     </div>
    </div>
  )
  
  
}

export default account