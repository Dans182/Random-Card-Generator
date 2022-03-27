El presente repositorio consistia en la realización de una página que nos representará un dealer de cartas, elaborando su index.html, style.css y app.js desde cero.

Consistia en los siguientes parámetros.

Al abrir la página, automáticamente debía darnos una combinación de número + palo al azar.
Posteriormente, debíamos tener dos botones, los cuales:
El primero, darnos cartas al azar, que no se repitieran y que cuando nos terminada de dar todas las combinaciones posibles de cartas (52 cartas en total), nos saltara una alerta indicándonos que ya se acabó el mazo de cartas.
El segundo botón debía reiniciar los valores, de manera que pudiera otra vez recorrer con el primer botón todo el mazo de cartas hasta agotarse las 52 cartas nuevamente.

El HTML se debía realizar en Bootstrap y ser totalmente responsive.

En el repositorio se realizó lo requerido.

Al cargar la página, automáticamente te va a dar una combinación de palo+número.
El primer botón aparece habilitado, para poder clickear y empezar a pedir cartas, en cambio el botón de reset está inhabilitado hasta que empieces a solicitar cartas. Una vez se le hace click al boton de pedir cartas, el de reset se habilita.

Al llegar al final del mazo de cartas, salta una alerta avisando del hecho y el botón de pedir cartas se inhabilita.

# Hello World with Vanilla JS

### Manual Installation

1. Remember to install the npm packages first:

```
$ npm install
```

2. Build and Start coding!

Build the application for the first time...

```
$ npm run start
```

And start coding your Vanilla.js application, update the `src/index.html`, `src/index.css` or `src/app.js` depending on your needs.

## FAQ

#### 1) How do I run my code?

- Type on the command line `$ npm run start` and type localhost on the browser.

#### 2) Where do I write my code?

It depends on the language, but you have `./src/js/app.js`, `./src/style/index.css` and `./isrc/index.html` respectively, you can add new `.html` as you please, just make sure to include import it on the index.js.

**Note:** remember that the JS workflow starts inside `window.onload`.

#### 3) I don't see my changes.

Everytime you change any file inside the `./src` folder the website public URL will automatically refresh the changes (it's a process called hot deploy)
Remember also to refresh cleaning the cache (command+shift+r on mac, control+shift+r on pc & linux)

#### 4) How do I include more images on my project?

Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

#### 5) How do I include more JS files?

Just add the files into the JS folder and import the file/variables into your index.js. E.g: `import myVar from "./file2.js"`

#### 6) How do I publish the website?

This boilerplate is 100% compatible with the free github pages hosting. Publish your website by running:

```sh
$ npm run deploy
```

Very easy and in just one step! Push to your **master** branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your master branch.
