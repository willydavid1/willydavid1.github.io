import { useEffect, useState } from 'react'
import throttle from 'lodash/throttle'
export function Projects () {
  const [activeFirstBar, setActiveFirstBar] = useState(false)
  const [activeSecondBar, setActiveSecondBar] = useState(false)

  useEffect(() => {
    window.onscroll = throttle(() => handlerScroll(), 250)
    const handlerScroll = () => {
      if ((document.body.scrollTop >= 300 && document.body.scrollTop <= 2850) || (document.documentElement.scrollTop >= 300 && document.body.scrollTop <= 2850)) {
        setActiveFirstBar(true)
      } else {
        setActiveFirstBar(false)
      }

      if (document.body.scrollTop >= 2750 || document.documentElement.scrollTop >= 2750) {
        setActiveSecondBar(true)
      } else {
        setActiveSecondBar(false)
      }
    }
  }, [])

  return (
    <div className="container container-lineaAzul">
      <section id="portafolio" className="portfolio">

        <div className="container">
          <h2 className={`h2-bloqueuno ${activeFirstBar ? 'text-white' : ''}`}><div className={`bloque bloque-uno ${activeFirstBar ? 'active_bar' : ''}`}></div> Portafolio (Proyectos Destacados)</h2>

          <article className="project animated" id="animacion" data-animacion="project-juego">
            <div className="project-details">
              <h3 className="project-title">App en React.js</h3>
              <h6 className="project-course">Cuánto vale tu dinero en otros países</h6>
              <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://willydavid1.github.io/proyecto-tasa-cambio/" className="enlace-proyectos" rel="noreferrer noopener" target="_blank"> /proyecto-tasa-cambio/ </a> </small></p>

              <p className="project-description">En la creación de este proyecto implemente tecnologías como React.js – React-router – Uso de hooks para componentes funcionales- La aplicación es una SPA, Consumir una API para obtener indicadores económicos, Maquetación con el framework Bootstrap + estilos propios y Web Responsive Design (adaptable a todos los dispositivos). </p>
            </div>
            <figure className="project-imageContainer">
              <a href="https://willydavid1.github.io/proyecto-tasa-cambio/">
                <img className="project-image" width="500" src="images/willydavid1.github.io_proyecto-tasa-cambio_.png" alt="proyecto-react" />
              </a>
            </figure>
          </article>

          <article className="project animated" id="animacion" data-animacion="project-juego">
            <div className="project-details">
              <h3 className="project-title">PETGRAM App de mascotas</h3>
              {/* <h6 className="project-course">PWA - App de recetas</h6> */}
              <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://petgram-avanzado-react.vercel.app/" className="enlace-proyectos" rel="noreferrer noopener" target="_blank"> petgram-avanzado-react.vercel.app/ </a> </small></p>

              <p className="project-description">
                La app está hecha con reactjs, hago uso de hooks, React Context API, GraphQL / Apollo Client para consumir los recursos, y nos apoyamos de la técnica de Render Props para reutilizar lógica, para estilos CSS in JS con styled-components
              </p>
            </div>
            <figure className="project-imageContainer">
              <a href="https://petgram-avanzado-react.vercel.app/" rel="noreferrer noopener" target="_blank">
                <img className="project-image" width="500" src="images/petgram.png" alt="PETGRAM, petgram, app de mascotas" />
              </a>
            </figure>
          </article>

          <article className="project animated" id="animacion" data-animacion="project-juego">
            <div className="project-details">
              <h3 className="project-title">PWA - App de recetas </h3>
              {/* <h6 className="project-course">PWA - App de recetas</h6> */}
              <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://pwa-react.vercel.app/" className="enlace-proyectos" rel="noreferrer noopener" target="_blank"> pwa-react.vercel.app/ </a> </small></p>

              <p className="project-description">
                PWA que utiliza la API de MealDB para mostrar recetas con sus instrucciones. Algunas de las features que tiene son: <br />
                - Soporte Offline con Workbox <br />
                - Estrategias de Red apropiadas para cada recurso <br />
                - Add to Home Screen <br />
                - Web Share API <br />
                - Creado con Create React App <br />
              </p>
            </div>
            <figure className="project-imageContainer">
              <a href="https://pwa-react.vercel.app/" rel="noreferrer noopener" target="_blank">
                <img className="project-image" width="500" src="images/pwaReact.png" alt="pwa con react, pwa" />
              </a>
            </figure>
          </article>

          <article className="project animated" id="animacion" data-animacion="project-juego">
            <div className="project-details">
              <h3 className="project-title">App en Nextjs - SSR</h3>
              <h6 className="project-course">Datos sobre tus películas favoritas</h6>
              <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="https://peliculas-nextjs.now.sh/" className="enlace-proyectos" rel="noreferrer noopener" target="_blank"> peliculas-nextjs.now.sh/ </a> </small></p>

              <p className="project-description">En la creación de este proyecto implemente Next js es un Framework que se encarga del Server-side rendering (SSR) de aplicaciones basadas en React. Facilitándonos la vida en aplicaciones construidas con React js y SSR, La aplicación consume los datos de OMDb API con la ayuda de getInitialProps(). La app esta hecha para que sea amigable con el SEO logrando hacer el renderizado desde el server y de carga rápida, posee estilos jsx (CSS in JS) y recibe parámetros por URL para lograr una paginación de películas.</p>
            </div>
            <figure className="project-imageContainer">
              <a href="https://peliculas-nextjs.now.sh/" rel="noreferrer noopener" target="_blank">
                <img className="project-image" width="500" src="images/proyecto-películas.png" alt="proyecto películas, datos sobre peliculas" />
              </a>
            </figure>
          </article>

          <article className="project animated" id="animacion" data-animacion="project-juego">
            <div className="project-details">
              <h3 className="project-title">Creación de Juego</h3>
              <h6 className="project-course">Simon dice</h6>
              <p className="project-url"><small><strong>Puedes verlo en:</strong> <a href="/simon-dice.html" className="enlace-proyectos" rel="noreferrer noopener" target="_blank"> Simon dice </a> </small></p>
              <p className="project-description">En la creación del juego, implemente vanilla (JavaScript puro) y POO (Programación orientada a objetos). Anda a verlo son 10 niveles suerte.</p>
            </div>
            <figure className="project-imageContainer">
              <a href="/simon-dice.html" rel="noreferrer noopener" target="_blank">
                <img className="project-image" width="500" src="images/juego-simon-dice.PNG" alt="juego simon dice" />
              </a>
            </figure>
          </article>
        </div>

      </section>

      <section id="exp" className="event-list">
        <h2 className={`event-list-title ${activeSecondBar ? 'text-white' : ''}`}> <div className={`bloque bloque-dos ${activeSecondBar ? 'active_bar' : ''}`}></div> Más sobre mi experiencia</h2>

        <div className="container">

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/certificado-responsive-design.jpg" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Responsive Design</h3>
              <p className="event-description">Este es mi Certificado de responsive design fue gracias a platzi donde pude conocer muy bien estos conceptos, y fue en el 2019 donde Fui becado por Facebook Developer Circles para estudiar Desarrollo Frontend con Platzi.</p>
              <a className="event-url" href="https://platzi.com/@willy-daconceicao-lozada/curso/1362-responsive-design/diploma/detalle/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/mi-primer-certificado.jpg" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Mi primer certificado AÑO 2016</h3>
              <p className="event-description">Allí empezó todo donde conocí las bases, los fundamentos HTML y me gusto, a partir de allí empiezo a profundizar más en el tema, realice el curso en una plataforma llamada SoloLearn es una app para aprender lenguajes de programación.</p>
              <a className="event-url" href="https://www.sololearn.com/Certificate/1014-1966517/pdf/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/desarrollowebonline.PNG" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Desarrollo web online</h3>
              <p className="event-description">Fundamentos del desarrollo web, donde pude repasar tecnologías que ya conocía como html5 y css3, viendo la estructura y usando código puro ayudándonos de flexbox para poder maquetar, diseñar y construir webs desde la perspectiva visual.</p>
              <a className="event-url" href="https://platzi.com/@willy-daconceicao-lozada/curso/1350-html5-css3/diploma/detalle/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/certificado-github.jpg" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Certificado de Git y GitHub</h3>
              <p className="event-description">Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando tienen un gran número de archivos de código fuente. Fue gracias a este curso donde pude aprender cómo funciona este genial sistema de control de versiones Git y GitHub. Aprendí a manejar ramas y hacer merge (para manejar distintas versiones del proyecto), commits, usar Git Bash (línea de comandos basada en linux), entender el flujo de trabajo en repositorios remotos, configurar llaves SSH para conectarme de manera segura al repositorio de GITHUB, hacer Pull requests a repositorios, usar tags y mucho más… </p>
              <a className="event-url" href="https://platzi.com/@willy-daconceicao-lozada/curso/git-github/diploma/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/fundamentos-js.PNG" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Fundamentos de JavaScript</h3>
              <p className="event-description">JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,  basado en prototipos, imperativo, débilmente tipado y dinámico. Yo anteriormente ya venía de otro lenguaje de programación que era Python así que se me hizo relativamente fácil conocer este nuevo lenguaje de programación, pude entender la programación orientada a objetos, el asincronismo de JavaScript (callbacks, promesas, async-await), bucles, condicionales, funciones, ect.</p>
              <a className="event-url" href="https://platzi.com/@willy-daconceicao-lozada/curso/1339-fundamentos-javascript/diploma/detalle/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/react-js.PNG" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">React.js</h3>
              <p className="event-description">React.js es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página (SPA apps). Es mantenido por Facebook, Es Declarativo y Basado en componentes, aprendí las bases de react desde como crear componentes, entender la estructura JSX, manejo de estado y levantamiento de estado, sobre React Router para crear SPA apps (páginas que no recargan), ciclos de vida de componentes Stateful, peticiones HTTP a un API, portales y el uso de Hooks en componentes funcionales. </p>
              <a className="event-url" href="https://platzi.com/@willy-daconceicao-lozada/curso/1548-course/diploma/detalle/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/reduxCertificado.PNG" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Redux</h3>
              <p className="event-description">Redux es una librería JavaScript de código abierto para el manejo del estado de una aplicación. Es comúnmente usada con otras librerías como React o Angular para la construcción de Interfaces de Usuario. </p>
              <a className="event-url" href="https://platzi.com/@willy-daconceicao-lozada/curso/1613-redux/diploma/detalle/" rel="noreferrer noopener" target="_blank">Ver certificado</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/nodejs.jpg" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Node js</h3>
              <p className="event-description">Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Modulos, Módulos preconstruidos en Nodejs como filesystem y OS), Asíncronismo, Modulo HTTP, NPM Node Package Manager (administrador de paquetes de node)</p>
              <a className="event-url" href="https://www.youtube.com/watch?v=BhvLIzVL8_o" rel="noreferrer noopener" target="_blank">Ver Más</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/expressCurso.webp" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Express.js</h3>
              <p className="event-description">Express.js, o simplemente Express, es un framework para Node.js, lanzado como software gratuito y de código abierto bajo la Licencia MIT. Está diseñado para crear aplicaciones web y API. Express Routing y MÉTODOS HTTP, Middlewares, Static Files Middleware, Settings y Motor de plantillas EJS</p>
              <a className="event-url" href="https://www.youtube.com/watch?v=794Q71KVw1k&t=3606s" rel="noreferrer noopener" target="_blank">Ver Más</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/Mongo.png" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Bases de datos y MongoDB</h3>
              <p className="event-description">Primero aprendí los <a href="https://www.youtube.com/watch?v=GenX0Bvu8WY" rel="noreferrer noopener" target="_blank">fundamentos</a> en Bases de datos relacionales allí pude entender a los DBMS cuales hay, ACID, Modelado, relaciones entre tablas, normalización, peticiones SQL y muchas cosas más sobre DBS relacionales, pero igualmente practiqué con Bases de datos NoSQL como <a href="https://www.youtube.com/watch?v=lWMemPN9t6Q" rel="noreferrer noopener" target="_blank">mongoDB</a>, creando Colecciones, documentos y comandos desde la Mongo SHELL y desde allí realizando operaciones de tipo CRUD y conocer la interfaz de MongoDB Compass.</p>
              <a className="event-url" href="https://github.com/willydavid1/mongoDB" rel="noreferrer noopener" target="_blank">Ver Más</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/cssgrid.png" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">CSS Grid Layout</h3>
              <p className="event-description">CSS Grid layout contiente funciones de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.</p>
              <a className="event-url" href="https://github.com/willydavid1/CSS-Grid-Layout" rel="noreferrer noopener" target="_blank">Ver Repo</a>
            </div>
          </article>

          <article className="event">
            <figure className="event-imageContainer">
              <img className="event-image certificado" src="images/proximamente.jpg" width="500" />
            </figure>
            <div className="event-detail">
              <h3 className="event-title">Próximamente</h3>
              <p className="event-description">React native, apps con stack MERN Próximamente</p>
              <a className="event-url" href="#tecnologias" target="">Mejorando a diario</a>
            </div>
          </article>
        </div>
      </section>

      <div className="container">
        <h2 className="tecnologias-titulo"> <div className="bloque bloque-tres"></div> Tecnologias en las que tengo conocimientos</h2>
      </div>
      <section className="tecnologias" id="tecnologias">
        <div className="container">
          <div className="lado-izquierdo">

            <div className="lado-izquierdo-2item cambio">
              <p className="estilos-p animated" data-animacion="parrafosass" id="animacion">Html</p>
              <p className="estilos-p animated" data-animacion="parrafobootstrap" id="animacion">Css</p>
            </div>

            <div className="lado-izquierdo-1item">
              <p className="estilos-p animated" data-animacion="parrafojs" id="animacion">Javascript</p>
            </div>

            <div className="lado-izquierdo-2item">
              <p className="estilos-p animated" data-animacion="parrafohtml" id="animacion">Sass</p>
              <p className="estilos-p animated" data-animacion="parrafocss" id="animacion">Bootstrap</p>
            </div>

            <div className="lado-izquierdo-1item">
              <p className="estilos-p animated" data-animacion="parrafojs" id="animacion">GraphQL</p>
            </div>

            <div className="lado-izquierdo-2item cambio">
              <p className="estilos-p animated" data-animacion="parrafosass" id="animacion">Jest</p>
              <p className="estilos-p animated" data-animacion="parrafobootstrap" id="animacion">TypeScript</p>
            </div>

          </div>

          <div className="container-img">
            <img src="images/mi-foto-recortada.jpg" alt="" className="img-tecnologias" />
          </div>

          <div className="lado-derecho">

            <div className="lado-derecho-2item cambio_derecho">
              <p className="estilos-p animated" data-animacion="parrafonext" id="animacion">Next js</p>
              <p className="estilos-p animated" data-animacion="parrafoexpress" id="animacion">Express</p>
            </div>

            <div className="lado-derecho-1item">
              <p className="estilos-p animated" data-animacion="parraforeact" id="animacion">React</p>
            </div>

            <div className="lado-derecho-2item">
              <p className="estilos-p animated" data-animacion="parraforedux" id="animacion">Redux</p>
              <p className="estilos-p animated" data-animacion="parrafonodejs" id="animacion">Node js</p>
            </div>

            <div className="lado-derecho-1item">
              <p className="estilos-p animated" data-animacion="parraforeact" id="animacion">CSS in JS</p>
            </div>

            <div className="lado-derecho-2item cambio_derecho">
              <p className="estilos-p animated" data-animacion="parrafonext" id="animacion">Leaflet</p>
              <p className="estilos-p animated" data-animacion="parrafoexpress" id="animacion">Chart.js</p>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
