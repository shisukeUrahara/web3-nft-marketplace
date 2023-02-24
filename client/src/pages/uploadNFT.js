import React,{useState,useEffect} from 'react';

import Style from '../styles/uploadNft.module.css';
import { UploadNFT } from 'src/uploadNftPage';
import { useNftMarketPlaceContext } from 'src/Context/NftMarketPlaceContext';

const uploadNFT = () => {
  const {uploadToIpfs,createNft}=useNftMarketPlaceContext();
  return (
    <div className={Style.UploadNFT}>
      <div className={Style.UploadNFT_box}>
        <div className={Style.UploadNFT_box_heading}>
          <h1>Create new NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.UploadNFT_box_title}>
        <h2>Image, Video, Audio, or 3D Model</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div className={Style.UploadNFT_box_form}>
          <UploadNFT uploadToIpfs={uploadToIpfs} createNft={createNft}  />

        </div>

      </div>
    </div>
  )
}

export default uploadNFT