import React, { useState} from "react";
import core from "../core/core-pictures";


function Preview({ picture, onUpdated }) {

    const [x, setX] = useState(picture.x);
    const [y, setY] = useState(picture.y);
    const [width, setW] = useState(picture.width);
    const [height, setH] = useState(picture.height);

    const onChange = () => {
        core.updatePicture(picture, x, y, width, height);
        onUpdated(core.pictures);
    }

    return (
        <li className="flex flex-col items-center ml-2 mr-2">
            <p>{picture.name}</p>
            <img src={picture.blob} width="300" height="300"  alt="Image"/>
            <div className="border-2 border-black w-72 mt-5 rounded">
                <h2 className="text-center">Modifier l'image</h2>
                <form action="" className="flex flex-col w-100 items-center">
                    <div className="m-2" >
                        <label> X : </label>
                        <input type="number" className="w-100" value={x}  onChange={e => {
                            setX(e.target.value);
                            onChange();
                        }}/>
                    </div>
                    <div className="m-2" >
                        <label> Y : </label>
                        <input type="number" className="w-100" value={y} onChange={e => {
                            setY(e.target.value);
                            onChange();
                        }} />
                    </div>
                    <div className="m-2" >
                        <label> Width : </label>
                        <input type="number" className="w-100" value={width} onChange={e => {
                            setW(e.target.value);
                            onChange();
                        }} />
                    </div>
                    <div className="m-2" >
                        <label> Height : </label>
                        <input type="number" className="w-100" value={height} onChange={e => {
                            setH(e.target.value);
                            onChange();
                        }}/>
                    </div>
                </form>
            </div>
        </li>
    );
}

export default Preview;