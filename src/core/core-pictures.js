const Core = function() {

    /**
     * The list pictures saved into the Core
     * @type {Picture[]}
     */
    this.pictures = [];
    /**
     * The picture temp will be save after image loading
     * @type {null|Picture}
     */
    this.tempPicture = null;
    /**
     * The last id used to store the picture
     * @type {number}
     */
    this.id = 0;

    /**
     * If the core need an update;
     * @type {boolean}
     */
    this.shouldUpdate = false;

    this.draw = () => {

    }

    this.setUpdate = (newest) => {

    }

    /**
     * Add a new picture from an upload type file
     * @param file - File object
     */
    this.addPicture = async (file) => {
        console.log("ajout de l'image...");
        let p = new Picture(this.id += 1, file);
        await p.build();

        this.pictures.push(p);
        console.log("file bien ajouté");
        this.shouldUpdate = true;
    }


}

class Picture {

    id = -1;
    name = ""; //Name of the file

    //Positions to draw the image
    x = 0;
    y = 0;

    //Dimensions will be draw
    width = 0;
    height = 0;

    //Natural dimensions of the file
    naturalWidth = 0;
    naturalHeight = 0;

    file = null;
    blob = null;
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
        console.log("build render");
        //Return the element image with file compiled
        this.render = await this.buildRender();

        console.log("set blob");
        this.blob = URL.createObjectURL(this.file);
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

}

export default Core;