import './style.css'

const projects = [
  {
    name: 'pulp',
    desc: 'a gamified note taking app for creatives',
    achievement: '',
    details: [
      'solo full-stack build',
      'gamified focus timer that grows as you study',
      'rich-text notebooks, decks & flashcards',
      'realtime sync, stats & leaderboard',
    ],
    image: '/pictures/pulp.jpg',
    video: '/videos/pulp.mp4',
    youtube: '',
    link: 'https://pulpnotes.com',
    stack: '100% typescript',
    tools: 'next.js · react · tailwind · supabase · framer motion',
  },
  {
    name: 'nialink',
    desc: 'a discord bot that allows indexing an entire server',
    achievement: '🏆 1st SDx hackathon',
    details: [
      'indexes an entire discord server into search',
      'natural-language queries over server history',
      'discord.js bot backed by supabase / sqlite',
      'won 1st at the SDx hackathon',
    ],
    image: '/pictures/nialink.jpg',
    video: '/videos/nialink.mp4',
    youtube: '',
    link: 'https://youtu.be/vpsYrznbtuE?si=Qa0y1ky0kSHMUBe-',
    stack: '100% javascript',
    tools: 'discord.js · supabase · sqlite',
  },
  {
    name: 'bioscope',
    desc: 'advanced ecosystem intelligence',
    achievement: '🏆 1st datahacks 2026',
    details: [
      'interactive d3 graph of a regional food web',
      'query any species → predators, prey & role',
      'snowflake-backed data pipeline',
      'won 1st at datahacks 2026',
    ],
    image: '/pictures/bioscope.png',
    video: '/videos/project3.mp4',
    youtube: '',
    link: 'https://www.youtube.com/watch?v=R6QAX09ipwc',
    stack: 'typescript · python',
    tools: 'next.js · react · d3 · framer motion · snowflake',
  },
  {
    name: 'skain',
    desc: 'a self-healing drone-swarm mesh that detects attacks in real time',
    achievement: '',
    details: [
      'self-healing drone-swarm mesh, resilient to node loss',
      'self-trained xgboost detector flags cyber/jamming attacks live',
      'second laptop joins as a killable node + attack console',
      'built solo in 1.5 days — bow capital x firestorm',
    ],
    image: '/pictures/skain.svg',
    video: '/videos/skain.mp4',
    youtube: '',
    link: 'https://www.youtube.com/watch?v=9NsFjA5MQFo',
    stack: 'typescript · python',
    tools: 'next.js · fastapi · docker · websockets · xgboost',
  },
]

