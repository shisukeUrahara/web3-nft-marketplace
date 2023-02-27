import React,{useState,useEffect} from 'react';

import Style from '../styles/searchPage.module.css';
import { Slider,Brand,Loader } from '../components';
import { SearchBar } from 'src/searchPage';
import { Filter } from '../components';
import { NFTCardTwo,Banner } from 'src/collectionPage';
import images from '../img';
import { useNftMarketPlaceContext } from 'src/Context/NftMarketPlaceContext';

const searchPage = () => {
  const {fetchNfts,currentAccount}=useNftMarketPlaceContext();
  const [showLoader,setShowLoader]=useState(false);
  const [nfts,setNfts]=useState([]);
  const [nftsCopy,setNftsCopy]=useState([]);

  useEffect(()=>{
    try {
      setShowLoader(true);
      if (currentAccount) {
        fetchNfts().then((items) => {
          console.log("**@ fetch nft items are , ",items)
         if(items){
          setNfts(items.reverse());
          setNftsCopy(items);
          console.log(nfts);
         }
         setShowLoader(false);
        });
      }
    } catch (err) {
      console.log("**@ search page , error while fetching nfts , error is ", err);
      setShowLoader(false);
    }
  },[currentAccount]);

  const onHandleSearch = (value) => {
    const filteredNFTS = nfts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredNFTS.length === 0) {
      setNfts(nftsCopy);
    } else {
      setNfts(filteredNFTS);
    }
  };

  const onClearSearch = () => {
    if (nfts.length && nftsCopy.length) {
      setNfts(nftsCopy);
    }
  };

  //   const collectionArray = [
  //   {
  //     image:images.nft_image_1
  //   },
  //   {
  //     image:images.nft_image_2
  //   },{
  //     image:images.nft_image_3
  //   },{
  //     image:images.nft_image_1
  //   },{
  //     image:images.nft_image_2
  //   },{
  //     image:images.nft_image_3
  //   },{
  //     image:images.nft_image_1
  //   },{
  //     image:images.nft_image_2
  //   },
   
  // ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2}/>
      <SearchBar   onHandleSearch={onHandleSearch}
        onClearSearch={onClearSearch}/>
      <Filter />
      {nfts.length == 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
      <Slider />
      <Brand />

    </div>
  )
}

export default searchPage