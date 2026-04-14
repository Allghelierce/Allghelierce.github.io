import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <div class="container" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
      <div class="logo">Allghelierce</div>
      <nav>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <h1>Engineering <br/> Digital Experiences.</h1>
      <p>I build high-performance, aesthetically pleasing web applications using modern technologies like TypeScript and React.</p>
      
      <div style="display: flex; gap: 1rem;">
        <a href="https://github.com/Allghelierce" class="btn btn-primary">View GitHub</a>
        <a href="#" class="btn" style="border: 1px solid var(--glass-border); color: var(--text-primary);">Resume</a>
      </div>

      <div class="glass-card" style="width: 100%; max-width: 800px;">
        <h3 style="margin-bottom: 1rem;">Current Workspace</h3>
        <p style="font-size: 1rem;">Initializing the new digital garden...</p>
        <div class="code-snippet">
          <span style="color: #6ee7b7;">$</span> git init<br/>
          <span style="color: #6ee7b7;">$</span> git add .<br/>
          <span style="color: #6ee7b7;">$</span> git commit -m "initial commit: seed planted ⚡️"
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      &copy; ${new Date().getFullYear()} Allghelierce. Built with TypeScript & Vite.
    </div>
  </footer>
`
