import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  // to initialize AOS, to enable animate on scroll
  useEffect(() => {
    AOS.init();


  }, []);

  const projects = [
    {
      title: "Pragmatic To-Do List",
      description: "A clean, intuitive, and minimalistic to-do list application.",
      link: "https://pragmatic-todo-list.vercel.app/",
      date : "2024-12-12",
      tech: "React, CSS, HTML"
    }
    , {
      title: "Guitar Hero",
      description: "An Interactive Musical Game",
      link: "https://pragmatic-todo-list.vercel.app/",
      date : "2024-9-6",
      tech: "Javascript & WebSockets API"
    }
  ]

  return (
    <div className=''>
      {/* min-h-screen bg-gradient-to-b from-white to-blue-200 */}
      <header id="header" className='p-6 shadow-lg'>
        <nav id="navbar" className='mt-2 flex pl-4 pr-6'>
          <h1 className='text-xl font-medium flex-1'>King</h1>
          
          <ul className='list-none inline-flex space-x-8 flex-2 '>
            <li><a className="nav-link" href="#about">About me</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#contacts">My Contact</a></li>
          </ul>
        </nav>
      </header>


      <main>
      <section id="welcome-section" className='flex-col items-center justify-center h-screen mt-60'
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true">

        <div className='text-center'>
          <h2 className= "text-2xl font-serif">Hello!</h2> 
          {/* switch ## to animated changing hello */}
          <h1 className='text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>I'm Jian Rong King</h1>
          <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>A passionate developer who loves building clean, efficient, and impactful projects.</p>
        </div>

      </section>

      <section className="contents" id="projects"
                          data-aos="fade-up"
                          data-aos-duration="700"
                          data-aos-once="true"
      >
        <h2 className='text-pretty tezt-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>My Crafts</h2>
        
        {/* after done use map and render */}

        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>

        {projects.map( (projects, idx) => (            
          <article key={idx} className='flex max-w-xl flex-col items-start justify-between'>
            <div className='flex items-center gap-x-4 text-xs'>
              <time className='tezt-gray-500'>{projects.date}</time>
              <p className='relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-300'>{projects.tech}</p>
   
            </div>




            </article>
            ))}

        </div>


      </section>



        {/* <section className="contents" id="projects"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-once="true" // bug when click on nav link, the page will go too far down
        >
          <h1>My Crafts</h1>
          <div data-aos="fade-up" className="project-tile">
            <h2>Pragmatic To-Do List</h2>
            <p>A clean, intuitive, and minimalistic to-do list application.</p>
            <a href="https://pragmatic-todo-list.vercel.app/" target="_blank" rel="noreferrer">View Project</a>
          </div>

          <div className="project-tile">
            <h2>Guitar Hero</h2>
            <p>An Interactive Musical Game</p>
            <a href="https://pragmatic-todo-list.vercel.app/" target="_blank" rel="noreferrer">View Project</a>
          </div>

          <div className="project-tile">
            <h2>Static Factory Game</h2>
            <p>An Interactive 2D Game that runs on terminal</p>
            <a href="https://pragmatic-todo-list.vercel.app/" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </section> */}

        {/* <section className="contents" id="about">
          <h2>About Me</h2>
          <p>I’m a passionate developer who loves building clean, efficient, and impactful projects.</p>
        </section> */}

        <section className="contents" id="contacts">
          <h4>My Contacts</h4>
          <ul>
            <li><a href="https://github.com/JianRong-King" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/jianrong-king" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>Email: <a href="mailto:kingjianrong3249@gmail.com">kingjianrong3249@gmail.com</a></li>
          </ul>
        </section>


      </main>
    </div>
  );
}

export default App;
