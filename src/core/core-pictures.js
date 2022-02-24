class Core {

    /**
     * The list pictures saved into the Core
     * @type {Picture[]}
     */
    pictures = [];
    /**
     * The last id used to store the picture
     * @type {number}
     */
    id = 0;

    constructor() {}

    /**
     * Add a new picture from an upload type file
     * @param file - File object
     */
    async addPicture(file){
        let p = new Picture(this.id += 1, file);
        await p.build();
        p.default();

        this.pictures.push(p);
        return p;
    }


    updatePicture(picture, x, y, width, height) {
        if(picture) {
            console.log("set changes settings");
            if(x > 0) picture.x = parseInt(x);
            if(y > 0) picture.y = parseInt(y);
            if(width > 0) picture.width = parseInt(width);
            if(height > 0) picture.height = parseInt(height);
        }
    }

    draw(canvas, pcs = undefined) {
        if(!pcs)
            pcs = this.pictures;

        const context = canvas.getContext("2d");

        //Clear du canvas a chaque reload
        context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);

        pcs.forEach(l => {
            context.drawImage(l.render, l.x, l.y, l.width, l.height);
        });
    }
}

class Picture {

    id = -1;
    name = ""; //Name of the file

    //Positions to draw the image
    /**
     *
     * @type {number}
     */
    x = 0;
    /**
     *
     * @type {number}
     */
    y = 0;

    //Dimensions will be draw
    /**
     *
     * @type {number}
     */
    width = 64;
    /**
     *
     * @type {number}
     */
    height = 64;

    //Natural dimensions of the file
    naturalWidth = 0;
    naturalHeight = 0;

    /**
     * The file of the picture uploaded
     * @type {File}
     */
    file = null;
    /**
     * The blob uri of the picture file
     * @type {string}
     */
    blob = null;
    /**
     * The element image data to render into canva or add on html
     * @type {HTMLImageElement}
     */
    render = null;

    constructor(id, file) {
        this.id = id;
        this.file = file;
        this.name = file.name;
    }

    /**
     * Build the file into blob and render element div
     */
    async build() {
        //Return the element image with file compiled
        this.render = new Image();
        this.render.src = await this.buildRender();

        this.blob = URL.createObjectURL(this.file);

        this.default();
    }

    buildRender() {
        return new Promise((res, rej) => {
            let reader = new FileReader();
            reader.onload = function () {
                res(reader.result);
            };
            reader.onerror = rej;
            reader.readAsDataURL(this.file);
        });
    }

    default() {
        this.naturalHeight = this.render.height;
        this.naturalWidth = this.render.width;
    }

}

const core = new Core();

export default core;