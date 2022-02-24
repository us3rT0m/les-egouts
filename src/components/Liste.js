import React, {useEffect, useRef, useState} from 'react';
import log from "tailwindcss/lib/util/log";
import Preview from "./Preview";
import core from "../core/core-pictures";


const Liste = ({uploaded, setUploaded, onUpdated}) => {

    const refInput = useRef();

    const handleChange = e => {
        const file = e.target.files[0];

        if (e.target.files.length) {
            //Ajout d'une image dans le core
            core.addPicture(file)
                .then((p) => {
                    //Update des images
                    setUploaded(core.pictures);
                });

        }
    };

    const handleUpload = e => {
        //On empêche le upload
        e.preventDefault();
        refInput.current.click();
    };

    return (
        <div>

            <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
                ref={refInput}
            />
            <br />
            <button onClick={handleUpload}>Upload</button>

            <div>
                <ul>
                    {uploaded.length > 0 &&
                        uploaded.map(
                            (p,index) => {
                                return (
                                   <Preview picture={p} key={index} onUpdated={onUpdated}/>
                                );
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
}


export default Liste