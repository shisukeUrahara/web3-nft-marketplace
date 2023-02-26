import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'
import Image from 'next/legacy/image';

import Style from '../styles/reSellNft.module.css';
import formStyle from '../accountPage/Form/Form.module.css';
import { Button } from '../components';
import { useNftMarketPlaceContext } from 'src/Context/NftMarketPlaceContext';

const reSellNft = () => {
  const {createSale}=useNftMarketPlaceContext();
  const [price,setPrice]=useState("");
  const [image,setImage]=useState("");
  const router=useRouter();
  const {id,tokenURI}=router.query;
  const fetchNFT = async () => {
    if (!tokenURI) return;
    const { data } = await axios.get(tokenURI);
   if(data && data.image){
    setImage(data.image);
   }
  };

  useEffect(() => {
    fetchNFT();
  }, [id]);

  const resell = async () => {
    try {
      if(price){
        await createSale(tokenURI, price, true, id);
      router.push("/author");
      }
      else{
        console.log("**@ please enter price to resell")
      }
    } catch (error) {
      console.log("Error while resell", error);
    }
  };


  return (
    <div className={Style.reSellNft}>
      <div className={Style.reSellNft_box}>
        <h1>ReSell Your Token, Set Price</h1>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Price</label>
          <input
            type="number"
            min={1}
            placeholder="resell price"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setPrice(e.target.value)}
            required={true}
          />
        </div>

        <div className={Style.reSellNft_box_image}>
          {image && (
            <Image src={image} alt="resell nft" width={400} height={400} />
          )}
        </div>

        <div className={Style.reSellNft_box_btn}>
          <Button btnText="Resell NFT" handleClick={() => resell()} />
        </div>
      </div>
    </div>
  )
}

export default reSellNft