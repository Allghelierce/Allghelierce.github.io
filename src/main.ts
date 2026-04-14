import './style.css'

const year = new Date().getFullYear()

const marqueeItems = [
  { idx: '01', label: 'Rust by Facepunch' },
  { idx: '02', label: '0DTE puts' },
  { idx: '03', label: 'Building Legos' },
  { idx: '04', label: 'Driving for no reason' },
  { idx: '05', label: 'Competitive for no reason' },
  { idx: '06', label: 'Plants — my room is a jungle' },
  { idx: '07', label: 'Terrible sleep schedule' },
  { idx: '08', label: 'Running past midnight' },
  { idx: '09', label: 'Big waves & offshore wind' },
  { idx: '10', label: 'Sword Art Online' },
  { idx: '11', label: 'Messy but not disorganized' },
  { idx: '12', label: 'Going to the grocery store with my mom' },
  { idx: '13', label: 'Eating shit at the skatepark' },
  { idx: '14', label: 'Finding new places around where I live' },
  { idx: '15', label: 'Fishing with my friends at home' },
]

const renderMarqueeItems = (dup = false) =>
  marqueeItems
    .map(
      (item) => `
      <div class="marquee-item"${dup ? ' aria-hidden="true"' : ''}>
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
        <div class="marquee-label">— things i like</div>
        <div class="marquee-viewport">
          <div class="marquee-track">
            ${renderMarqueeItems()}
            ${renderMarqueeItems(true)}
          </div>
        </div>
      </aside>
    </div>
    <div class="waves-container waves-bottom" aria-hidden="true">
      <canvas class="waves-canvas"></canvas>
    </div>
    <button class="hero-scroll" type="button" aria-label="Scroll to continue">
      <span>scroll or arrows to continue</span>
      <span class="scroll-arrow">↓</span>
    </button>
  </section>

  <section class="content snap" id="content">
    <div class="waves-container waves-top" aria-hidden="true">
      <canvas class="waves-canvas"></canvas>
    </div>
    <div class="page">
      <nav>
        <div class="nav-id">
          <span class="nav-dot"></span>
          CESAR VILLEGAS
        </div>
        <ul class="nav-links">
          <li>
            <a href="https://github.com/Allghelierce" target="_blank" rel="noopener" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cesar-villegas-b49061314" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </li>
          <li>
            <a href="mailto:pvt.trisn@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </li>
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

// ============ Flowing waves (canvas) ============
interface WaveLayer {
  amp: number
  freq: number
  speed: number
  phase: number
  yBase: number
  color: string
}

const waveLayers: WaveLayer[] = [
  { amp: 26, freq: 0.0090, speed: 0.0018, phase: 0.0, yBase: 0.38, color: 'rgba(41, 15, 18, 0.38)' },
  { amp: 20, freq: 0.0130, speed: 0.0025, phase: 1.1, yBase: 0.48, color: 'rgba(58, 92, 142, 0.26)' },
  { amp: 15, freq: 0.0180, speed: 0.0015, phase: 2.3, yBase: 0.56, color: 'rgba(41, 15, 18, 0.20)' },
  { amp: 11, freq: 0.0230, speed: 0.0032, phase: 3.7, yBase: 0.64, color: 'rgba(58, 92, 142, 0.16)' },
]

const waveCanvases = Array.from(
  document.querySelectorAll<HTMLCanvasElement>('.waves-canvas')
).map((canvas) => ({ canvas, ctx: canvas.getContext('2d')! }))

const dpr = Math.min(window.devicePixelRatio || 1, 2)

const drawWaves = (t: number) => {
  waveCanvases.forEach(({ canvas, ctx }) => {
    // Resize buffer to match CSS display size every frame.
    // Cheap, and guarantees we never draw into a stale buffer.
    const rect = canvas.getBoundingClientRect()
    const targetW = Math.max(1, Math.floor(rect.width * dpr))
    const targetH = Math.max(1, Math.floor(rect.height * dpr))
    if (rect.width < 1 || rect.height < 1) return
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW
      canvas.height = targetH
    }

    const w = canvas.width
    const h = canvas.height
    ctx.clearRect(0, 0, w, h)

    for (const layer of waveLayers) {
      ctx.beginPath()
      ctx.moveTo(0, h)
      const yBase = h * layer.yBase
      const amp = layer.amp * dpr
      const freq = layer.freq / dpr
      const step = 2 * dpr
      for (let x = 0; x <= w; x += step) {
        // two overlapping sines + small ripple -> organic, non-repeating swell
        const primary = Math.sin(x * freq + t * layer.speed + layer.phase) * amp
        const secondary =
          Math.sin(x * freq * 2.3 + t * layer.speed * 1.4 + layer.phase * 1.7) * amp * 0.42
        const ripple = Math.sin(x * freq * 4.7 + t * layer.speed * 0.6) * amp * 0.14
        const y = yBase + primary + secondary + ripple
        ctx.lineTo(x, y)
      }
      ctx.lineTo(w, h)
      ctx.closePath()
      ctx.fillStyle = layer.color
      ctx.fill()
    }
  })
}

// Waves always animate — it's a decorative background, not parallax,
// so reduced-motion users still get the flow.
const wavesLoop = (t: number) => {
  drawWaves(t)
  requestAnimationFrame(wavesLoop)
}
requestAnimationFrame(wavesLoop)

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
