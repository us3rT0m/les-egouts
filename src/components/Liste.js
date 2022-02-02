import React, { useState, useRef } from 'react';


const Liste = (props) => {

    const [image, setImage] = useState({ preview: "", raw: "" });
    const refInput = useRef();
    const handleChange = e => {

        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });

            props.onChangePic(image);
        }
    };

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
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
                <li>
                    <img src={image.preview} alt="dummy" width="300" height="300" />
                </li>
            </ul>
        </div>
        </div>
    );
}


export default Liste