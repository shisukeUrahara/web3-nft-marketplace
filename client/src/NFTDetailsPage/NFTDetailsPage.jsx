import React from 'react';

import Style from './NFTDetailsPage.module.css';
import { NFTDescription, NFTDetailsImg, NFTTabs } from '.';

const NFTDetailsPage = () => {
    return (
        <div className={Style.NFTDetailsPage}>
            <div className={Style.NFTDetailsPage_box}>
                <NFTDetailsImg />
                <NFTDescription />

            </div>

        </div>
    )
}

export default NFTDetailsPage