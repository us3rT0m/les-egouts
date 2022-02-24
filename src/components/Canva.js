import React, {useEffect, useRef} from 'react';

const Canva = ({pictures = [], display = true}) => {

    const canvaRef = useRef(null);

    useEffect(() => {
        const canvas = canvaRef.current;
        const context = canvas.getContext("2d");

        console.log("clear rect");

        //Clear du canvas a chaque reload
        context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);

        pictures.forEach(l => {
            console.log("je dessine")
            console.log(l);
            console.log(l.render);
            context.drawImage(l.render, l.x, l.y, l.width, l.height);
        });

    }, [pictures]);

    return (
        <div className="flex flex-col w-4/5">
            <h1>Canva</h1>
            <div className="border-2">
                <canvas style={display?{display:'block'}:{display: 'none'}} width="500" height="500" ref={canvaRef}/>
            </div>
        </div>
    )
}

export default Canva