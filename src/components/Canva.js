import React, {useEffect} from 'react';

const Canva = ({pictures = [], display = true}) => {

    //Liste des images
    useEffect(() => {
        const context = document.getElementById("EgoutCanvas").getContext("2d");

        //On copie la liste des images
        let copy = [...pictures];
        //On filtre les images en fonctionde l'ordre
        copy.sort(function (p, pa) {
            return p.order >= pa.order;
        });
        copy.forEach(picture => {
            let settings = picture.settings;

            context.drawImage(picture.file, settings.x, settings.y, settings.width, settings.height);
        });
    }, pictures);

    return (
        <div className="flex flex-col w-4/5">
            <h1>Canva</h1>
            <div className="border-2">
                <canvas style={display?{display:'block'}:{display: 'none'}} id="EgoutCanvas">
                    
                </canvas>
            </div>

            <div className="border-2 border-black w-72 mt-5">
                <form action="">
                    <div className="m-2" >
                        <label> X : </label>
                        <input type="number" className="w-100" />
                    </div>
                    <div className="m-2" >
                        <label> Y : </label>
                        <input type="number" className="w-100" />
                    </div>
                    <div className="m-2" >
                        <label> Width : </label>
                        <input type="number" className="w-100" />
                    </div>
                    <div className="m-2" >
                        <label> Height : </label>
                        <input type="number" className="w-100" />
                    </div>
                    <div className="m-2" >
                        <label> Opacity : </label>
                        <input type="number" className="w-100" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Canva