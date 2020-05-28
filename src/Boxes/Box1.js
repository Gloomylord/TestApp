import React from 'react';
import styled from "styled-components";
import Circle from '../CircleAnimation';

const Box = styled.div`
  height: 100vh;
  min-width: 100vw;
  text-align: center;
  position: relative;
  > h1 {
    font-size: 5vw;
    position: absolute;
    top: 10vh;
    left: 7vw;
    max-width: 70vw;
    text-align: start;
    color: #000496;
    font-weight: 100;
  }
  
  
  
`;


const Container = styled.div`
    position: absolute;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    ${props => 'left:' + (props.posX ? props.posX : 0) + ';' +
    'top:' + (props.posY ? props.posY : 0) + ';'
}
`;

const Text = styled.div`
    position: absolute;
    color: #000496;
    font-size: 2.2vw;
    ${props => 'left:' + (props.posX ? props.posX : 0) + ';' +
    'top:' + (props.posY ? props.posY : 0) + ';'
}
`;

const TextBottom = styled.div`
    position: absolute;
    color: #ffffff;
    font-size: 2.2vw;
    ${props => 'left:' + (props.posX ? props.posX : 0) + ';' +
    'top:' + (props.posY ? props.posY : 0) + ';'
}
`;

const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 5;
    left: 15vw;
    height: 10vh;
    width: 70vw;
    background-color: #ffac3a;
    box-shadow: 0 0 0.6vw #ffac3a;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-bottom: 1vh;
    border-radius: 10vw 10vw 0 0;
    clip-path: ellipse(50% 50% at 50% 100%);
    transition: bottom 200ms, opacity 400ms ;
    > div {
      color: white;
      font-size: 2vw;
      max-width: 10vw;
    }
    opacity: ${props => props.paginationNumber !== 0 ? (0 +';bottom: -10vw;') : 1 +';'

};
`;

function App({paginationNumber}) {
    return (
        <Box>
            <h1>Всегда ли цели терапии CD2 на поверхности?</h1>
            <Container posY={'34vh'} posX={'55vw'}>
                <Circle radius={2.5} radiusMeasure={'vw'}/>
            </Container>
            <Text posY={'35.5vh'} posX={'62vw'}>Цель по HbAc1</Text>

            <Container posY={'55vh'} posX={'26.5vw'}>
                <Circle radius={1.5} radiusMeasure={'vw'}/>
            </Container>
            <Text posY={'51vh'} posX={'21vw'}>Гипоклемия</Text>

            <Container posY={'67vh'} posX={'80vw'}>
                <Circle radius={1} radiusMeasure={'vw'}/>
            </Container>
            <Text posY={'63vh'} posX={'75vw'}>СС риски</Text>

            <Container posY={'69vh'} posX={'47vw'}>
                <Circle radius={1} radiusMeasure={'vw'}/>
            </Container>
            <Text posY={'65vh'} posX={'37vw'}>Осложнения СД</Text>
            { <>
                <Bottom paginationNumber={paginationNumber}/>
                < TextBottom posY={'90vh'} posX={'42.5vw'}>Листайте вниз</TextBottom>
            </>
            }

        </Box>
    );
}

export default App;
