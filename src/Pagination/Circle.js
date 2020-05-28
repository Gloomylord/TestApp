import React, {useState} from 'react';

function App({paginationNumber,changePaginationNumber,initNumber}) {
    let [number] = useState(initNumber);

    return (
      <div className={paginationNumber === number ? 'selected' : ''}
           onClick={() => {
               changePaginationNumber(number)
           } }/>
    );
}

export default App;
