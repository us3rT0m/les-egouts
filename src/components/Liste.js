import React, { useState, useRef, useEffect } from 'react';


const Liste = (props) => {

    const [image, setImage] = useState({preview:'',raw:''});
    const [pictures, setPictures] = useState([]);
    const refInput = useRef();

    // useEffect(()=>{
    //     setImage
    // }, [])

    const handleChange = e => {

        const file = e.target.files[0];

        

        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(file),
                raw: file
            });
            props.setUploaded([...props.uploaded, pictures]);
            console.log(file)  // print file uploaded in console
        }
    };

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
        refInput.current.click();
        const jsonfile = {
            settings: {
                x: 0, y: 0, width: 64, height: 64
            },
            file: image
        }
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
                    {props.uploaded.length > 0 && 
                    props.uploaded.map(
                        (x,index) => {
                            return (
                                <li key={index}>
                                    <p>{x.name}</p>
                                    <img src={URL.createObjectURL(x)} width="300" height="300" />
                                    <div className="border-2 border-black w-72 mt-5">
                                        <form action="">
                                            <div className="m-2" >
                                                <label> X : </label>
                                                <input type="number" className="w-100" value={x.settings.x} onChange={e => x.settings.x = e.target.value}/>
                                            </div>
                                            <div className="m-2" >
                                                <label> Y : </label>
                                                <input type="number" className="w-100" value={x.settings.y} onChange={e => x.settings.y = e.target.value} />
                                            </div>
                                            <div className="m-2" >
                                                <label> Width : </label>
                                                <input type="number" className="w-100" value={x.settings.width} onChange={e => x.settings.width = e.target.value} />
                                            </div>
                                            <div className="m-2" >
                                                <label> Height : </label>
                                                <input type="number" className="w-100" value={x.settings.height} onChange={e => x.settings.height = e.target.value}/>
                                            </div>
                                        </form>
                                    </div>
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