import React, {useEffect} from 'react';

export const fileToPicture = async (p) => {
    let v = new Image();

    if (p instanceof File) {
        v.src = await getBase64(p);
        return v;
    } else if(p instanceof ImageData) {
        return p;
    }

    console.log("return");
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

    //Liste des images
    useEffect(() => {
        const canvas = document.getElementById("EgoutCanvas");
        const context = canvas.getContext("2d");

        //Clear du canvas a chaque reload
        context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);

        console.log("canvas");
        console.log(pictures);

        //On copie la liste des images
        let copy = [...pictures];
        //On filtre les images en fonctionde l'ordre
        // copy.sort(function (p, pa) {
        //     return p.order >= pa.order;
        // });

        console.log("copy");
        console.log(copy);

        async function loadPictures(p) {
            for (const picture of copy) {
                console.log("rendering image");
                console.log(picture);
                let image = await fileToPicture(picture.file);
                console.log(image);
                let settings = picture.settings;
                console.log(settings);
                context.drawImage(image, settings.x + Math.random() * 15, settings.y, settings.width, settings.height);
            }
        }

        loadPictures(copy);

    }, [pictures]);

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