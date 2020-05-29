import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top:0;
  overflow: hidden;
  left: ${props => (props.tabNumber - 1) * 100}vw;
  transition: left 400ms;
  
  > img {
    position: absolute;
    opacity: 0.5;
  }
  
  .ice1 {
    top: 26vh;
    left: 2vw;
    width: 11vw;
  }

  .ice2 {
    top:81vh;
    left:70vw;
    width: 16vw;
  }
  
  .ice3 {
    opacity: 0.4;
    top:13vh;
    left: 46vw;
    width: 4vw;
  }
  .tab {
    width: 76vw;
    height: 65vh;
    z-index: 100;
    left: 15vw;
    top: 20vh;
    opacity: 1;
  }
`;

const Title = styled.div`
  position: absolute;
  font-size: 3.2vw;
  color: white;
  left: 10vw;
  top: 13vh ;
  font-weight: 100;
`;



function App({tabNumber}) {
    return (
        <Box tabNumber={tabNumber}>
            <img className='ice1' tabIndex={-1}  alt='decoration-ice' src='/ice/ice-bottom-tab1.png' />
            <img className='ice2' tabIndex={-1}  alt='decoration-ice' src='/ice/ice-bottom-tab1-3.png' />
            <img className='ice3' tabIndex={-1}  alt='decoration-ice' src='/ice/ice-bottom-tab1-3.png' />
            <img className='tab' tabIndex={-1}  alt='decoration-ice' src='/tab2.png' />
            <Title>Смертельный октет</Title>
        </Box>
    );
}

export default App;
