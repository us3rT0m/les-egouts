import React, {useRef, useState} from 'react';
import log from "tailwindcss/lib/util/log";
import Preview from "./Preview";


const Liste = (props) => {

    const [current, setCurrent] = useState();
    const [pId, setPId] = useState(1);
    const refInput = useRef();

    const handleChange = e => {
        const file = e.target.files[0];

        if (e.target.files.length) {
            current.blob = URL.createObjectURL(file);
            current.file = file;
            current.name = file.name;

            props.setUploaded([...props.uploaded, current]);
            setCurrent(null);
        }

        setPId(pId +1);
    };

    const handleUpload = e => {
        //On empêche le upload
        e.preventDefault();
        refInput.current.click();
        const jsonfile = {
            id: pId,
            name: "",
            settings: {
                x: 0, y: 0, width: 64, height: 64
            },
            file: null,
            blob: null
        }
        setCurrent(jsonfile);
    };

    return (
        <div className="flex flex-col items-center">

            <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
                ref={refInput}
            />
            <br />
            <button className="p-2 bg-green-500 rounded w-20 mt-2"onClick={handleUpload}>Upload</button>

            <div>
                <ul className="flex">
                    {props.uploaded.length > 0 &&
                        props.uploaded.map(
                            (x,index) => {
                                return (
                                   <Preview picture={x} key={index} onUpdate={props.sendUpdate}/>
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