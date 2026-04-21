import './style.css'

const projects = [
  {
    name: '🍊 pulp',
    desc: 'a gamified note taking app for creatives',
    video: '/videos/pulp.mp4',
    youtube: '',
    link: 'https://pulp-omega.vercel.app/',
    stack: 'next.js · typescript · prisma',
  },
  {
    name: '⛓️ nialink',
    desc: 'a discord bot that allows indexing an entire server',
    video: '/videos/nialink.mp4',
    youtube: '',
    link: 'https://github.com/devhyper/nialink',
    stack: 'python · discord.py',
  },
  {
    name: '🌿 project 3',
    desc: 'coming soon',
    video: '/videos/project3.mp4',
    youtube: '',
    link: '',
    stack: '',
  },
]

const renderProjects = () =>
  projects
    .map(
      (p, i) => `
      <div class="project-row">
        <span class="project-num">${['i', 'ii', 'iii', 'iv', 'v', 'vi'][i]}.</span>
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
          <h3 class="project-name">${p.link ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.name}</a>` : p.name}</h3>
          <p class="project-desc">${p.desc}</p>
          ${p.stack ? `<span class="project-stack">${p.stack}</span>` : ''}
        </div>
      </div>
    `
    )
    .join('')

const marqueeItems = [
  { label: 'plants. my room is a jungle' },
  { label: 'driving around for no reason' },
  { label: 'running late at night' },
  { label: 'going to the grocery store with my mom' },
  { label: 'walking my dog with my friend' },
  { label: 'cowboy bebop' },
  { label: 'terraria 🌳' },
  { label: 'chocolate milk' },
  { label: 'surfing' },
  { label: 'fishing' },
]

const renderMarqueeItems = () =>
  marqueeItems
    .map(
      () => `
      <div class="marquee-item">
        <span class="label-text"></span>
        <span class="type-cursor">|</span>
      </div>
    `
    )
    .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="hero snap" id="hero">
    <nav class="top-nav">
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
          </div>
          <div class="page2-notes">
            <div class="label">— leave a note</div>
            <div class="sticky-board" id="stickyBoard"></div>
            <form class="sticky-form" id="stickyForm">
              <input class="sticky-input" id="stickyInput" type="text" placeholder="write something..." maxlength="120" autocomplete="off" />
              <button class="sticky-add" type="submit">+</button>
            </form>
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

// ============ Typewriter for marquee items ============
const runTypewriter = () => {
  const items = Array.from(document.querySelectorAll<HTMLElement>('.marquee-item'))
  if (!items.length) return

  let itemIdx = 0
  let charIdx = 0

  const currentLabel = () => items[itemIdx].querySelector('.label-text') as HTMLElement
  const currentCursor = () => items[itemIdx].querySelector('.type-cursor') as HTMLElement

  const tick = () => {
    const text = marqueeItems[itemIdx].label
    const label = currentLabel()
    const cursor = currentCursor()

    cursor.classList.add('typing')
    label.textContent = text.slice(0, charIdx)
    charIdx++

    if (charIdx <= text.length) {
      setTimeout(tick, 22 + Math.random() * 20)
    } else {
      cursor.classList.remove('typing')
      charIdx = 0
      itemIdx++
      if (itemIdx < items.length) {
        setTimeout(tick, 100)
      }
    }
  }

  setTimeout(tick, 1200)
}

if (prefersReducedMotion) {
  document.querySelectorAll<HTMLElement>('.marquee-item').forEach((el, i) => {
    const label = el.querySelector('.label-text') as HTMLElement
    if (label) label.textContent = marqueeItems[i].label
  })
} else {
  runTypewriter()
}

// ============ Sticky notes ============
const STICKY_KEY = 'site-sticky-notes'
const STICKY_COLORS = ['#fff9b1', '#ffc3a0', '#b5ead7', '#c7ceea', '#ffdac1', '#e2f0cb']

interface StickyNote {
  id: string
  text: string
  color: string
  rotation: number
  x: number
  y: number
}

const loadNotes = (): StickyNote[] => {
  try {
    return JSON.parse(localStorage.getItem(STICKY_KEY) || '[]')
  } catch { return [] }
}

const saveNotes = (notes: StickyNote[]) => {
  localStorage.setItem(STICKY_KEY, JSON.stringify(notes))
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const stickyBoard = document.getElementById('stickyBoard')!

const initDrag = () => {
  stickyBoard.querySelectorAll<HTMLElement>('.sticky-note').forEach((el) => {
    let dragging = false
    let startX = 0
    let startY = 0
    let origLeft = 0
    let origTop = 0

    const onDown = (cx: number, cy: number) => {
      dragging = true
      el.style.zIndex = '10'
      el.style.cursor = 'grabbing'
      startX = cx
      startY = cy
      const rect = stickyBoard.getBoundingClientRect()
      origLeft = (parseFloat(el.style.left) / 100) * rect.width
      origTop = (parseFloat(el.style.top) / 100) * rect.height
    }

    const onMove = (cx: number, cy: number) => {
      if (!dragging) return
      const rect = stickyBoard.getBoundingClientRect()
      const newLeft = Math.max(0, Math.min(rect.width - el.offsetWidth, origLeft + (cx - startX)))
      const newTop = Math.max(0, Math.min(rect.height - el.offsetHeight, origTop + (cy - startY)))
      el.style.left = (newLeft / rect.width * 100) + '%'
      el.style.top = (newTop / rect.height * 100) + '%'
    }

    const onUp = () => {
      if (!dragging) return
      dragging = false
      el.style.zIndex = ''
      el.style.cursor = ''
      const id = el.dataset.id!
      const notes = loadNotes()
      const note = notes.find((n) => n.id === id)
      if (note) {
        note.x = parseFloat(el.style.left)
        note.y = parseFloat(el.style.top)
        saveNotes(notes)
      }
    }

    el.addEventListener('mousedown', (e) => { e.preventDefault(); onDown(e.clientX, e.clientY) })
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY))
    window.addEventListener('mouseup', onUp)
    el.addEventListener('touchstart', (e) => { onDown(e.touches[0].clientX, e.touches[0].clientY) }, { passive: true })
    window.addEventListener('touchmove', (e) => { if (dragging) onMove(e.touches[0].clientX, e.touches[0].clientY) }, { passive: true })
    window.addEventListener('touchend', onUp)
  })
}

const renderNotes = () => {
  const notes = loadNotes()
  stickyBoard.innerHTML = notes.map((n) => `
    <div class="sticky-note" data-id="${n.id}" style="background:${n.color};left:${n.x}%;top:${n.y}%;transform:rotate(${n.rotation}deg)">
      <span class="sticky-text">${esc(n.text)}</span>
    </div>
  `).join('')
  initDrag()
}

const defaultNotes: StickyNote[] = [
  { id: '1', text: 'cool site!', color: '#fff9b1', rotation: -2, x: 5, y: 8 },
  { id: '2', text: 'hire this guy', color: '#b5ead7', rotation: 1.5, x: 45, y: 15 },
  { id: '3', text: 'nice portfolio tristan', color: '#ffc3a0', rotation: -1, x: 15, y: 55 },
]

const existing = loadNotes()
if (existing.length === 0 || existing[0].x === undefined) {
  saveNotes(defaultNotes)
}
renderNotes()

const stickyForm = document.getElementById('stickyForm') as HTMLFormElement
const stickyInput = document.getElementById('stickyInput') as HTMLInputElement
stickyForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = stickyInput.value.trim()
  if (!text) return
  const notes = loadNotes()
  notes.push({
    id: Date.now().toString(),
    text,
    color: STICKY_COLORS[Math.floor(Math.random() * STICKY_COLORS.length)],
    rotation: (Math.random() - 0.5) * 6,
    x: 10 + Math.random() * 50,
    y: 10 + Math.random() * 50,
  })
  saveNotes(notes)
  renderNotes()
  stickyInput.value = ''
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

const snapV = (idx: number) => {
  if (idx < 0 || idx >= vSections.length || idx === vIdx || isAnimating) return
  isAnimating = true
  vIdx = idx
  applySlideClasses(vSections, vIdx)
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



