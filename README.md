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

1. Dans votre composant parent, créer une State
```const [pictures, setPictures] = useState([]);```
2. Créer un nouveau composant qui affichera votre canvas, attribuer lui une reférence ``useRef`` et créer un bouton avec une nouvelle reférence, qui permettra de télécharger votre image compilé.
   1. Ajouter en props 'pictures' qui recevra les images du parent.
   2. Ajouter un effet ``useEffect`` qui s'actualisera sur la props des pictures.
   3. Appeler ```core.draw(canvasRef.current, <pictures>)``` dans votre effet pour l'afficher sur votre canvas.

## Ajouter une image

1. Pour ajouter une image, vous devez appeler ```core.addPicture(file)``` qui retourne une Promise avec pour objet une classe Picture.
2. Faites vos actions dans le retour de la Promise, comme remonter l'infos au composant parent.

## Modifier les propriétés de l'image

1. Vous pouvez modifier les propriétés d'une image avec ```core.updatePicture(x,y,width,height)```
2. Remontez l'infos au parent pour mettra à jour React avec les states.

## Télécharger l'image

1. Définissez un bouton de téléchargement avec une propriété ``download="nomfichier.png"``
2. Récupérer la réfèrence de votre canvas et convertissez la en image puis appliquer la destination sur votre bouton.
``const dt = canvaRef.current.toDataURL('image/png');
   downloadRef.current.href = dt;``

## Exemple

Vous pouvez regarder le projet ci-dessus pour comprendre le fonctionnement du package avec React.

# Picture Data

Un objet picture contient les valeurs :
- id : L'id de l'image
- name : Le nom du fichier
- x : Position X dessiné dans le canvas
- y : Position Y dessiné dans le canvas
- width : Largeur dessiné dans le canvas (64 par défaut)
- height: Hauteur dessiné dans le canvas (64 par défaut)
- naturalWidth : Largeur de l'image
- naturalHeight : Hauteur de l'image
- blob : Le fichier sous format blob
- file : Le fichier upload
- render : La balise image avec l'image compilé en source. (ImageData/HTMLImage)

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

