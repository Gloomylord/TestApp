import React from 'react';
import styled from "styled-components";
const Circle = styled.div`
    position: relative;
    align-self: center;
    ${props =>
    'width:' + props.radius * 2 + props.radiusMeasure + ';' +
    'height:' + props.radius * 2 + props.radiusMeasure + ';'
};
    > div {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top:0;
      left:0;
      z-index: 1;
    }
    > :first-child {
      animation: circle-1 ease-out 2s infinite;
    } 
    > :nth-child(2){
      animation: circle-1 ease-out 2s infinite;
      animation-delay: 500ms;     
    }
    > :nth-child(3){
      animation: circle-1 ease-out 2s infinite;
      animation-delay: 600ms; 
    }
    > :nth-child(4){
      animation: circle-1 ease-out 2s infinite;
      animation-delay: 1500ms; 
    }
    > :nth-child(5){
      animation: circle-1 ease-out 2s infinite;
      animation-delay: 1600ms; 
    }
    > :nth-child(6){
      border: 1px solid rgba(255,63,31,0.56);
      background-color: rgba(255, 169, 58, 0.39);
      z-index: 0 ;
    }
`;
function App({radius,radiusMeasure}) {
    return (
        <Circle radius={radius ? radius : 20} radiusMeasure={radiusMeasure ? radiusMeasure : 'px'}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </Circle>
    );
}

export default App;
