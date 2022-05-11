import React from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Nav from './Nav';
import { motion } from "framer-motion"

function Cars() {
      return (
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: 0.4 }}>
                  <Nav />
                  <GlobalStyle />
                  <MainCars>
                        <Card>
                              <img src="/images/1.png" alt="benz car" />
                              <h2>Mercedes Benz</h2>
                              <p>Best Car In The World</p>
                        </Card>
                        <Card>
                              <img src="/images/2.png" alt="benz car" />
                              <h2>Mercedes Benz</h2>
                              <p>Best Car In The World</p>
                        </Card>
                        <Card>
                              <img src="/images/3.png" alt="benz car" />
                              <h2>Mercedes Benz</h2>
                              <p>Best Car In The World</p>
                        </Card>
                        <Card>
                              <img src="/images/4.png" alt="benz car" />
                              <h2>Mercedes Benz</h2>
                              <p>Best Car In The World</p>
                        </Card>
                        <Card>
                              <img src="/images/5.png" alt="benz car" />
                              <h2>Mercedes Benz</h2>
                              <p>Best Car In The World</p>
                        </Card>
                        <Card>
                              <img src="/images/6.png" alt="benz car" />
                              <h2>Mercedes Benz</h2>
                              <p>Best Car In The World</p>
                        </Card>
                  </MainCars>
            </motion.div>
      )
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Playfair Display', serif;
    overflow-x: hidden;
  }
`;

const MainCars = styled.div`
      width: 100vw;
      min-height: 100vh;
      display: grid;
      grid-template-columns: repeat(1,1fr);
      padding:80px 20px;
      grid-gap:30px;
      @media (min-width:768px){
            grid-template-columns: repeat(2,1fr);
      }
      @media (min-width:1280px){
            grid-template-columns: repeat(3,1fr);
      }
`;

const Card = styled.div`
      img{
            width: 300px;
      }
      &:hover{
            transform: scale(1.1,1.1);
      }
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
`;

export default Cars