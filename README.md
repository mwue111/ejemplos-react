# React
En general, las interfaces de usuario están formadas por:

-	**Estructura o layout**: disposición de los elementos en la pantalla.

-	**Comportamiento o lógica**: código que recoge información de inputs, transforma variables, etc…

-	**Apariencia o estilos**: interfaz pura.

Lo más básico que hay que saber de React es que la unidad lógica con la que trabaja es el componente. Éste agrupa estructura, comportamiento y apariencia.

Los componentes son reutilizables y están encapsulados. 

La aplicación web es, por tanto, un conjunto de componentes anidados en forma de árbol, similar al árbol DOM. El nodo raíz, desde el cual cuelgan todos los componentes, generalmente se llama App.

La estructura de componentes es similar al árbol DOM (modelo de nodos que acaba pintándose en el navegador), pero esto es porque React realiza una copia de éste para optimizar el renderizado de la página. Esta copia se llama DOM virtual, y lo que hace es permitir la actualización de contenidos sin tener que “repintar” el DOM nativo completo: la idea que subyace es que del DOM nativo sólo se vuelva a pintar aquello que se haya modificado, reduciendo así su número de actualizaciones.

El funcionamiento sería el siguiente: el DOM está conectado con el documento HTML de manera directa. La aplicación (APP) captura los eventos que ocurren en el DOM y localiza qué secciones han sido afectadas por éstos, identificando estos nodos como aquellos a cambiar y se los pasará al DOM virtual para que éste compare el DOM nativo con el DOM resultante de los cambios (es decir, que localice las diferencias entre el renderizado anterior y el siguiente) y realice sobre el DOM estos cambios. Esta acción de comparación y re-renderización del DOM nativo se llama *diffing*. Este proceso se llama **reconciliación**.

![Captura de pantalla 2023-02-06 093440](https://user-images.githubusercontent.com/98398933/216926014-64a09b35-601e-44cf-9ea1-c72ab3994064.jpg)

React se encarga del tratamiento del DOM virtual y la captura de los eventos en la APP. La parte del DOM y su conexión con HTML es un adaptador que en este caso estaría enfocado al DOM para ser renderizado en navegadores y se llama ReactDOM.

![Captura de pantalla 2023-02-06 093752](https://user-images.githubusercontent.com/98398933/216926135-d8c9d542-f064-4378-83ad-a2b840c4d483.jpg)

Los adaptadores pueden estar enfocados a renderizar en otros dispositivos: por ejemplo, React Native es el adaptador que se emplea para traducir lo que hace React a sistemas operativos móviles, Android o iOS. De esta manera se puede desarrollar con el mismo código para diferentes plataformas (por lo tanto el punto de entrada para el desarrollador o desarrolladora es uniforme).

Una cosa importante de react es que tiene un ecosistema variado y amplio. Para gestionar elementos como formularios, o los tests, o el empaquetado para que el navegador pueda ejecutar la aplicación, hay muchas opciones. La principal diferencia con Angular, por ejemplo, radica aquí: Angular viene con todo el ecosistema montado.

# Empezando con React
React puede ser añadido a nuestro proyecto añadiendolo por medio de etiquetas script o a traves de instaladores de paquetes como npm.
Aunque no es necesario tener node.js (y tenerlo actualizado), si que es bastante recomendable pues hace más sencillo el proceso. Para iniciar un entorno de trabajo local, se crea una carpeta o nos situamos donde vayamos a trabajar y ejecutamos el comando *npx create-react-app nombre-de-la-app*. Una vez instalado, nos movemos con *cd nombre-de-la-app* al directorio y ejecutamos *npm start* para empezar a trabajar. Esto creará un directorio llamado **node-modules** y, al habernos creado la aplicación de React con npx, ya tendremos un esquema del directorio con diferentes ficheros que ya se pueden empezar a manipular.

#
#
#

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
