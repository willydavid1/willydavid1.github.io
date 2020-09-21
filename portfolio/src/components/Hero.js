import { useEffect } from 'react'

export function Hero () {
  useEffect(() => {
    const ipad = window.matchMedia('screen and (max-width: 767px)')
    const menu = document.querySelector('.menu')
    const burgerButton = document.querySelector('#burger-menu')

    const validation = (event) => {
      if (event.matches) burgerButton.addEventListener('click', hideShow)
      else burgerButton.removeEventListener('click', hideShow)
    }
    const hideShow = () => {
      if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active')
        burgerButton.classList.remove('hamburger--elastic-r', 'is-active')
      } else {
        menu.classList.add('is-active')
        burgerButton.classList.add('hamburger--elastic', 'is-active')
      }
    }
    ipad.addListener(validation)
    validation(ipad)
  }, [])
  return (
    <>
      <button id="burger-menu" className="burger-button hamburger" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className="contenedor-video">
        <video className="contenedor-video__video" src="/videos/video-fondo.mp4" muted autoPlay loop>
        Tu navegador no admite el elemento <code>video</code>.
        </video>
        <div className="contenedor-video__fondo"></div>
        <header className="header">
          <div className="container contenedor-video__header">
            <figure className="logo">
              <img className="animated flash delay-3s" src="images/favicon.png" height="50" alt="logo de willy david da conceicao" />
            </figure>
            <nav className="menu">
              <ol>
                <li>
                  <a className="link" href="#portafolio">Portafolio</a>
                </li>
                <li>
                  <a className="link" href="#exp">Experiencia</a>
                </li>
                <li>
                  <a className="link" href="#tecnologias">Tecnologias</a>
                </li>
                <li>
                  <a className="link" href="#tecnologias">Contacto</a>
                </li>
              </ol>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container contenedor-video__hero">
            <h1 className="h1-hero animated fadeIn delay-1s">
          Hola! Soy <strong>Willy David</strong> <br/>
          Un <strong> aficionado </strong> a la tecnología, <br/>
          Centrado en aprender <strong> a diario, </strong>
              <strong> Autodidacta </strong> y Programador Frontend JavaScript-React
            </h1>
            <img className="hero-image animated fadeInRight" src="images/imgHero.jpg" width="500" height="340" alt="imagen principal del sitio" />
          </div>
        </section>
      </div>
    </>
  )
}
