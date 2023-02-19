import React from 'react';

import Style from '../styles/NFTDetails.module.css';
import { Button,Category,Brand } from '../components';
import { NFTDetailsPage } from 'src/NFTDetailsPage';

const NFTDetails = () => {
  return (
    <div>
        <NFTDetailsPage />
        <Category />
        <Brand />
    </div>
  )
}

export default NFTDetails