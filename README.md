# les-egouts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Installation

after fork the project and create new branch, you can safely install nodes modules and run it :

via npm

```bash
npm install
```

In the project directory, you can run:

```bash
npm run start
```

# Utilisation

## Dessiner les images

1. In your parent component, create a State
```const [pictures, setPictures] = useState([]);```
2. Create a new component that will display your canvas, assign it a ``useRef`` reference and create a button with a new reference, which will download your compiled image.
   1. Add in 'pictures' props which will receive the parent's pictures.
   2. Add a ``useEffect`` that will update on the pictures props.
   3. Call ``core.draw(canvasRef.current, <pictures>)`` in your effect to display it on your canvas.

## Add an image

1. To add a picture, you need to call ``core.addPicture(file)`` which returns a Promise with a Picture class object.
2. Do your actions in the Promise return, such as forwarding the info to the parent component.

## Edit the image properties

1. You can change the properties of an image with ```core.updatePicture(x,y,width,height)```
2. Feed the info back to the parent to update React with the states.

## Download image

1. Set a download button with a``download="nomfichier.png"``
2. Get the reference of your canvas and convert it to an image then apply the destination to your button.
``const dt = canvaRef.current.toDataURL('image/png');
   downloadRef.current.href = dt;``

## Exemple

You can look at the project above to understand how the package works with React.

# Picture Data


A picture object contains the values :
- id: The id of the picture
- name : The name of the file
- x : X position drawn in the canvas
- y : Y position drawn in the canvas
- width : Width drawn in the canvas (64 by default)
- height: Height drawn in the canvas (64 by default)
- naturalWidth : Width of the image
- naturalHeight : Height of the image
- blob : The file in blob format
- file : The upload file
- render : The image tag with the compiled image as source. (ImageData/HTMLImage)


# Gouvernance

This project is under community governance
All contributors can participate in the decision making of the project

## **"Les égouts"**  `Belongs To`

* Julien Coudert (Documentation / Ui / Frontend)
* Omar Aboulbarge (Documentation)
* Tom Ait-ouarab (Frontend / UX)
* Dorian Jullian (Frontend / Backend)
* and averyone else who contributed to the project

Please see all the contributors on the **[Contributors page](https://github.com/us3rT0m/les-egouts/graphs/contributors)**

# License 

**Les egouts is open-sourced software [MIT license](./LICENSE)**

# Contributing

If you would like to join the adventure and contribute to the growth of our package, please note that we are open to contributions from all. 
Please read our chapter on [contribution](./CONTRIBUTING.md) before you start. 

# Code of conduct

Before you start drop some shit in our project, please read our [code of conduct](./CODE_OF_CONDUCT.md)

