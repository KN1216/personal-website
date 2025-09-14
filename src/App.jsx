import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* container for whole page */}
      <div className="flex flex-col min-h-screen min-w">
        {/* Header Section (bar & backdrop blur) */}
         <div id="home" className="bg-[url('./assets/pixel.gif')] bg-cover bg-center min-h-lvh"> {/* page, kinda just mid section mainly, where content will be, if footer added will be full span */}

          <section>
            {/* bar at top */}
            <Header />
          </section>

          <section className="pt-48">
            {/* name + title */}
            <Intro />
          </section>
        </div>
        <div className="h-48 bg-gradient-to-b from-transparent to-black"></div>
          <section>
             {/* about section, top is gradient from the image in the intro section */}
            <About />
          </section>

          <section className="mt-32 md:mt-48 lg:mt-64">
            {/* experience, relevant courses, projects, could later turn projects into array so i can map it */}
            <Experience />
          </section>

          <section className="mt-32 md:mt-48 lg:mt-64">
            <Contact />
          </section>
        
      </div>
      
    </>
  )
}

export default App
