# MakeItReal Tarea

Se crea aplicación en entorno local con tres páginas (home, product detail y about), en la página home se encuentran la lista total de productos, en product detail se observa solo un producto en más detalle y por último about es información personal.

En la página home, cada carta de los productos tiene un contador que nos indica la disponibilidad del enlace hacia el detalle del objeto, cuando este llegue a cero el enlace ya no funcionará.

Para ver la aplicación por favor usar el comando `npm start` en la carpeta raíz y dirigirse a [http://localhost:3000](http://localhost:3000)

Después de esta descripción, se dará respuesta a las preguntas propuestas por los docentes.

Muchas gracias por ver mi proyecto!

FOR ENGLISH SPEAKERS PLEASE REFER TO THE END OF THIS README, THANKS!

### Tecnologías utilizadas
- ReactJS
  - Hooks => { useState, useEffect, useContext, useReducer }
- ESLint
- editorconfig

### Metodos utilizados
- fetch para traer la información de [Fake Store API](https://fakestoreapi.com/)
- react-router-dom para direccionar al cliente en la página
- Matemáticos y lógicos para obtener de forma aleatoria el tiempo de disponibilidad de enlace
- useTimeout y lógica para la implementación del timer

## Preguntas
1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
   - Sprint planning: Es la primera reunión cuando comienza un sprint. Se habla de las tareas a realizar, se priorizan y se dará un estimado de puntos para cada una de las tareas, con esto se genera el sprint backlog.
   - Daily meeting: Es una reunión eficas que se realiza diaramente, en esta cada team member comparte los avances que realizaron ayer, cuál es el plan de acción para el día y por último que dificultades han encontrado en el proceso.
   - Sprint review: Nos enfocamos en el projecto. Se realiza con el demo del projecto, se presenta las tareas completadas en el sprint y aquello que no se completó.
   - Sprint retrospective: Nos enfocamos en el proceso. El PO, el SM y los TMs observan el sprint que se realizó para aprender de los obstaculos y optimizar el siguiente sprint (establacer que puntos se alcanzaron a cumplir, dificultades dentro del equipo y más).
2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
   - Los wireframes son bosquejos que se realizan antes de iniciar con el código que permiten al cliente visualizar como se verá la página web, además, también le permite al cliente ver de forma general la funcionalidad de la aplicación. De esta forma el desarrollador puede iniciar el proyecto sabiendo que es de interés del cliente y que no se realizará trabajo innecesario. Podemos utilizar [Figma](https://www.figma.com/)
3. Explicar la diferencia entre `var`, `let` y `const`. Y dar un ejemplo en qué caso se utilizará.
   - Las tres palabras reservadas nos permiten declarar variables en JS.
    - La primera `var` era la forma antigüa manera de declarar variables, esta no es recomendada actualmente ya que las variables eran globales y no locales, haciendo que el código fuese más difícil de leer.
    - La segunda `let` es la sustitución de `var`, esta nos permite declarar variables que se limitan en el bloque que se declaran, está se debe usar solo si la variable será cambiada.
    - Por último `const` es la manera que se debe usar por defecto en la declaración de variables. Se limitan en el bloque en que se declaran y no se pueden cambiar después de declaradas.
4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada `rama-1`?
   - Podemos utilizar:
     - `git branch <nombre_rama>`
     - `git checkout -b <nombre_rama>`
     - `git branch <nombre_rama> origin/<rama_remota>`
5. Explicar la diferencia entre git merge y git rebase.
   - `git merge` crea un nuevo commit a partir de la fusión de dos ramas. Si hacemos un commit de main a develop, queda un último commit => "merge commit".
   - `git rebase` fusiona dos ramas pero no crea un nuevo commit. Se puede decir que 'adelanta' con los commit de la rama que se va a fusionar. Si hacemos un rebase de main a develop, quedan los commits de develop => los commits de main.
6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando `git pull`?
   - Un Pull Request (PR) se crea en GitHub al comparar dos ramas. Esta comparación es una solicitud en la cual se verifica la diferencia entre las ramas y en caso de servir, se permitirá hacer el merge de las ramas.
   - `git pull` es un comando que nos permite descargar una rama remota.
7. ¿Qué es el Virtual DOM?
   - Es una representación en memoria del DOM. Le permite a ReactJS comparar los cambios de estado frente al DOM real y realizar nuevamente el renderizado solo de los elementos necesarios. Nos entrega mayor rendimiento cuando existen cambios en las páginas.
8. Dado el siguiente [codePen](https://codepen.io/cristian-makeitreal/pen/NWadqqa?editors=1100), el cual solo tiene un HTML, por medio de css llegar a esta respuesta. [Imagen](https://github.com/makeitrealcamp/assesment-1-programa-top/blob/main/assets/services-section.gif). (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
   - El código se encuentra en la carpeta [Questions_NOT_PROJECT](./Questions_NOT_PROJECT/) ahí encontrarán los archivos [HTML](./Questions_NOT_PROJECT/assessment.html) que fue copiado de codePen y el archivo [CSS](./Questions_NOT_PROJECT/assessment.css) con la respuesta.

=============

# MakeItReal Assessment

Developed a web app locally with three pages (home, product detail, and about), in the home page we find the list of all products, on product detail we observe the specifics of a product, and finally on about you will see some personal information.

On the home page, each product card has a timer that tells us the availability of the link to the product detail page. Once it reaches zero the link will not work.

To run the application please input `npm start` in the root folder and go to [http://localhost:3000](http://localhost:3000)

I appreciate you for taking your time and watching my project!

### Technologies used
- ReactJS
  - Hooks => { useState, useEffect, useContext, useReducer }
- ESLint
- editorconfig

### Methods used
- fetch to bring the information from [Fake Store API](https://fakestoreapi.com/)
- react-router-dom redirect the client along the pages of the application
- Math and logic to obtain the availability time for the link randomly
- useTimeout and logic to implement the timer
