import React, { useEffect, useState } from "react";
import './Sirup.css';

import artist from './assets/content-artist.png';
import artistBg from './assets/content-panel-pc.webp';
import logo from './assets/content-logo.svg';
import rollbounce from './assets/content-rollbounce.png';

const Sirup = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(document.querySelectorAll('.man img'));

  }, []);

  const mouseMoveFunc = (e) => {
    let x = e.pageX - window.innerWidth / 2;
    // let y = e.pageY - window.innerHeight / 2;

    content[0].style.transform = `translateX(${- x / 20}px)`;
    content[1].style.transform = `translateX(${x / 35}px)`;
    content[2].style.transform = `translateX(${x / 10}px)`;
  }

  return (
    <div className="body">
      <div className="logo">
        <img src={logo} alt="" style={{
          width: "200px",
          position: 'absolute'
        }} />
      </div>
      <div className="man" onMouseMove={mouseMoveFunc}>
        <img src={artist} style={{
          width: "400px",
          height: "400px",
          position: "absolute",
          zIndex: 50,
        }} alt="" />
        <img src={artistBg} style={{
          width: "400px",
          height: "400px",
          zIndex: 10,
        }} alt="" />
        <img src={rollbounce} style={{
          width: '200px',
          height: '100px',
          position: "absolute",
          top: '200px',
          right: "400px",
          zIndex: 30,
        }} />
      </div>
    </div>
  )

}

export default Sirup;