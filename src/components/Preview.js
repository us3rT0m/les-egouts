import React, {useContext, useEffect, useState} from "react";

function Preview({ picture }) {

    const [image, setImage] = useState(picture.file);

    console.log(picture);
    console.log(picture.file);

    useContext(() => {

        async function uploadImage() {
            const obj = await URL.createObjectURL(picture.file);
            console.log(obj);
            setImage(obj);
        }

        uploadImage();

    }, [image])

    return (
        <li>
            <p>{picture.name}</p>
            <img src={image} width="300" height="300"  alt="Image"/>
            <div className="border-2 border-black w-72 mt-5">
                <form action="">
                    <div className="m-2" >
                        <label> X : </label>
                        <input type="number" className="w-100" value={picture.settings.x} onChange={e => picture.settings.x = e.target.value}/>
                    </div>
                    <div className="m-2" >
                        <label> Y : </label>
                        <input type="number" className="w-100" value={picture.settings.y} onChange={e => picture.settings.y = e.target.value} />
                    </div>
                    <div className="m-2" >
                        <label> Width : </label>
                        <input type="number" className="w-100" value={picture.settings.width} onChange={e => picture.settings.width = e.target.value} />
                    </div>
                    <div className="m-2" >
                        <label> Height : </label>
                        <input type="number" className="w-100" value={picture.settings.height} onChange={e => picture.settings.height = e.target.value}/>
                    </div>
                </form>
            </div>
        </li>
    );
}

export default Preview;