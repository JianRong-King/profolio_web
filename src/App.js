import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  // to initialize AOS, to enable animate on scroll
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <header id="header">
        <nav id="navbar">
          <ul>
            <li><a className="nav-link" href="#about">About me</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#contacts">My Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="welcome-section"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            >
        <h2>Hello!</h2>
        <h1>I'm Jian Rong King</h1>
      </section>

      <main>
        <section className="contents" id="projects"
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
        </section>

        <section className="contents" id="about">
          <h2>About Me</h2>
          <p>I’m a passionate developer who loves building clean, efficient, and impactful projects.</p>
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
