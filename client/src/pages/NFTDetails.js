import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';

import Style from '../styles/NFTDetails.module.css';
import { Button,Category,Brand } from '../components';
import { NFTDetailsPage } from 'src/NFTDetailsPage';
import { useNftMarketPlaceContext } from 'src/Context/NftMarketPlaceContext';

const NFTDetails = () => {
  const {}=useNftMarketPlaceContext();
  const [nft,setNft]=useState({
    image:"",
    tokenId:"",
    owner:"",
    name:"",
    price:"",
    seller:""
  });
  const router=useRouter();

  useEffect(()=>{
    if(!router.isReady){
      return;
    }
    else{
      setNft(router.query);
    }

  },[router.isReady])



  return (
    <div>
        <NFTDetailsPage nft={nft} />
        <Category />
        <Brand />
    </div>
  )
}

export default NFTDetails