const renderProjects = () =>
  projects
    .map(
      (p) => `
      <div class="project-row">
        <div class="project-video-wrap">
          ${p.link
            ? `<a class="project-media" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="Open ${p.name}">`
            : `<div class="project-media">`}
            ${p.image
              ? `<img class="project-video" src="${p.image}" alt="${p.name} preview" decoding="async" fetchpriority="high" />
              ${p.details && p.details.length ? `<span class="project-caption">
                <span class="caption-kicker">what i built</span>
                <ul class="caption-list">
                  ${p.details.map((d) => `<li>${d}</li>`).join('')}
                </ul>
              </span>` : ''}`
              : `<video class="project-video" src="${p.video}" muted loop playsinline preload="metadata"></video>
              <div class="project-video-overlay">
                <span class="project-play-hint">hover to preview</span>
              </div>`}
          ${p.link ? `</a>` : `</div>`}
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
  { label: 'plants 🌲🪴🎍🪴' },
  { label: 'running late at night' },
  { label: 'cowboy bebop' },
  { label: 'terraria' },
  { label: 'chocolate milk' },
  { label: 'surfing' },
  { label: 'fishing' },
  { label: 'grocery store with my mom' },
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
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-top">
      <a href="#" class="sidebar-link active" data-nav="home">HOME</a>
      <a href="#" class="sidebar-link" data-nav="projects">PROJECTS</a>
    </div>
    <div class="sidebar-bottom">
      <a href="https://github.com/Allghelierce" target="_blank" rel="noopener noreferrer" class="sidebar-ext">GITHUB ↗</a>
      <a href="https://www.linkedin.com/in/cesar-villegas-b49061314" target="_blank" rel="noopener noreferrer" class="sidebar-ext">LINKEDIN ↗</a>
      <a href="https://devpost.com/pvt-trisn?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" class="sidebar-ext">DEVPOST ↗</a>
    </div>
  </nav>

  <div class="main-content">
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
          <button class="copy-email" type="button" data-email="pvt.trisn@gmail.com">click here to copy my email</button>
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
          <div class="label">— my best work</div>
          <div class="projects-list">
            ${renderProjects()}
          </div>
        </div>
      </div>
    </section>
  </div>
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
const hPages: HTMLElement[] = [page2]
let vIdx = 0
let hIdx = 0

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

const animateProjectsIn = () => {
  const rows = document.querySelectorAll<HTMLElement>('.project-row')
  const aboutLabel = document.querySelector('.page-next-label')
  const aboutScroll = document.querySelector('.page-scroll')
  rows.forEach((r) => r.classList.remove('visible'))
  aboutLabel?.classList.remove('show')
  aboutScroll?.classList.remove('show')
  rows.forEach((r, i) => setTimeout(() => r.classList.add('visible'), 120 * i))
  const delay = 120 * rows.length + 800
  setTimeout(() => aboutLabel?.classList.add('show'), delay)
  setTimeout(() => aboutScroll?.classList.add('show'), delay + 150)
}

const animateProjectsOut = () => {
  document.querySelectorAll<HTMLElement>('.project-row').forEach((r) => r.classList.remove('visible'))
  document.querySelector('.page-next-label')?.classList.remove('show')
  document.querySelector('.page-scroll')?.classList.remove('show')
}

const animatePage3In = () => {
  const weekSection = document.querySelector<HTMLElement>('.page3-week')
  const weekItems = document.querySelectorAll<HTMLElement>('.page3-week .week-item')
  const interestSection = document.querySelector<HTMLElement>('.page3-interests')
  const interestItems = document.querySelectorAll<HTMLElement>('.page3-interests .week-item')
  weekItems.forEach((w) => w.classList.remove('visible'))
  interestItems.forEach((w) => w.classList.remove('visible'))
  weekSection?.classList.remove('visible')
  interestSection?.classList.remove('visible')
  weekSection && setTimeout(() => weekSection.classList.add('visible'), 100)
  weekItems.forEach((w, i) => setTimeout(() => w.classList.add('visible'), 200 + 100 * i))
  const interestDelay = 200 + 100 * (weekItems.length) + 150
  interestSection && setTimeout(() => interestSection.classList.add('visible'), interestDelay)
  interestItems.forEach((w, i) => setTimeout(() => w.classList.add('visible'), interestDelay + 100 * (i + 1)))
}

const animatePage3Out = () => {
  document.querySelectorAll<HTMLElement>('.page3-week .week-item, .page3-interests .week-item').forEach((w) => w.classList.remove('visible'))
  document.querySelector<HTMLElement>('.page3-week')?.classList.remove('visible')
  document.querySelector<HTMLElement>('.page3-interests')?.classList.remove('visible')
}

const updateSidebarActive = () => {
  document.querySelectorAll<HTMLAnchorElement>('.sidebar-link[data-nav]').forEach((link) => {
    const nav = link.dataset.nav
    const isActive =
      (vIdx === 0 && nav === 'home') ||
      (vIdx === 1 && nav === 'projects')
    link.classList.toggle('active', isActive)
  })
}

const snapH = (idx: number) => {
  if (idx < 0 || idx >= hPages.length || idx === hIdx || isAnimating) return
  isAnimating = true
  if (hIdx === 0) animateProjectsOut()
  else animatePage3Out()
  hIdx = idx
  applySlideClasses(hPages, hIdx)
  if (hIdx === 0) animateProjectsIn()
  else animatePage3In()
  updateSidebarActive()
  setTimeout(() => { isAnimating = false }, 550)
}

const snapV = (idx: number) => {
  if (idx < 0 || idx >= vSections.length || idx === vIdx || isAnimating) return
  isAnimating = true
  vIdx = idx
  applySlideClasses(vSections, vIdx)
  updateSidebarActive()
  if (vIdx === 1) {
    if (hIdx === 0) animateProjectsIn()
    else animatePage3In()
  } else {
    animateProjectsOut()
    animatePage3Out()
  }
  setTimeout(() => { isAnimating = false }, 550)
}

scrollHint.addEventListener('click', () => snapV(vIdx + 1))

window.addEventListener('keydown', (e) => {
  const tag = (e.target as HTMLElement).tagName
  if (tag === 'TEXTAREA' || tag === 'INPUT') return
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault()
    if (vIdx === 1 && hIdx === 1) snapV(2)
    else if (vIdx === 0) snapV(1)
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    if (vIdx === 2) snapV(1)
    else if (vIdx === 1) snapV(0)
  } else if (e.key === 'ArrowRight') {
    if (vIdx === 1) { e.preventDefault(); snapH(hIdx + 1) }
  } else if (e.key === 'ArrowLeft') {
    if (vIdx === 1) { e.preventDefault(); snapH(hIdx - 1) }
  } else if (e.key === 'Home') {
    e.preventDefault(); snapV(0)
  }
})

let wheelCooldown = false
window.addEventListener(
  'wheel',
  (e) => {
    if (isAnimating || wheelCooldown) { e.preventDefault(); return }
    if (Math.abs(e.deltaY) < 6 && Math.abs(e.deltaX) < 6) return
    e.preventDefault()
    let navigated = false
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && vIdx === 1) {
      const dir = e.deltaX > 0 ? 1 : -1
      if (dir > 0 && hIdx < hPages.length - 1) { snapH(hIdx + 1); navigated = true }
      else if (dir < 0 && hIdx > 0) { snapH(hIdx - 1); navigated = true }
    } else {
      const dir = e.deltaY > 0 ? 1 : -1
      if (dir > 0) {
        if (vIdx === 0) { snapV(1); navigated = true }
        else if (vIdx === 1 && hIdx === 1) { snapV(2); navigated = true }
      } else if (dir < 0) {
        if (vIdx === 2) { snapV(1); navigated = true }
        else if (vIdx === 1) { snapV(0); navigated = true }
      }
    }
    if (navigated) {
      wheelCooldown = true
      setTimeout(() => { wheelCooldown = false }, 600)
    }
  },
  { passive: false }
)

let touchStartX = 0
let touchStartY = 0
window.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}, { passive: true })
window.addEventListener('touchend', (e) => {
  if (isAnimating) return
  const dx = touchStartX - e.changedTouches[0].clientX
  const dy = touchStartY - e.changedTouches[0].clientY
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40 && vIdx === 1) {
    if (dx > 0) snapH(hIdx + 1)
    else snapH(hIdx - 1)
  } else if (Math.abs(dy) > 40) {
    if (dy > 0) {
      if (vIdx === 0) snapV(1)
      else if (vIdx === 1 && hIdx === 1) snapV(2)
    } else {
      if (vIdx === 2) snapV(1)
      else if (vIdx === 1) snapV(0)
    }
  }
}, { passive: true })

// ============ Sidebar navigation ============
document.querySelectorAll<HTMLAnchorElement>('.sidebar-link[data-nav]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const nav = link.dataset.nav
    if (nav === 'home') {
      snapV(0)
    } else if (nav === 'projects') {
      snapV(1)
    }
  })
})

// ============ Page 2 scroll to about me ============
document.querySelector('.page-scroll')?.addEventListener('click', () => snapH(1))

// ============ Copy email ============
const copyBtn = document.querySelector<HTMLButtonElement>('.copy-email')
copyBtn?.addEventListener('click', () => {
  const email = copyBtn.dataset.email || ''
  navigator.clipboard.writeText(email).then(() => {
    copyBtn.textContent = 'copied!'
    setTimeout(() => { copyBtn.textContent = 'click here to copy my email' }, 2000)
  })
})

