import './App.css';
function App() {
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
      <main>
        <section id="welcome-section">
          <h1>Welcome</h1>
          <p>Hi! I'm Jian Rong. Explore my portfolio to learn more about me and my projects!</p>
        </section>
        <section id="projects">
          <h1>Projects</h1>
          <div className="project-tile">
            <h2>Pragmatic To-Do List</h2>
            <p>A clean, intuitive, and minimalistic to-do list application.</p>
            <a href="https://pragmatic-todo-list.vercel.app/" target="_blank">View Project</a>
          </div>

          <div className="project-tile">
            <h2>Guitar Hero</h2>
            <p>An Interactive Musical Game</p>
            <a href="https://pragmatic-todo-list.vercel.app/" target="_blank">View Project</a>
          </div>

        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>I’m a passionate developer who loves building clean, efficient, and impactful projects.</p>
        </section>
        <section id="contacts">
          <h4>My Contacts</h4>
          <ul>
            <li><a href="https://github.com/JianRong-King" target="_blank">GitHub</a></li>
            <li><a id="profile-link" href="https://linkedin.com/in/your-profile" target="_blank">LinkedIn</a></li>
            <li>Email: <a href="mailto:kingjianrong3249@gmail.com">kingjianrong3249@gmail.com</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
