import './style.css'

const year = new Date().getFullYear()

const wavesSvg = (idSuffix: string) => `
  <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <path id="gentle-wave-${idSuffix}" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="wave-parallax">
      <use xlink:href="#gentle-wave-${idSuffix}" x="48" y="0" fill="rgba(41, 15, 18, 0.32)" />
      <use xlink:href="#gentle-wave-${idSuffix}" x="48" y="3" fill="rgba(58, 92, 142, 0.22)" />
      <use xlink:href="#gentle-wave-${idSuffix}" x="48" y="5" fill="rgba(41, 15, 18, 0.16)" />
      <use xlink:href="#gentle-wave-${idSuffix}" x="48" y="7" fill="rgba(58, 92, 142, 0.12)" />
    </g>
  </svg>
`

const marqueeItems = [
  { idx: '01', label: 'D Street' },
  { idx: '02', label: 'Sword Art Online' },
  { idx: '03', label: 'Messy but not disorganized' },
]

const renderMarqueeItems = (dup = false) =>
  marqueeItems
    .map(
      (item) => `
      <div class="marquee-item"${dup ? ' aria-hidden="true"' : ''}>
        <span class="idx">${item.idx}</span>
        <span class="label-text">${item.label}</span>
      </div>
    `
    )
    .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="hero snap" id="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <div class="hero-label">— hi, my name is</div>
        <h1 class="hero-name">
          <span class="scramble" data-final="cesar">cesar</span>
          <br/>
          <span class="scramble" data-final="villegas.">villegas.</span>
        </h1>
        <p class="hero-tag">programmer · runner · surfer · reader</p>
      </div>
      <aside class="hero-marquee" aria-hidden="true">
        <div class="marquee-label">— niche</div>
        <div class="marquee-viewport">
          <div class="marquee-track">
            ${renderMarqueeItems()}
            ${renderMarqueeItems(true)}
          </div>
        </div>
      </aside>
    </div>
    <div class="waves-container waves-bottom" aria-hidden="true">
      ${wavesSvg('a')}
    </div>
    <button class="hero-scroll" type="button" aria-label="Scroll to continue">
      <span>scroll or arrows to continue</span>
      <span class="scroll-arrow">↓</span>
    </button>
  </section>

  <section class="content snap" id="content">
    <div class="waves-container waves-top" aria-hidden="true">
      ${wavesSvg('b')}
    </div>
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
              <li>plowing through every missing assignment</li>
              <li>skipping class</li>
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

// ============ Text scramble (2Advanced-style decode) ============
class TextScramble {
  private el: HTMLElement
  private chars = '!<>-_\\/[]{}—=+*^?#'
  private queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = []
  private frame = 0
  private frameRequest = 0
  private resolve: () => void = () => {}

  constructor(el: HTMLElement) {
    this.el = el
    this.update = this.update.bind(this)
  }

  setText(newText: string) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise<void>((resolve) => {
      this.resolve = resolve
    })
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  private update() {
    let output = ''
    let complete = 0
    for (let i = 0; i < this.queue.length; i++) {
      const item = this.queue[i]
      const { from, to, start, end } = item
      let char = item.char
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          item.char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const scrambleEls = document.querySelectorAll<HTMLElement>('.scramble')
scrambleEls.forEach((el, i) => {
  const final = el.dataset.final || el.textContent || ''
  if (prefersReducedMotion) {
    el.textContent = final
    return
  }
  // placeholder keeps layout stable during fade-in
  el.innerHTML = Array.from(final)
    .map((c) => (c === ' ' ? ' ' : `<span class="dud">_</span>`))
    .join('')
  const fx = new TextScramble(el)
  window.setTimeout(() => {
    fx.setText(final)
  }, 400 + i * 320)
})

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

scrollHint.addEventListener('click', () => snapTo(currentIdx + 1))

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
