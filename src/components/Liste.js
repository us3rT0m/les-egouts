import React, { useState, useRef, useEffect } from 'react';


const Liste = (props) => {

    const [image, setImage] = useState({preview:'',raw:''});
    const [pictures, setPictures] = useState([]);
    const refInput = useRef();

    // useEffect(()=>{
    //     setImage
    // }, [])

    const handleChange = e => {

        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            props.setUploaded([...props.uploaded, e.target.files[0]]);
            console.log(e.target.files[0])  // print file uploaded in console
        }
    };

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        refInput.current.click();
        setPictures([...pictures, image]);
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
                    {props.uploaded.length > 0 && 
                    props.uploaded.map(
                        (x,index) => {
                            return (
                                <li key={index}>
                                    <p>{x.name}</p>
                                    <img src={URL.createObjectURL(x)} width="300" height="300" />
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        </div>
    );
}


export default Liste