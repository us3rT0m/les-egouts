import './App.css';
import Liste from './components/Liste';
import Canva from './components/Canva';
import React, { useState, useEffect } from 'react';

function App() {

    const [uploaded, setUploaded] = useState([]);

    const pictureUpdated = (picture) => {

        const copy = [...uploaded];

        const where = copy.filter(p => p.id === picture.id);
        if(where) {
            where.settings = picture.settings;
            setUploaded(copy);
        }

    }

    return (
        <div className="App flex grow justify-around w-100">
          <Canva pictures={uploaded}/>
          <Liste uploaded={uploaded} setUploaded={setUploaded} sendUpdate={pictureUpdated} />
        </div>
    );
}

export default App;
