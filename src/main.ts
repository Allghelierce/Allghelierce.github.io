import './style.css'

const year = new Date().getFullYear()

const marqueeItems = [
  { label: 'plants. my room is a jungle' },
  { label: 'driving around for no reason' },
  { label: 'running late at night' },
  { label: 'going to the grocery store with my mom' },
  { label: 'walking my dog with my friend' },
  { label: 'cowboy bebop' },
  { label: 'terraria' },
  { label: 'chocolate milk' },
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
          data science @ <strong>ucsd '29</strong>,
          leaning hard into ml and software design.
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

      <div class="grid">
        <section class="meta" style="grid-column: 1 / -1; display: grid; grid-template-columns: 1.15fr 1fr; gap: 7rem;">
          <div class="block">
            <div class="label">— projects</div>
            <ul class="focus">
              <li>
                <span class="num">i.</span>
                <span><a href="https://pulp-omega.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-link">pulp</a> — a gamified note taking app for creatives</span>
              </li>
              <li>
                <span class="num">ii.</span>
                <span><a href="https://github.com/devhyper/nialink" target="_blank" rel="noopener noreferrer" class="project-link">nialink</a> — a discord bot that allows indexing an entire server</span>
              </li>
            </ul>

            <div class="block-note" style="margin-top: 3rem;">
              <div class="label">— leave me a note</div>
              <form class="note-form" id="noteForm">
                <div class="note-field">
                  <textarea class="note-input" id="noteInput" placeholder="say something..." rows="3"></textarea>
                  <button class="note-send" type="submit" aria-label="Send">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="block block-week">
            <div class="label">— this week</div>
            <ul class="focus">
              <li>
                <span class="num">i.</span>
                <span>heading home to see my dog</span>
              </li>
              <li>
                <span class="num">ii.</span>
                <span>doing missing assignments</span>
              </li>
              <li>
                <span class="num">iii.</span>
                <span>skipping class</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <footer>
        <span>© ${year} · v1</span>
      </footer>
      </div>

      <button class="page-scroll-right" id="scrollRight" type="button" aria-label="Go to next slide">
        <span>go this way</span>
        <span class="scroll-arrow-right">→</span>
      </button>
    </div>

    <div class="page page-3" id="page3">
      <div class="gallery-header label">— gallery</div>
      <div class="photo-gallery">
        <img src="/pictures/20260315_180427.jpg" class="gallery-photo" alt="Photo" loading="lazy" />
        <img src="/pictures/20260406_174410.jpg" class="gallery-photo" alt="Photo" loading="lazy" />
        <img src="/pictures/image4.png" class="gallery-photo" alt="Photo" loading="lazy" />
        <img src="/pictures/d78a3289-7b4b-4e57-b001-c7ba5eb35345.jpg" class="gallery-photo" alt="Photo" loading="lazy" />
        <img src="/pictures/20260119_180623.jpg" class="gallery-photo" alt="Photo" loading="lazy" />
      </div>
      <div class="gallery-end">the end</div>
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

// ============ Note form ============
const noteForm = document.getElementById('noteForm') as HTMLFormElement
const noteInput = document.getElementById('noteInput') as HTMLTextAreaElement
noteForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const msg = noteInput.value.trim()
  if (!msg) return
  window.location.href = `mailto:pvt.trisn@gmail.com?subject=${encodeURIComponent('Note from your site')}&body=${encodeURIComponent(msg)}`
})

// ============ Snap navigation ============
const hero = document.getElementById('hero')!
const content = document.getElementById('content')!
const page2 = document.getElementById('page2')!
const page3 = document.getElementById('page3')!
const scrollHint = document.querySelector<HTMLButtonElement>('.hero-scroll')!
const scrollRight = document.getElementById('scrollRight')!

// vertical sections: 0=hero, 1=content
const vSections: HTMLElement[] = [hero, content]
let vIdx = 0

// horizontal pages within content: 0=page2, 1=page3
const hPages: HTMLElement[] = [page2, page3]
let hIdx = 0

