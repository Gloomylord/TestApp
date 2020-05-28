import React from 'react';
import styled from "styled-components";
import Circle from './Circle';

let arr = [];

for (let i = 0; i < 3; i++) {
    arr.push(i);
}

const Pagination = styled.div`
    display: grid;
    position: fixed;
    right: 2vw;
    height: 8vw;
    width: 2vw;
    z-index: 10;
    top: calc(50vh - 4vw);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 1vw;
    > div{
        background-color: #ffffff;
        box-shadow: 0 0 0.6vw white;
        border: 0;
        border-radius: 50%;
        z-index:10;
        :hover {
          cursor: pointer;
        }
    }
    
    > .selected {
        background-color: #ffac3a;
        box-shadow: 0 0 0.6vw #ffac3a;
    }
`;

function App({paginationNumber, changePaginationNumber}) {
    return (
        <Pagination>
            {
                arr.map(value => <Circle paginationNumber={paginationNumber}
                                         changePaginationNumber={changePaginationNumber}
                                         initNumber={value}
                                         key={value}/>)
            }
        </Pagination>
    );
}

export default App;
