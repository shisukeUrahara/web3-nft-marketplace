import React from 'react';
import Style from './Title.module.css';

const Title = ({ heading, content }) => {
    return (
        <div className={Style.title}>
            <div className={Style.title_box}>
                <h2>{heading}</h2>
                <p>{content}</p>

            </div>

        </div>
    )
}

export default Title