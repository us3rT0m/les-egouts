import React, {useRef, useState} from 'react';
import log from "tailwindcss/lib/util/log";
import Preview from "./Preview";


const Liste = (props) => {

    const [pictures, setPictures] = useState([]);
    const [current, setCurrent] = useState();
    const [pId, setPId] = useState(1);
    const refInput = useRef();

    // useEffect(()=>{
    //     setImage
    // }, [])

    const handleChange = e => {
        console.log("handle change called");
        const file = e.target.files[0];
        console.log("get file from target event");

        if (e.target.files.length) {
            // setImage({
            //     preview: URL.createObjectURL(file),
            //     raw: file
            // });
            console.log("set current url");
            current.blob = URL.createObjectURL(file);
            current.file = file;
            current.name = file.name;

            console.log("set pictures");
            setPictures([...pictures, current]);
            console.log(pictures);
            console.log("push pictures");
            props.setUploaded([...props.uploaded, current]);
            setCurrent(null);
        }

        setPId(pId +1);
    };

    const handleUpload = e => {
        //On empêche le upload
        e.preventDefault();
        console.log("click on ref");
        refInput.current.click();
        console.log("create jsonfile");
        const jsonfile = {
            id: pId,
            name: "",
            settings: {
                x: 0, y: 0, width: 64, height: 64
            },
            file: null,
            blob: null
        }
        console.log(jsonfile);
        console.log("set current");
        setCurrent(jsonfile);
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
                    {pictures.length > 0 &&
                        pictures.map(
                            (x,index) => {
                                return (
                                   <Preview picture={x} key={index} />
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