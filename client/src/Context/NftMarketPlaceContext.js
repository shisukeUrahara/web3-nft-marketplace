import React,{useState,useEffect,useContext} from 'react';
import web3modal from 'web3modal';
import {ethers} from 'ethers';
import Router from 'next/router';
import {create as ipfsHttpClient } from 'ipfs-http-client';
import axios from 'axios';

import { NftMarketPlaceABI,NftMarketPlaceAddress } from './constants';

const NftMarketPlaceContext= React.createContext();
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");


//  smart contract functions

//  fetching smart contract
const fetchContract= (signerOrProvider)=>{
    return new ethers.Contract(NftMarketPlaceAddress,NftMarketPlaceABI,signerOrProvider);
}

//  connecting with smart contract
const connectWithSmartContract= async ()=>{
    try{
        const web3Modal=new web3modal();
        const connection= await web3Modal.connect();
        const provider= new ethers.providers.Web3Provider(connection);
        const signer= provider.getSigner();
        const contract= fetchContract(signer);
        return contract
    }
    catch(err){
        console.log("**@ error caught while connecting with smart contract , error is , ",err);
    }
}

export const NftMarketPlaceProvider=(({children})=>{

    const [currentAccount,setCurrentAccount]=useState("");

    const checkIfWalletConnected= async ()=>{
        try{
            if(!window.ethereum){
                console.log("**@ Install metamask");
                return;
            }
            //  metamask is present
            const accounts= await window.ethereum.request({method:"eth_accounts"});
            if(accounts.length){
                console.log("**@ connected accounts array is , ",accounts);
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("**@ No wallet connected accounts found")
            }

        }
        catch(err){
            console.log("**@ error caught in  checkIfWalletConnected , error is , ",err);
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
            const fileHash= await client.add({client:file});
            const url=`https://ipfs.infura.io/ipfs/${fileHash.path}`;
            return url;

        }
        catch(err){
            console.log("**@ error caught while uploading to ipfs , error is , ",err);
        }
    }

    const createNft= async (formInput,fileUrl,router)=>{
            const {name,description,price}=formInput;

            if(!name || !description || !price || !fileUrl){
                return console.log("**@ Incomplete data provider for creating nft");
            }

            const data = JSON.stringify({name,description,image:fileUrl});

            try {
                const added = await client.add(data);
          
                const url = `https://infura-ipfs.io/ipfs/${added.path}`;

                return url

                // await createSale(url, price);
                // router.push("/searchPage");
              } catch (err) {
                console.log("**@ Error while uploading data to ipfs and creating nft, error is , ",err);
              }
    }

    const createSale= async (url,price,isReselling,id)=>{
        try{
            const etherPrice= ethers.utils.parseUnits(price,"ether");
            const contract = await connectWithSmartContract();
            const listingPrice= await contract.getListingPrice();
            const transaction = !isReselling
            ? await contract.createToken(url, etherPrice, {
                value: listingPrice.toString(),
              })
            : await contract.resellToken(id, etherPrice, {
                value: listingPrice.toString(),
              });
    
          await transaction.wait();
          console.log("**@ create sale tx is , ",transaction);


        }
        catch(err){
            console.log("**@ error caught while creating sale , error is , ",err);
        }

    }

    const fetchNfts= async ()=>{
        try{
            const provider= new ethers.providers.JsonRpcProvider();
            const contract= fetchContract(provider);
            const data= await contract.fetchMarketItem();

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

      const buyNFT = async (nft) => {
        try {
          const contract = await connectWithSmartContract();
          const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    
          const transaction = await contract.createMarketSale(nft.tokenId, {
            value: price,
          });
    
          await transaction.wait();
        //   router.push("/author");
        } catch (error) {
          console.log("**@ Error caught While buying NFT , error is , ",err);
        }
      };

    useEffect(()=>{
        checkIfWalletConnected();
    },[])

    


    return (
        <NftMarketPlaceContext.Provider value={{
            currentAccount,
            checkIfWalletConnected,
            connectWallet,
            uploadToIpfs,
            createNft,
            createSale,
            fetchNfts,
            fetchMyNFTsOrListedNFTs,
            buyNFT
        }}>
            {children}
        </NftMarketPlaceContext.Provider>
    )

});

export const useNftMarketPlaceContext = () => useContext(NftMarketPlaceContext);
