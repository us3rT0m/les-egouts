import React, {useEffect, useRef} from 'react';

const Canva = ({pictures = [], display = true}) => {

    const canvaRef = useRef(null);
    const downloadRef = useRef(null);

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
            //Faire les calculs ici
            context.drawImage(l.render, l.x, l.y, l.width, l.height);
        });

    }, [pictures]);

    const download = () => {
        const dt = canvaRef.current.toDataURL('image/png');
        console.log(dt);
        downloadRef.current.href = dt;
    }

    return (
        <div className="flex flex-col w-100 items-center mb-2">
            <h1 className="text-xl">Canva</h1>
            <canvas className="border-2 border-black rounded h-100 w-100" ref={canvaRef} />
            <a download={"canvas.png"} className="p-2 bg-green-500 rounded h-10 w-24 mt-1" onClick={download} ref={downloadRef}>Download</a>
        </div>
    )
}

export default Canva