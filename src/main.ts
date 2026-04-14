import './style.css'

const year = new Date().getFullYear()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="hero snap" id="hero">
    <div class="hero-inner">
      <div class="hero-label">— hi, my name is</div>
      <h1 class="hero-name">cesar<br/>villegas.</h1>
      <p class="hero-tag">programmer · runner · surfer · reader</p>
    </div>
    <div class="waves-container" aria-hidden="true">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="wave-parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(41, 15, 18, 0.14)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(41, 15, 18, 0.10)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(41, 15, 18, 0.06)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(41, 15, 18, 0.04)" />
        </g>
      </svg>
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
          CESAR VILLEGAS
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
          <h2 class="name">Cesar.</h2>
          <p class="bio">
            Programmer, runner, surfer, reader. Data Science @ <strong>UCSD '29</strong>,
            leaning hard into machine learning. I go by my middle name Tristan because
            there are too many Cesar's in the family.
          </p>
          <div class="stack">python · typescript · c++ · flutter</div>
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

// ============ Snap navigation ============
const hero = document.getElementById('hero')!
const content = document.getElementById('content')!
const scrollHint = document.querySelector<HTMLButtonElement>('.hero-scroll')!
const sections: HTMLElement[] = [hero, content]

let currentIdx = 0
let isAnimating = false

const snapTo = (idx: number) => {
  if (idx < 0 || idx >= sections.length) return
  if (idx === currentIdx && !isAnimating) return
  isAnimating = true
  currentIdx = idx
  sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.setTimeout(() => {
    isAnimating = false
  }, 850)
}

// Track current section via IntersectionObserver
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        const idx = sections.indexOf(entry.target as HTMLElement)
        if (idx !== -1) currentIdx = idx
      }
    })
  },
  { threshold: [0.55] }
)
sections.forEach((s) => sectionObserver.observe(s))

// Click hint
scrollHint.addEventListener('click', () => snapTo(currentIdx + 1))

// Keyboard arrows
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault()
    snapTo(currentIdx + 1)
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    snapTo(currentIdx - 1)
  } else if (e.key === 'Home') {
    e.preventDefault()
    snapTo(0)
  } else if (e.key === 'End') {
    e.preventDefault()
    snapTo(sections.length - 1)
  }
})

// Wheel / trackpad snap
let wheelCooldown = false
window.addEventListener(
  'wheel',
  (e) => {
    if (isAnimating || wheelCooldown) {
      e.preventDefault()
      return
    }
    if (Math.abs(e.deltaY) < 6) return

    const dir = e.deltaY > 0 ? 1 : -1
    const next = currentIdx + dir
    if (next < 0 || next >= sections.length) return

    e.preventDefault()
    wheelCooldown = true
    snapTo(next)
    window.setTimeout(() => {
      wheelCooldown = false
    }, 1100)
  },
  { passive: false }
)

// Touch snap (mobile swipe)
let touchStartY = 0
window.addEventListener(
  'touchstart',
  (e) => {
    touchStartY = e.touches[0].clientY
  },
  { passive: true }
)
window.addEventListener(
  'touchend',
  (e) => {
    if (isAnimating) return
    const dy = touchStartY - e.changedTouches[0].clientY
    if (Math.abs(dy) < 40) return
    snapTo(currentIdx + (dy > 0 ? 1 : -1))
  },
  { passive: true }
)

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
