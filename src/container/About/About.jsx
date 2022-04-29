import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

const About = () => {

  const abouts = [
    {
      title: 'Full stack developer',
      description: 'Create full stack web applications with MERN stack',
      imgUrl: images.about01,
    },
    {
      title: 'Frontend Developer',
      description: 'Specialize in creating responsive, user-friendly web applications using the latest technologies.',
      imgUrl: images.about02,
    },
    {
      title: 'Web3 developer',
      description: 'Constantly learning web3 development.',
      imgUrl: images.about03,
    },
    {
      title: 'Web developer',
      description: 'I am a great web developer.',
      imgUrl: images.about04,
    },
  ]

  return (
    <>
      <h2 className="head-text">
        I Know that
        <span> Good Dev</span>
        <br/>
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about,index) => (
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale: 1.1}}
            transition={{ duration: 0.5, type:'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className="bold-text" style={{marginTop: 20}}> {about.title} </h2>
            <p className="bold-text" style={{marginTop: 10}}> {about.description} </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;





