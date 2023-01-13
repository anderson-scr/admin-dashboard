import React from "react";
import "./footerStyle.css";
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="container-footer">
      <div className="topLine"></div>
      <div className="container d-flex justify-content-between">
        <p className="pFooter">
          This is only for study and portfolio propose. All the code it's in my <a className="aGithubLinkedin" target="_blank" href="https://github.com/anderson-scr"> GitHub <BsGithub size={20}/> </a>
        </p>
        <p className="pFooter ">
          Also check it out my <a className="aGithubLinkedin" target="_blank">linkedin <BsLinkedin size={20}/> </a>
        </p>
      </div>
    </div>
  )
}

export default Footer;