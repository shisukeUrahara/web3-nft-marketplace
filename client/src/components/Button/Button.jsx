import React from 'react';
import Style from './Button.module.css'

const Button = ({ btnText, handleClick }) => {
    return (
        <div className={Style.box}>
            <button onClick={() => handleClick()} className={Style.button}>{btnText}</button>

        </div>
    )
}

export default Button