import './style.css'

const projects = [
  {
    name: 'pulp',
    desc: 'a gamified note taking app for creatives',
    achievement: '',
    video: '/videos/pulp.mp4',
    youtube: 'https://youtube.com/watch?v=TODO',
    link: 'https://pulp-omega.vercel.app/',
    stack: '100% typescript',
    tools: 'next.js · react · tailwind · supabase · framer motion',
  },
  {
    name: 'nialink',
    desc: 'a discord bot that allows indexing an entire server',
    achievement: '🏆 1st SDx hackathon',
    video: '/videos/nialink.mp4',
    youtube: 'https://youtube.com/watch?v=TODO',
    link: 'https://github.com/devhyper/nialink',
    stack: '100% javascript',
    tools: 'discord.js · supabase · sqlite',
  },
  {
    name: 'bioscope',
    desc: 'advanced ecosystem intelligence',
    achievement: '🏆 1st datahacks 2026 (i carried)',
    video: '/videos/project3.mp4',
    youtube: 'https://youtube.com/watch?v=TODO',
    link: '',
    stack: 'typescript · python',
    tools: 'next.js · react · d3 · leaflet · framer motion · snowflake',
  },
]

const renderProjects = () =>
  projects
    .map(
      (p) => `
      <div class="project-row">
        <div class="project-video-wrap">
          <video class="project-video" src="${p.video}" muted loop playsinline preload="metadata"></video>
          <div class="project-video-overlay">
            <span class="project-play-hint">hover to preview</span>
          </div>
          ${p.youtube ? `<a href="${p.youtube}" target="_blank" rel="noopener noreferrer" class="project-yt-link" aria-label="Watch full demo on YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            full demo
          </a>` : ''}
        </div>
        <div class="project-info">
          <h3 class="project-name">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.name}</a>` : p.name}${p.achievement ? `<span class="project-achievement">${p.achievement}</span>` : ''}</h3>
          <p class="project-desc">${p.desc}</p>
          ${p.stack ? `<span class="project-stack">${p.stack}</span>` : ''}
          ${p.tools ? `<span class="project-tools">${p.tools}</span>` : ''}
        </div>
      </div>
    `
    )
    .join('')

const marqueeItems = [
  { label: 'plants. my room is a jungle 🌲🪴🎍🪴' },
  { label: 'driving around for no reason' },
  { label: 'running late at night' },
  { label: 'going to the grocery store with my mom' },
  { label: 'walking my dog with my friend' },
  { label: 'cowboy bebop' },
  { label: 'terraria 🌳' },
  { label: 'chocolate milk' },
  { label: 'surfing 🌊' },
  { label: 'fishing' },
]

const renderMarqueeItems = () =>
  marqueeItems
    .map(
      (item) => `
      <div class="marquee-item">
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

        <p class="bio">
          data science @ <strong>ucsd '29</strong>, leaning hard into ml and software development.
          <span class="bio-extra">- i go by tristan (middle name)</span>
        </p>
        <nav class="socials-row">
          <a href="https://github.com/Allghelierce" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <span class="sep">/</span>
          <a href="https://www.linkedin.com/in/cesar-villegas-b49061314" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <span class="sep">/</span>
          <a href="mailto:pvt.trisn@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            pvt.trisn@gmail.com
          </a>
        </nav>
      </div>
      <aside class="things-i-like">
        <div class="label">— things i like</div>
        <div class="marquee-track">
          ${renderMarqueeItems()}
        </div>
      </aside>
    </div>
    <div class="hero-scroll-container">
      <div class="portfolio-label">Portfolio</div>
      <button class="hero-scroll" type="button" aria-label="Scroll to continue">
        <span>(scroll or arrows to continue)</span>
        <span class="scroll-arrow">↓</span>
      </button>
    </div>
  </section>

  <section class="content snap" id="content">
    <div class="page" id="page2">
      <div class="page-inner">
        <div class="page2-layout">
          <div class="page2-projects">
            <div class="label">— my best work</div>
            <div class="projects-list">
              ${renderProjects()}
            </div>
            <a href="https://devpost.com/pvt-trisn?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" class="devpost-link">
              see more on devpost →
            </a>
          </div>
          <div class="page2-sidebar">
            <div class="page2-week">
              <div class="label">— this week</div>
              <ul class="week-list">
                <li class="week-item">recording demos</li>
                <li class="week-item">maybe launching pulp</li>
                <li class="week-item">going to the casino</li>
                <li class="week-item">skipping class</li>
              </ul>
            </div>
            <div class="page2-interests">
              <div class="label">— things i'm interested in</div>
              <ul class="week-list">
                <li class="week-item">optimizing workflow for hyperproductivity</li>
                <li class="week-item">robust representation learning on noisy, unstructured data</li>
                <li class="week-item">multi-modal AI orchestration and tool-augmented reasoning</li>
                <li class="week-item">scalable systems architecture for high-throughput pipelines</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

