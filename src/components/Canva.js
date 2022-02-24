import React, {useEffect, useRef} from 'react';
import core from "../core/core-pictures";

const Canva = ({pictures = [], display = true}) => {

    const canvaRef = useRef(null);
    const downloadRef = useRef(null);

    useEffect(() => {
        core.draw(canvaRef.current, pictures);
    }, [pictures]);

    const download = () => {
        const dt = canvaRef.current.toDataURL('image/png');
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