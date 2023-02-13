import React from 'react';
import Style from './HelpCenter.module.css';
import Link from 'next/link';

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];


  return (
    <div className={Style.box}>
      {
        helpCenter.map((item, index) => (
          <div className={Style.helpCenter} key={index + 1}>
            <Link href={{ pathname: `${item.link}` }}>
              {item.name}
            </Link>

          </div>

        ))
      }

    </div>
  )
}

export default HelpCenter