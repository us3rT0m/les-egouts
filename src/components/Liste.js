import React, {useRef, useState} from 'react';
import log from "tailwindcss/lib/util/log";
import Preview from "./Preview";


const Liste = (props) => {

    const [pictures, setPictures] = useState([]);
    const [pId, setPId] = useState(1);
    const refInput = useRef();

    // useEffect(()=>{
    //     setImage
    // }, [])

    const handleChange = e => {
        console.log("handle change");
        const file = e.target.files[0];

        if (e.target.files.length) {
            // setImage({
            //     preview: URL.createObjectURL(file),
            //     raw: file
            // });
            console.log("set uploaded");

            let p = pictures.filter(p => p.id === pId)[0];
            console.log(p);

            p.file = file;
            p.name = file.name;
            console.log(pictures);

            console.log("push uploaed");
            props.setUploaded(pictures);
            console.log("set pictures");
            setPictures(pictures);
            console.log(pictures);
        }

        setPId(pId +1);
    };

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        //formData.append("image", image.raw);
        console.log("handle upload");
        refInput.current.click();
        console.log("ref input click");
        const jsonfile = {
            id: pId,
            name: "",
            settings: {
                x: 0, y: 0, width: 64, height: 64
            },
            file: null
        }
        console.log("set pictures");
        setPictures([...pictures, jsonfile]);
        console.log(pictures);
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