let isAnimating = false

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

const smoothScroll = (el: HTMLElement, axis: 'x' | 'y', target: number, duration: number, onDone?: () => void) => {
  const start = axis === 'x' ? el.scrollLeft : el.scrollTop
  const distance = target - start
  const startTime = performance.now()

  const origSnap = el.style.scrollSnapType
  el.style.scrollSnapType = 'none'

  let finished = false
  const finish = () => {
    if (finished) return
    finished = true
    el.style.scrollSnapType = origSnap
    isAnimating = false
    document.body.style.pointerEvents = ''
    onDone?.()
  }

  const safety = setTimeout(finish, duration + 200)

  const step = (now: number) => {
    if (finished) return
    const progress = Math.min((now - startTime) / duration, 1)
    const value = start + distance * easeOutQuart(progress)
    if (axis === 'x') el.scrollLeft = value
    else el.scrollTop = value
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      clearTimeout(safety)
      finish()
    }
  }
  requestAnimationFrame(step)
}

const snapV = (idx: number) => {
  if (idx < 0 || idx >= vSections.length || isAnimating) return
  isAnimating = true
  document.body.style.pointerEvents = 'none'
  vIdx = idx
  const target = vSections[idx].offsetTop
  smoothScroll(document.documentElement, 'y', target, 700, () => {
    if (idx === 0) {
      hIdx = 0
      content.scrollLeft = 0
    }
  })
}

const snapH = (idx: number) => {
  if (idx < 0 || idx >= hPages.length || isAnimating) return
  isAnimating = true
  document.body.style.pointerEvents = 'none'
  hIdx = idx
  smoothScroll(content, 'x', idx * window.innerWidth, 700)
}

const vObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        const idx = vSections.indexOf(entry.target as HTMLElement)
        if (idx !== -1) {
          vIdx = idx
          if (idx === 0 && hIdx !== 0) {
            hIdx = 0
            content.scrollTo({ left: 0 })
          }
        }
      }
    })
  },
  { threshold: [0.55] }
)
vSections.forEach((s) => vObserver.observe(s))

const hObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        const idx = hPages.indexOf(entry.target as HTMLElement)
        if (idx !== -1) {
          hIdx = idx
        }
      }
    })
  },
  { threshold: [0.55], root: content }
)
hPages.forEach((p) => hObserver.observe(p))

scrollHint.addEventListener('click', () => snapV(vIdx + 1))
scrollRight.addEventListener('click', () => snapH(hIdx + 1))

window.addEventListener('keydown', (e) => {
  const tag = (e.target as HTMLElement).tagName
  if (tag === 'TEXTAREA' || tag === 'INPUT') return
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    if (vIdx === 0) { e.preventDefault(); snapV(1) }
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault()
    if (hIdx > 0) snapH(0)
    else snapV(vIdx - 1)
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
    if (Math.abs(e.deltaY) < 6) return
    const dir = e.deltaY > 0 ? 1 : -1
    e.preventDefault()
    let navigated = false
    if (vIdx === 0) {
      if (dir > 0) { snapV(1); navigated = true }
    } else {
      if (dir > 0 && hIdx < hPages.length - 1) { snapH(hIdx + 1); navigated = true }
      else if (dir < 0 && hIdx > 0) { snapH(hIdx - 1); navigated = true }
      else if (dir < 0 && hIdx === 0) { snapV(0); navigated = true }
    }
    if (navigated) {
      wheelCooldown = true
      setTimeout(() => { wheelCooldown = false }, 1100)
    }
  },
  { passive: false }
)

window.addEventListener('resize', () => {
  if (hIdx > 0) content.scrollLeft = hIdx * window.innerWidth
})

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
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (vIdx === 1) snapH(hIdx + (dx > 0 ? 1 : -1))
  } else if (Math.abs(dy) > 40) {
    if (dy > 0) { if (vIdx === 0) snapV(1) }
    else { if (hIdx > 0) snapH(0); else snapV(0) }
  }
}, { passive: true })



