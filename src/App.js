import './App.css';
import Liste from './components/Liste';
import Canva from './components/Canva';
import React, { useState } from 'react';

function App() {

    const [pictures, setPictures] = useState([]);

    const onUploaded = (pcs) => {
        setPictures([...pcs]);
    }

    return (
        <div className="App flex flex-col grow justify-around w-100">
          <Canva pictures={pictures}/>
          <hr />
          <Liste uploaded={pictures} setUploaded={onUploaded} onUpdated={onUploaded} />
        </div>
    );
}

export default App;
