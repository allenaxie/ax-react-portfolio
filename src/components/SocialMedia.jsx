import React from 'react';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/allenaxie" target="_blank" rel="noreferrer">
            <BsGithub/>
          </a>
        </div>
        {/* <div>
            <FaFacebookF/>
        </div> */}
        <div>
          <a href="https://www.instagram.com/allenaxiee/" target="_blank" rel="noreferrer">
            <BsInstagram/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia;