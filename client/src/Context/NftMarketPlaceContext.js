import React,{useState,useEffect,useContext} from 'react';
import web3modal from 'web3modal';
import {ethers} from 'ethers';
import {useRouter} from 'next/router';
import {create as ipfsHttpClient } from 'ipfs-http-client';
import axios from 'axios';
import { useAccount,useProvider,useSigner } from 'wagmi';

import { NftMarketPlaceABI,NftMarketPlaceAddress } from './constants';

const NftMarketPlaceContext= React.createContext();
// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const projectSecretKey = process.env.NEXT_PUBLIC_PROJECT_SECRET_KEY;
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecretKey}`).toString(
  "base64"
)}`;

console.log("**@ nftMarketPlace context , projectId is , ",projectId)

const subdomain = process.env.NEXT_PUBLIC_SUBDOMAIN;

const client = ipfsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});



//  smart contract functions



export const NftMarketPlaceProvider=(({children})=>{
  const { address:currentAccount} = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider()




    const router=useRouter();

    //  fetching smart contract
const fetchContract= (signerOrProvider)=>{
  return new ethers.Contract(NftMarketPlaceAddress,NftMarketPlaceABI,signerOrProvider);
}

//  connecting with smart contract
const connectWithSmartContract= async ()=>{
  try{
      // const web3Modal=new web3modal();
      // const connection= await web3Modal.connect();
      // const provider= new ethers.providers.Web3Provider(connection);
      // const signer= provider.getSigner();
      const contract= fetchContract(signer);
      return contract
  }
  catch(err){
      console.log("**@ error caught while connecting with smart contract , error is , ",err);
  }
}


    const connectWallet= async ()=>{
        try{
            if(!window.ethereum){
                console.log("**@ connect wallet check , Install metamask");
                return;
            }
            const accounts= await window.ethereum.request({method:"eth_requestAccounts"});
            if(accounts.length){
                console.log("**@ connected accounts 2 array is , ",accounts);
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("**@ No wallet connected accounts found 2")
            }

        }
        catch(err){
            console.log("**@ connect wallet error is , ",err);
        }

    }

    const uploadToIpfs= async (file)=>{
        try{

          console.log("**@ uploadToIpfs called , project id is , ",projectId)
          console.log("**@ uploadToIpfs called , project secret is , ",projectSecretKey)
          console.log("**@ uploadToIpfs called , project subdomain is , ",subdomain)

            const fileHash= await client.add({content:file});
            console.log("**@ uploadToIpfs called fileHash is  , ",fileHash);

            const url=`${subdomain}/ipfs/${fileHash.path}`;
            // const url=`https://ipfs.infura.io/ipfs/${fileHash.cid}`;

            console.log("**@ uploadToIpfs called url is  , ",url);

            return url;

        }
        catch(err){
            console.log("**@ error caught while uploading to ipfs , error is , ",err);
        }
    }

    const createNft= async ( name,price,image,description,router)=>{
      console.log("**@ createNft called with name , ",name);
      console.log("**@ createNft called with price , ",price);
      console.log("**@ createNft called with image , ",image);
      console.log("**@ createNft called with description , ",description);

            if(!name || !description || !price || !image){
                return console.log("**@ Incomplete data provider for creating nft");
            }

            const data = JSON.stringify({name,description,image});
            console.log("**@ stringified data is , ",data)

            try {
                const added = await client.add(data);
                console.log("**@ added data is , ",added)

                // const url = `https://infura-ipfs.io/ipfs/${added.path}`;
                const url=`${subdomain}/ipfs/${added.path}`;

                console.log("**@ url data is , ",url)


                // return url

                await createSale(url, price);
                // router.push("/searchPage");
              } catch (err) {
                console.log("**@ Error while uploading data to ipfs and creating nft, error is , ",err);
              }
    }

    const createSale= async (url,price,isReselling,id)=>{
        try{
          console.log("**@ createSale called with url , ",url);
          console.log("**@ createSale called with price , ",price);
          console.log("**@ createSale called with isReselling , ",isReselling);
          console.log("**@ createSale called with id , ",id);
          console.log("**@ ethers is  , ",ethers);
          console.log("**@ utils is , , ",ethers.utils);

            const etherPrice= ethers.utils.parseUnits(price,18);
            console.log("**@ etherPrice is , ",etherPrice);
            const contract = await connectWithSmartContract();
            console.log("**@ contract is , ",contract);

            const listingPrice= await contract.getListingPrice();
            console.log("**@ listingPrice is , ",listingPrice);

            const transaction = !isReselling
            ? await contract.createNft(url, etherPrice, {
                value: listingPrice.toString(),
              })
            : await contract.resellToken(id, etherPrice, {
                value: listingPrice.toString(),
              });
    
          await transaction.wait();
          console.log("**@ create sale tx is , ",transaction);
          router.push("/searchPage")


        }
        catch(err){
            console.log("**@ error caught while creating sale , error is , ",err);
        }

    }

    const fetchNfts= async ()=>{
        try{
            // const provider= new ethers.providers.JsonRpcProvider();
            console.log("**@ nft provider is , ",provider);

            const contract= fetchContract(provider);
            console.log("**@ nft contract is , ",contract);
            const data= await contract.fetchMarketItems();
            console.log("**@ nft data is , ",data);

            const items = await Promise.all(
                data.map(
                  async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                    const tokenURI = await contract.tokenURI(tokenId);
      
                    const {
                      data: { image, name, description },
                    } = await axios.get(tokenURI);
                    const price = ethers.utils.formatUnits(
                      unformattedPrice.toString(),
                      "ether"
                    );
      
                    return {
                      price,
                      tokenId: tokenId.toNumber(),
                      seller,
                      owner,
                      image,
                      name,
                      description,
                      tokenURI,
                    };
                  }
                )
              );
      
              console.log("**@ NFT fetched items are , ",items);
              return items;

        }
        catch(err){
            console.log("**@ error caught while catching nfts , error is , ",err);
        }
    };

    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
          if (currentAccount) {
            const contract = await connectWithSmartContract();
    
            const data =
              type == "fetchItemsListed"
                ? await contract.fetchItemsListed()
                : await contract.fetchMyNFTs();
    
            const items = await Promise.all(
              data.map(
                async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                  const tokenURI = await contract.tokenURI(tokenId);
                  const {
                    data: { image, name, description },
                  } = await axios.get(tokenURI);
                  const price = ethers.utils.formatUnits(
                    unformattedPrice.toString(),
                    "ether"
                  );
    
                  return {
                    price,
                    tokenId: tokenId.toNumber(),
                    seller,
                    owner,
                    image,
                    name,
                    description,
                    tokenURI,
                  };
                }
              )
            );
            return items;
          }
        } catch (err) {
          console.log("**@ Error caught  while fetching listed NFTs , error is  , ",err);
        }
      };

      const buyNft = async (nft) => {
        try {
          console.log("**@ buyNft called with nft , ",nft)
          const contract = await connectWithSmartContract();
          const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    
          const transaction = await contract.createMarketSale(nft.tokenId, {
            value: price,
          });
    
          await transaction.wait();
          router.push("/author");
        } catch (err) {
          console.log("**@ Error caught While buying NFT , error is , ",err);
        }
      };

    // useEffect(()=>{
    //     connectWithSmartContract();
    // },[]);

    useEffect(() => {
      if (currentAccount) {
        connectWithSmartContract();
        fetchNfts();
      }
    }, []);

    


    return (
        <NftMarketPlaceContext.Provider value={{
            currentAccount,
            connectWallet,
            uploadToIpfs,
            createNft,
            createSale,
            fetchNfts,
            fetchMyNFTsOrListedNFTs,
            buyNft
        }}>
            {children}
        </NftMarketPlaceContext.Provider>
    )

});

export const useNftMarketPlaceContext = () => useContext(NftMarketPlaceContext);
