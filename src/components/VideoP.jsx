import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Nav from './Nav'
import { motion } from 'framer-motion'

function VideoP() {
      return (
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.4 }}>
                  <GlobalStyle />
                  <Nav />
                  <BodyV>

                        <Video controls src="/videos/trailer.mp4"></Video>
                  </BodyV>
            </motion.div>
      )
}

const Video = styled.video`
max-width: 900px;
`;

const BodyV = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(to bottom, #222,#111);
display:flex;
align-items: center;
justify-content: center;
`;


const GlobalStyle = createGlobalStyle`
  *{

    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Playfair Display', serif;
    overflow-x: hidden;
  }
`;

export default VideoP