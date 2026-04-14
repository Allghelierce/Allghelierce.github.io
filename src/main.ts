import './style.css'

const year = new Date().getFullYear()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="hero snap" id="hero">
    <div class="hero-inner">
      <div class="hero-label">— hi, my name is</div>
      <h1 class="hero-name">tristan<br/>villegas.</h1>
      <p class="hero-tag">surfer · coder · reader</p>
    </div>
    <button class="hero-scroll" type="button" aria-label="Scroll to continue">
      <span>scroll or arrows to continue</span>
      <span class="scroll-arrow">↓</span>
    </button>
  </section>

  <section class="content snap" id="content">
    <div class="page">
      <nav>
        <div class="nav-id">
          <span class="nav-dot"></span>
          TRISTAN VILLEGAS
        </div>
        <ul class="nav-links">
          <li><a href="https://github.com/Allghelierce" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/cesar-villegas-b49061314" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="mailto:pvt.trisn@gmail.com">Email</a></li>
        </ul>
      </nav>

      <main class="grid">
        <section class="intro">
          <div class="label">— currently</div>
          <h2 class="name">Tristan<br/>Villegas.</h2>
          <p class="bio">
            Surfer, coder, reader. Data Science @ <strong>UCSD '29</strong>, leaning hard into
            machine learning. Born Cesar — go by my middle name because there are too
            many of us in the family.
          </p>
          <div class="stack">python · pytorch · typescript · surfboard</div>
        </section>

        <section class="meta">
          <div class="block">
            <div class="label">01 — focus</div>
            <ul class="focus">
              <li>
                <span class="num">i.</span>
                <span>Automating my own workflow until I graduate from doing the work to directing it.</span>
              </li>
              <li>
                <span class="num">ii.</span>
                <span>Making tedious work fun — shipping twice as fast without burning out.</span>
              </li>
              <li>
                <span class="num">iii.</span>
                <span>AI agents that can run multi-step tasks across software tools without needing a leash.</span>
              </li>
            </ul>
          </div>

          <div class="block">
            <div class="label">02 — this week</div>
            <ul class="week">
              <li>heading home to see my dog</li>
              <li>casino run w/ a friend — gambling $100 from the hackathon</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <span>© ${year} Tristan Villegas</span>
        <span>La Jolla, CA</span>
        <span>v1.0</span>
      </footer>
    </div>
  </section>
`

// Snap navigation: click hint + keyboard arrows
const hero = document.getElementById('hero')!
const content = document.getElementById('content')!
const scrollHint = document.querySelector<HTMLButtonElement>('.hero-scroll')!

const scrollTo = (el: HTMLElement) => {
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

scrollHint.addEventListener('click', () => scrollTo(content))

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault()
    scrollTo(content)
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    scrollTo(hero)
  }
})

// Custom cursor (desktop only)
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor = document.createElement('div')
  cursor.className = 'cursor'
  const ring = document.createElement('div')
  ring.className = 'cursor-ring'
  document.body.append(cursor, ring)

  let mx = window.innerWidth / 2
  let my = window.innerHeight / 2
  let rx = mx
  let ry = my

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
    cursor.style.left = `${mx}px`
    cursor.style.top = `${my}px`
  })

  const tick = () => {
    rx += (mx - rx) * 0.18
    ry += (my - ry) * 0.18
    ring.style.left = `${rx}px`
    ring.style.top = `${ry}px`
    requestAnimationFrame(tick)
  }
  tick()

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.width = '44px'
      ring.style.height = '44px'
      ring.style.opacity = '0.9'
    })
    el.addEventListener('mouseleave', () => {
      ring.style.width = '24px'
      ring.style.height = '24px'
      ring.style.opacity = '0.4'
    })
  })
}
