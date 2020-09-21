import Head from 'next/head'
import { Hero } from 'components/Hero'
import { Projects } from 'components/Projects'
import { Contact } from 'components/Contact'
import { Footer } from 'components/Footer'

function Home () {
  return (
    <>
      <Head>
        <title>Willy David Da Conceicao, Front-End Web Developer 🚀</title>
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One|Source+Sans+Pro" rel="stylesheet" />
        <link rel="icon" type="image/png" href="images/favicon.png" />
        <meta name="description" content="Portafolio de Willy David Da Conceicao Lozada Front-End Web Developer. Proyectos, Habilidades, HTML5-CSS3-JS, Responsive Design, Programación. MERN stack"/>
      </Head>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
