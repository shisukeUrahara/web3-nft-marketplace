import React, { useState } from 'react';
import Image from 'next/legacy/image';
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import { TiSocialFacebook, TiSocialInstagrama, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';
import { BsThreeDots } from 'react-icons/bs';

import Style from './AuthorProfileCard.module.css';
import images from '../../img';
import { Button } from '@/components/index';

const AuthorProfileCard = () => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);


    return (
        <div>AuthorProfileCard</div>
    )
}

export default AuthorProfileCard