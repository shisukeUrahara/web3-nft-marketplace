import React from 'react';
import Style from './Button.module.css'

const Button = ({ btnText, handleClick, icon, classStyle }) => {
    return (
        <div className={Style.box}>
            <button onClick={() => handleClick()} className={`${Style.button} ${classStyle}`}>{icon}  {btnText}</button>

        </div>
    )
}

export default Button