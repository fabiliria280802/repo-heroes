<h1 align="center"> Freaks wiki </h1>

<div style="display: flex; align-items: center;">
<img src="/heroes-app/src/assets/readme-images/FREAKS.png" />
<p align="justify">Bienvenidos a Freaks Wiki, tu destino definitivo para explorar el apasionante universo de los superhéroes de Marvel y DC. Sumérgete en un vasto tesoro de conocimiento donde encontrarás perfiles detallados, historias épicas, y secretos ocultos de tus héroes y villanos favoritos. Desde los icónicos personajes de Spider-Man y Iron Man hasta los misteriosos enigmas de Batman y Superman. Únete a nuestra comunidad de aficionados y descubre todo lo que necesitas saber sobre estos superpoderosos íconos de la cultura pop.</p>
</div>


<h1 align="center"> Sobre Angular </h1>
<div style="display: flex; align-items: center;">
<img src="/heroes-app/src/assets/readme-images/Angular.png" />
<p align="justify"> Angular es un poderoso framework de desarrollo web front-end creado por Google. Con una arquitectura basada en componentes, Angular facilita la creación de aplicaciones web robustas y dinámicas. Su amplia comunidad y abundante documentación lo convierten en una elección popular para desarrolladores. Angular ofrece herramientas avanzadas para la gestión del estado, enrutamiento y comunicación con API, lo que lo convierte en una opción ideal para proyectos complejos. Además, su capacidad de renderización del lado del servidor (Server-Side Rendering) mejora la velocidad y la optimización de SEO de las aplicaciones web.</p>
</div>

<h1 align="center"> Sobre JSON - server </h1>
<p align="justify">JSON Server es una herramienta que permite crear rápidamente una API REST simulada utilizando un archivo JSON como fuente de datos. Es perfecto para el desarrollo y pruebas de aplicaciones que necesitan interactuar con una API. Con solo unos pocos comandos, puedes tener una API simulada lista para usar, lo que acelera el proceso de desarrollo y facilita las pruebas. JSON Server es una herramienta esencial en el kit de herramientas de los desarrolladores para agilizar el desarrollo de aplicaciones web y móviles.</p>

<h1 align="center"> Angular - MVC arquitecture </h1>
<div>
<img src="/heroes-app/src/assets/readme-images/angularArch.png" />
<p align="justify">La arquitectura MVC (Model-View-Controller) es un patrón de diseño ampliamente utilizado en el desarrollo de aplicaciones web.<br/><br/>
<b>Model:</b><br/><br/>
El Modelo representa los datos y la lógica de negocio de la aplicación. En Angular, los modelos suelen ser clases TypeScript que definen la estructura los datos, como objetos o entidades.<br/><br/>
<b>View:</b><br/><br/>
La Vista es la parte de la aplicación que se encarga de mostrar la información al usuario. Cuando se usa como framework Angular, las Vistas se crean usando componentes. Cada componente tiene su propio archivo HTML que define la estructura de la interfaz de usuario.<br/><br/>
<b>Controller:</b><br/><br/>
El Controlador es la capa que actúa como intermediario entre el Modelo y la Vista en el patrón MVC tradicional. Sin embargo, en Angular, la lógica del Controlador se maneja principalmente en los componentes.<br/><br/>
<b>Services:</b><br/><br/>
Los Servicios en Angular son clases que encapsulan la lógica de negocio y proporcionan una forma de compartir datos y funcionalidad entre componentes.
<br/><br/>
Teniendo en cuenta todo lo anterior, el diagrama muestra que en angular existen varios Models que estan identificados con .component y .service, las directrices son los controllers y ellos estan conectados a los templates que son las views/pages de la aplicación.
</p>
</div>

# Pasos para ejecución:
1. Clonar el proyecto en Github CLI con el comando: ```gh repo clone fabiliria280802/repo-heroes```
2. Se abren dos terminales de vs ```ctrl + shift + ñ``` una para correr el backend y otra para correr el frontend.
3. Levantar backend se usa el comando: ```npm run backend```
4. Luego para levantar la aplicación con el frontend se usa el comando: ```npm start```

Nota 1: si no tienes instalado npm ejecutar el comando ```npm install``` antes del paso 3 y 4.
Nota 2: el siguiente link es un video ilustrativo de la aplicación duncionando: https://clipchamp.com/watch/rTZkKGIb98O

<h1 align="left"> Referencias Bibliograficas: </h1>

- Blanco, N. (2023, 25 mayo). ¿Qué patrón usa Angular? MVC o MVVM. OpenWebinars.net. https://openwebinars.net/blog/que-patron-usa-angular-mvc-o-mvvm/
- David. (2017). Explicación del patrón MVC en AngularJS. Guidacode. https://guidacode.com/2017/angularjs/explicacion-del-patron-mvc-en-angularjs/
- MA-NO Web Design and Development. (2020, 4 noviembre). El concepto de ModeloVistaControlador MVC explicado. https://www.ma-no.org/es/programacion/el-concepto-de-modelo-vista-controlador-mvc-explicado
- NPM: JSOn-Server. (s. f.). npm. https://www.npmjs.com/package/json-server?activeTab=code
