import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Working from '../components/Working'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Meta />
      <div>
        <Nav />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Working />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
export default Home
