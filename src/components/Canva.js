import React, {useEffect, useState} from 'react';

export const fileToPicture = async (p) => {
    let v = new Image();

    if (p instanceof File) {
        v.src = await getBase64(p);
        return v;
    } else if(p instanceof ImageData) {
        return p;
    }
};

function getBase64(file) {
    return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        reader.onload = function() {
            resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

const Canva = ({pictures = [], display = true}) => {

    const [loaded, setLoaded] = useState([]);

    //Liste des images
    useEffect(() => {
        //On copie la liste des images
        let copy = [...pictures];

        async function loadPictures(list) {

            let newest = [];

            for (const picture of list) {
                let image = await fileToPicture(picture.file);
                if(image) {
                    newest.push({
                        i: image,
                        s: picture.settings
                    });
                }
            }

            setLoaded(newest);
        }

        loadPictures(copy);
    }, [pictures]);

    useEffect(() => {
        const canvas = document.getElementById("EgoutCanvas");
        const context = canvas.getContext("2d");

        //Clear du canvas a chaque reload
        context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);

        loaded.forEach(l => {
            setTimeout(() => {
                const settings = l.s;
                context.drawImage(l.i, settings.x, settings.y, settings.width, settings.height);
            }, 200);
        })

    }, [loaded]);

    return (
        <div className="flex flex-col w-4/5">
            <h1>Canva</h1>
            <div className="border-2">
                <canvas style={display?{display:'block'}:{display: 'none'}} id="EgoutCanvas" />
            </div>
        </div>
    )
}

export default Canva