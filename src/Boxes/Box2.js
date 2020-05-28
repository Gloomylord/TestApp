import React from 'react';
import styled from "styled-components";

const Box = styled.div`
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  > h2 {
    align-self: center;
    max-width: 40vw;
    text-align: center;
    font-weight: 100;
    color: white;
    font-size: 4vw;
    position: relative;
    top: -4vh;
    transition: top 700ms;
  }
  > img {
    transition: top 700ms;
    position: absolute;
  }
  ${ props => 
    `.ice1 {
        top:${(props.paginationNumber - 1) * 15 + 24}vh;
        left: 9vw;
        width: 4vw;
    }
    .ice-back1 {
        top: ${(props.paginationNumber - 1) * 10 + 79}vh;
        left: 67vw;
        width: 7vw;
    }
    .ice2 {
        top: ${(props.paginationNumber - 1) * 10 + 63}vh;
        left:23vw;
        width: 9vw;
    }
    .ice3 {
        top:${(props.paginationNumber - 1) * 14 + 8}vh;
        left: 85vw;
        width: 21vw;
    }
    > h2 {
        top: ${(props.paginationNumber - 1) * 17 - 4}vh;
    }
    `
}
`;



function App({paginationNumber}) {
    return (
        <Box paginationNumber={paginationNumber}>
            <h2>Основа терапии— патогенез СД2</h2>
            <img className='ice1'
                 tabIndex={-1}
                 alt='decoration-ice'
                 src='/ice/ice1.png' />
            <img className='ice-back1' tabIndex={-1}
                 alt='decoration-ice'
                 src='/ice/ice-back1.png' />
            <img className='ice2'
                 tabIndex={-1}
                 alt='decoration-ice'
                 src='/ice/ice2.png' />
            <img className='ice3'
                 tabIndex={-1}
                 alt='decoration-ice'
                 src='/ice/ice3.png' />
        </Box>
    );
}

export default App;
