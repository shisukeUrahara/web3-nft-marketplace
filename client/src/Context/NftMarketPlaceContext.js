import React,{useState,useEffect,useCallback} from 'react';
import web3Modal from 'web3modal';
import {ethers} from 'ethers';
import Router from 'next/router';
import {NftMarketPlaceAddress,NftMarketPlaceABI} from './constants';

const NftMarketPlaceContext= React.createContext();

export const NftMarketPlaceProvider=(({children})=>{

    return (
        <NftMarketPlaceContext.Provider value={{

        }}>
            {children}
        </NftMarketPlaceContext.Provider>
    )

});

export const useNftMarketPlaceContext = () => useContext(NftMarketPlaceContext);
