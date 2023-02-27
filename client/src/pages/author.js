import React,{useState,useEffect} from 'react';
import { useAccount,useSigner } from 'wagmi';

import Style from '../styles/author.module.css';
import { Banner ,NFTCardTwo} from 'src/collectionPage';
import { Brand,Title } from '../components';
import { AuthorProfileCard,AuthorTabs,AuthorNFTCardBox } from 'src/authorPage';
import images from '../img';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';
import { useNftMarketPlaceContext } from 'src/Context/NftMarketPlaceContext';

const author = () => {
  const { address: currentAccount } = useAccount();
  const {fetchMyNFTsOrListedNFTs}=useNftMarketPlaceContext();
  const [nfts,setNfts]=useState([]);
  const [myNfts,setMyNfts]=useState([]);
  const [option,setOption]=useState('collectibles');
  const { data: signer } = useSigner();

const followerArray = [
  {
    background: images.creatorbackground1,
    user: images.user1,
    seller: "7d64gf748849j47fy488444",
  },
  {
    background: images.creatorbackground2,
    user: images.user2,
    seller: "7d64gf748849j47fy488444",
  },
  {
    background: images.creatorbackground3,
    user: images.user3,
    seller: "7d64gf748849j47fy488444",
  },
  {
    background: images.creatorbackground4,
    user: images.user4,
    seller: "7d64gf748849j47fy488444",
  },
  {
    background: images.creatorbackground5,
    user: images.user5,
    seller: "7d64gf748849j47fy488444",
  },
  {
    background: images.creatorbackground6,
    user: images.user6,
    seller: "7d64gf748849j47fy488444",
  },
];

useEffect(() => {
 if(currentAccount){
  fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
    // console.log("**@ listed nfts are , ",items);
    // console.log("**@ listed signer is  , ",signer);
    setNfts(items);
  });
 }
}, [currentAccount]);

useEffect(() => {
  if(currentAccount){
    fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
      // console.log("**@ my nfts are , ",items);
      // console.log("**@ listed signer2 is  , ",signer);

      setMyNfts(items);
    });
  }
}, [currentAccount]);

  return (
    <div className={Style.Banner}>
        <Banner bannerImage={images.creatorbackground3} />
        <AuthorProfileCard currentAccount={currentAccount} /> 
        <AuthorTabs option={option} setOption={setOption}/>
        <AuthorNFTCardBox option={option} setOption={setOption} nfts={nfts} myNfts={myNfts} />
        <Title
        heading="Popular Creators"
        content="Click on music icon and enjoy NTF music or audio"
      />

      <div className={Style.author_box}>
        {followerArray.map((item, index) => (
          <FollowerTabCard key={index+1} index={index} item={item} />
        ))}
      </div>
      <Brand />
     

    </div>
  )
}

export default author