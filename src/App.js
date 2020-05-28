import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Box1 from './Boxes/Box1.js';
import Box2 from './Boxes/Box2.js';
import Box3 from './Boxes/Box3.js';
import Pagination from './Pagination/index';


function App() {
    let [paginationNumber, setPaginationNumber] = useState(0);
    let scrollRef = useRef(null);

    function changePaginationNumber(number) {
        setPaginationNumber(number);
    }

    useEffect(() => {
            document.documentElement.scrollTo({
                top: Math.ceil(document.documentElement.scrollHeight / 3) * paginationNumber,
                left: 0,
                behavior: 'smooth'
                });
    }, [paginationNumber]);

    useEffect(() => {
        document.addEventListener('touchstart', onTouchStart);
    });

    function onTouchStart (event) {
        if(event.target.id !== 'thumb') {
            let firstPosY = event.targetTouches[0].screenY;
            let lastPosY = event.targetTouches[0].screenY;
            let isChangeNumber = false;
            let isUP = false;
            let timer;
            document.addEventListener('touchmove', onTouchMove);

            function onTouchMove(event) {
                if (event.targetTouches[0].screenY < lastPosY) {
                    isUP = true;
                } else if (event.targetTouches[0].screenY > lastPosY) {
                    isUP = false;
                }
                lastPosY = event.targetTouches[0].screenY;
                isChangeNumber = true;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    isChangeNumber = false;
                }, 200);
            }

            document.body.ontouchend = function (event) {
                if (isChangeNumber && Math.abs(lastPosY - firstPosY) > 30) {
                    if (paginationNumber < 2 && isUP) {
                        changePaginationNumber(paginationNumber + 1)
                    } else if (paginationNumber > 0 && !isUP) {
                        changePaginationNumber(paginationNumber - 1)
                    }
                }
                document.removeEventListener('touchmove', onTouchMove);
            }
        }
    }

    return (
        <div  className='main' ref={scrollRef}>
            <img tabIndex={-1} alt='background' src='/background.jpg'/>
            <Pagination paginationNumber={paginationNumber}
                        changePaginationNumber={changePaginationNumber}/>
            <Box1 paginationNumber={paginationNumber}/>
            <Box2 paginationNumber={paginationNumber}/>
            <Box3 paginationNumber={paginationNumber} onTouchStartProps={onTouchStart}/>
        </div>
    );
}

export default App;