`

// ============ Text scramble (2Advanced-style decode) ============
const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

class TextScramble {
  private el: HTMLElement
  private chars = '!<>-_\\/[]{}—=+*^?#'
  private queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> = []
  private frame = 0
  private frameRequest = 0
  private resolve: () => void = () => { }

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
      const start = Math.floor(Math.random() * 10)
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
        output += escapeHtml(to)
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          item.char = char
        }
        output += `<span class="dud">${escapeHtml(char)}</span>`
      } else {
        output += escapeHtml(from)
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

const scrambleChars = '!<>-\\/[]{}—=+*^?#'
const scrambleEls = document.querySelectorAll<HTMLElement>('.scramble')
const scramblePromises: Promise<void>[] = []
scrambleEls.forEach((el, i) => {
  const final = el.dataset.final || el.textContent || ''
  el.innerHTML = Array.from(final)
    .map((c) => (c === ' ' ? ' ' : `<span class="dud">${scrambleChars[Math.floor(Math.random() * scrambleChars.length)]}</span>`))
    .join('')
  const fx = new TextScramble(el)
  scramblePromises.push(
    new Promise((resolve) => {
      window.setTimeout(() => {
        fx.setText(final).then(resolve)
      }, i * 180)
    })
  )
})

Promise.all(scramblePromises).then(() => {
  setTimeout(() => {
    document.querySelector('.portfolio-label')?.classList.add('show')
    document.querySelector('.hero-scroll')?.classList.add('show')
  }, 1200)
})

// ============ Video hover-to-play ============
document.querySelectorAll<HTMLElement>('.project-row').forEach((row) => {
  const video = row.querySelector('video') as HTMLVideoElement
  const overlay = row.querySelector('.project-video-overlay') as HTMLElement
  if (!video) return
  row.addEventListener('mouseenter', () => {
    video.play().catch(() => {})
    if (overlay) overlay.style.opacity = '0'
  })
  row.addEventListener('mouseleave', () => {
    video.pause()
    video.currentTime = 0
    if (overlay) overlay.style.opacity = '1'
  })
})

// ============ Slide navigation ============
const hero = document.getElementById('hero')!
const content = document.getElementById('content')!
const page2 = document.getElementById('page2')!
const scrollHint = document.querySelector<HTMLButtonElement>('.hero-scroll')!

const vSections: HTMLElement[] = [hero, content]
let vIdx = 0

let isAnimating = false

hero.classList.add('active')
page2.classList.add('active')

const applySlideClasses = (slides: HTMLElement[], activeIdx: number) => {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'passed')
    if (i < activeIdx) slide.classList.add('passed')
    else if (i === activeIdx) slide.classList.add('active')
  })
}

const animateContentIn = () => {
  const rows = document.querySelectorAll<HTMLElement>('.project-row')
  const weekItems = document.querySelectorAll<HTMLElement>('.page2-week .week-item')
  const weekSection = document.querySelector<HTMLElement>('.page2-week')
  const interestItems = document.querySelectorAll<HTMLElement>('.page2-interests .week-item')
  const interestSection = document.querySelector<HTMLElement>('.page2-interests')
  rows.forEach((r) => r.classList.remove('visible'))
  weekItems.forEach((w) => w.classList.remove('visible'))
  interestItems.forEach((w) => w.classList.remove('visible'))
  weekSection?.classList.remove('visible')
  interestSection?.classList.remove('visible')
  rows.forEach((r, i) => setTimeout(() => r.classList.add('visible'), 120 * i))
  const weekDelay = 120 * rows.length
  weekSection && setTimeout(() => weekSection.classList.add('visible'), weekDelay)
  weekItems.forEach((w, i) => setTimeout(() => w.classList.add('visible'), weekDelay + 100 * (i + 1)))
  const interestDelay = weekDelay + 100 * (weekItems.length + 1) + 150
  interestSection && setTimeout(() => interestSection.classList.add('visible'), interestDelay)
  interestItems.forEach((w, i) => setTimeout(() => w.classList.add('visible'), interestDelay + 100 * (i + 1)))
}

const animateContentOut = () => {
  document.querySelectorAll<HTMLElement>('.project-row').forEach((r) => r.classList.remove('visible'))
  document.querySelectorAll<HTMLElement>('.week-item').forEach((w) => w.classList.remove('visible'))
  document.querySelector<HTMLElement>('.page2-week')?.classList.remove('visible')
  document.querySelector<HTMLElement>('.page2-interests')?.classList.remove('visible')
}

const snapV = (idx: number) => {
  if (idx < 0 || idx >= vSections.length || idx === vIdx || isAnimating) return
  isAnimating = true
  vIdx = idx
  applySlideClasses(vSections, vIdx)
  if (vIdx === 1) animateContentIn()
  else animateContentOut()
  setTimeout(() => { isAnimating = false }, 550)
}

scrollHint.addEventListener('click', () => snapV(vIdx + 1))

window.addEventListener('keydown', (e) => {
  const tag = (e.target as HTMLElement).tagName
  if (tag === 'TEXTAREA' || tag === 'INPUT') return
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    if (vIdx === 0) { e.preventDefault(); snapV(1) }
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    snapV(vIdx - 1)
  } else if (e.key === 'Home') {
    e.preventDefault(); snapV(0)
  }
})

let wheelCooldown = false
window.addEventListener(
  'wheel',
  (e) => {
    if (isAnimating || wheelCooldown) { e.preventDefault(); return }
    if (Math.abs(e.deltaY) < 6) return
    const dir = e.deltaY > 0 ? 1 : -1
    e.preventDefault()
    let navigated = false
    if (vIdx === 0 && dir > 0) { snapV(1); navigated = true }
    else if (vIdx === 1 && dir < 0) { snapV(0); navigated = true }
    if (navigated) {
      wheelCooldown = true
      setTimeout(() => { wheelCooldown = false }, 600)
    }
  },
  { passive: false }
)

let touchStartY = 0
window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY
}, { passive: true })
window.addEventListener('touchend', (e) => {
  if (isAnimating) return
  const dy = touchStartY - e.changedTouches[0].clientY
  if (Math.abs(dy) > 40) {
    if (dy > 0 && vIdx === 0) snapV(1)
    else if (dy < 0 && vIdx === 1) snapV(0)
  }
}, { passive: true })



