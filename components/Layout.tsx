import Meta from './Meta'
import Nav from './Nav'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Working from './Working'
import Contact from './Contact'
import Footer from './Footer'

const Layout: React.FC = () => {
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

export default Layout
