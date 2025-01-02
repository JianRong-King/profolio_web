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
      date : "Dec 3, 2024",
      Category: "React Development"
    }
    , {
      title: "Guitar Hero",
      description: "An Interactive Musical Game",
      link: "https://pragmatic-todo-list.vercel.app/",
      date : "Sep 6, 2024",
      Category: "Functional Programming"
    }

    , {
      title: "Paris Transaction Database System",
      description: "Database Management System",
      link: "https://pragmatic-todo-list.vercel.app/",
      date : "Oct 20, 2024",
      Category: "Database Management System"
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






    <section className="bg-white py-24 sm:py-32" id="projects">
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>

        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-pretty tezt-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl'>My Crafts</h2>
        </div>


        {/* apply grid layout */}
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>

        {projects.map( (projects, idx) => (        

          <article key={idx} className='flex max-w-xl flex-col items-start justify-between bg-gray-400'>

            <div className='relative w-full max-w-lg mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg'>

              {/* category & date */}
              <div className='flex items-center gap-x-4 text-xs m-2 ml-4'>
                  <time className='text-gray-500'>{projects.date}</time>
                  <p className='relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-300'>{projects.Category}</p>
              </div>

              {/* put gif in the future */}
            <img className='w-full h-64 object-cover rounded-lg sm:rounded-lg md:rounded-lg' src="https://wallpapers.com/images/high/pure-black-background-5q79lsl997wkfn6j.webp" alt="project" / >

                
            <div className='absolute inset-0 bg-blue-400 bg-opacity-100 flex items-center justify-center hover:opacity-0'>
              <h3 className='text-xl font-semibold text-white'>{projects.title}</h3>
              <p className='mt-4 text-gray-700'>{projects.description}</p>
            </div>

            </div>

            </article>

            ))}

        </div>

        </div>


      </section>


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
