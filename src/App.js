import './App.css';
import Liste from './components/Liste';
import Canva from './components/Canva';
import React, { useState, useEffect } from 'react';
import Core from "./core/core-pictures";

function App() {

    //const [uploaded, setUploaded] = useState([]);

    const pictureUpdated = (picture) => {

        const copy = [...Core.pictures];

        const where = copy.filter(p => p.id === picture.id);
        if(where) {
            where.settings = picture.settings;
            Core.setUploaded(copy);
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
