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
    top: 28vh;
    left: 87vw;
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
  
`;



function App({tabNumber}) {
    return (
        <Box tabNumber={tabNumber}>
            <img className='ice1' tabIndex={-1}  alt='decoration-ice' src='/ice/ice-bottom-tab1.png' />
            <img className='ice2' tabIndex={-1}  alt='decoration-ice' src='/ice/ice-bottom-tab1-3.png' />
            <img className='ice3' tabIndex={-1}  alt='decoration-ice' src='/ice/ice-bottom-tab1-3.png' />
        </Box>
    );
}

export default App;
