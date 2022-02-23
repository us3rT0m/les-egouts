import './App.css';
import Liste from './components/Liste';
import Canva from './components/Canva';
import React, { useState, useEffect } from 'react';

function App() {

    const [uploaded, setUploaded] = useState([]);

    return (
        <div className="App flex grow justify-around w-100">
          <Canva pictures={uploaded}/>
          <Liste uploaded={uploaded} setUploaded={setUploaded} />
        </div>
    );
}

export default App;
