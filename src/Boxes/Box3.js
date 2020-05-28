import React, {useState, useEffect, useRef} from 'react';
import styled from "styled-components";
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const Box = styled.div`
    text-align: center;
    height: 100vh;
    width: 300vw;
    display: flex;
    flex-direction: row;
    justify-content: start;
    position: relative;
`;

const Slider = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 2vh;
    width: 70vw;
    left: 15vw;
    bottom: 10vh;
    background: rgba(209,234,255,0.45);
    z-index: 10;
    ${props =>
    `> div {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        background-color: rgba(236,236,236,0.84);
        width: ${(2 - props.tabNumber) * 50}%;
        height: 100%;              
    }
    
    > img {
      align-self: center;
      width: 5vw;
      position: absolute;
      transition: 0;
      left: ${67.5 - props.tabNumber * 70 / 2}vw;
    }`
}
    ${props =>
    `opacity:${props.paginationNumber === 2 ? 1 : 0};` +
    `transition:${props.paginationNumber === 2 ? 'opacity 2s' : ' opacity 100ms'}`
}
`;


function App({paginationNumber, onTouchStart}) {
    let [tabNumber, setTabNumber] = useState(0);
    const refSlider = useRef(null);
    const refDiv = useRef(null);
    const refThumb = useRef(null);

    function onTouch(event) {
        if (refSlider) {
            refThumb.current.style.transition = '';
            let shiftX = event.targetTouches[0].screenX - refThumb.current.getBoundingClientRect().left;

            document.removeEventListener('touchstart', onTouchStart);
            document.addEventListener('touchmove', onTouchMove);
            document.addEventListener('touchend', onTouchEnd);

            function onTouchMove(event) {
                let newLeft = event.targetTouches[0].screenX - shiftX - refSlider.current.getBoundingClientRect().left;
                refDiv.current.style.width = 100 * (newLeft + refThumb.current.offsetWidth / 2) / refSlider.current.offsetWidth + '%';
                if (newLeft < -refThumb.current.offsetWidth / 2) {
                    newLeft = -refThumb.current.offsetWidth / 2;
                }

                let rightEdge = refSlider.current.offsetWidth - refThumb.current.offsetWidth / 2;

                if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }
                let zone = refSlider.current.getBoundingClientRect().width * 2 / 3 + refSlider.current.getBoundingClientRect().left;
                if (event.targetTouches[0].clientX > zone) {
                    setTabNumber(0);
                } else if (event.targetTouches[0].clientX > zone - refSlider.current.getBoundingClientRect().width / 3) {
                    setTabNumber(1);
                } else {
                    setTabNumber(2);
                }

                refThumb.current.style.left = newLeft + 'px';
            }

            function onTouchEnd() {
                refThumb.current.style.transition = '200ms';
                refThumb.current.style.left = '';
                refDiv.current.style.width = '';
                document.removeEventListener('touchend', onTouchEnd);
                document.removeEventListener('touchmove', onTouchMove);
            }
        }
    }

    useEffect(() => {
        if (refThumb) {
            refThumb.current.ondragstart = function () {
                return false;
            };
        }
    });

    return (
        <Box>
            <Slider ref={refSlider} tabNumber={tabNumber} paginationNumber={paginationNumber}>
                <div ref={refDiv}/>
                <img id='thumb' ref={refThumb} onTouchStart={onTouch} tabIndex={-1} alt='toggle' src='/polygon.png'/>
            </Slider>
            <Tab1 tabNumber={tabNumber}/>
            <Tab2 tabNumber={tabNumber}/>
            <Tab3 tabNumber={tabNumber}/>
        </Box>
    );
}

export default App;
