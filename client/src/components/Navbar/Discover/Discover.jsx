import React from 'react';
import Link from 'next/link';
import Styles from './Discover.module.css';

const Discover = () => {
    const discover = [
        {
            name: "Collection",
            link: "collection",
        },
        {
            name: "Search",
            link: "searchPage",
        },
        {
            name: "Author Profile",
            link: "author",
        },
        {
            name: "NFT Details",
            link: "NFT-details",
        },
        {
            name: "Account Setting",
            link: "account",
        },
        {
            name: "Upload NFT",
            link: "uploadNFT",
        },
        {
            name: "Connect Wallet",
            link: "connectWallet",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];


    return (
        <div>
            {
                discover.map((item, index) => (
                    <div key={index + 1} className={Styles.discover}>
                        <Link href={{ pathname: `${item.link}` }}>
                            {item.name}
                        </Link>

                    </div>
                ))
            }
        </div>
    )
}

export default Discover