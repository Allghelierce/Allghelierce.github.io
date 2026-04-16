import './style.css'

const year = new Date().getFullYear()

const marqueeItems = [
  { label: 'Plants. my room is a jungle' },
  { label: 'Driving around for no reason' },
  { label: 'Running late at night' },
  { label: 'Going to the grocery store with my mom' },
  { label: 'Walking my dog with my friend' },
  { label: 'Cowboy Bebop' },
  { label: 'Terraria' },
  { label: 'Chocolate milk' },
]

const renderMarqueeItems = () =>
  marqueeItems
    .map(
      (_, i) => `
      <div class="marquee-item" data-type-idx="${i}">
        <span class="label-text"></span>
        <span class="type-cursor">|</span>
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
      </div>
      <aside class="things-i-like">
        <div class="label">— things i like</div>
        <div class="marquee-track">
          ${renderMarqueeItems()}
        </div>
      </aside>
    </div>
    <button class="hero-scroll" type="button" aria-label="Scroll to continue">
      <span>scroll or arrows to continue</span>
      <span class="scroll-arrow">↓</span>
    </button>
  </section>

  <section class="content snap" id="content">
    <div class="page" id="page2">
      <div class="page-inner">

      <main class="grid">
        <section class="intro">
          <div class="label">i go by:</div>
          <h2 class="name">Tristan</h2>
          <p class="bio">
            Programmer, runner, surfer, reader. Data Science @ <strong>UCSD '29</strong>,
            leaning hard into ML and software design. I go by my middle name Tristan because
            there's too many Cesar's in the family.
          </p>
          <div class="stack">python · typescript · javascript · flutter</div>

          <div class="page-socials-section">
            <div class="label">my stuff</div>
            <div class="page-socials">
            <a href="https://github.com/Allghelierce" target="_blank" rel="noopener" aria-label="GitHub" class="social-link github">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/cesar-villegas-b49061314" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:pvt.trisn@gmail.com" aria-label="Email" class="social-link email">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            </div>
          </div>
        </section>

        <section class="meta">
          <div class="block">
            <div class="label">01 — projects</div>
            <ul class="focus">
              <li>
                <span class="num">i.</span>
                <span><a href="https://pulp-omega.vercel.app/" target="_blank" rel="noopener" class="project-link">pulp</a> — a minimalist reading tracker and book discovery app.</span>
              </li>
              <li>
                <span class="num">ii.</span>
                <span><a href="https://github.com/devhyper/nialink" target="_blank" rel="noopener" class="project-link">nialink</a> — a link-sharing platform for quick and easy collaboration.</span>
              </li>
            </ul>
          </div>

          <div class="block block-week">
            <div class="label">02 — this week</div>
            <ul class="week">
              <li>heading home to see my dog</li>
              <li>doing missing assignments</li>
              <li>skipping class</li>
            </ul>
          </div>

          <div class="block block-note">
            <div class="label">03 — leave me a note</div>
            <form class="note-form" id="noteForm">
              <div class="note-field">
                <textarea class="note-input" id="noteInput" placeholder="say something..." rows="3"></textarea>
                <button class="note-send" type="submit" aria-label="Send">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

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
        <img src="/pictures/20251211_210120.jpg" class="gallery-photo" />
        <img src="/pictures/20260315_180427.jpg" class="gallery-photo" />
        <img src="/pictures/20260406_174410.jpg" class="gallery-photo" />
        <img src="/pictures/2539835899294480291.jpg" class="gallery-photo" />
        <img src="/pictures/image4.png" class="gallery-photo" />
        <img src="/pictures/d78a3289-7b4b-4e57-b001-c7ba5eb35345.jpg" class="gallery-photo" />
        <img src="/pictures/20260119_180623.jpg" class="gallery-photo" />
      </div>
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

// ============ Typewriter for marquee items ============
const typewriterItems = Array.from(document.querySelectorAll<HTMLElement>('.marquee-item'))

const typeItemChars = (el: HTMLElement, text: string, charIdx: number): Promise<void> => {
  return new Promise((resolve) => {
    const label = el.querySelector('.label-text')!
    const cursor = el.querySelector('.type-cursor') as HTMLElement
    const step = () => {
      if (charIdx <= text.length) {
        label.textContent = text.slice(0, charIdx)
        cursor.classList.add('typing')
        charIdx++
        setTimeout(step, 28 + Math.random() * 35)
      } else {
        cursor.classList.remove('typing')
        resolve()
      }
    }
    step()
  })
}

const runTypewriter = async () => {
  await new Promise((r) => setTimeout(r, 900))
  for (let i = 0; i < typewriterItems.length; i++) {
    await typeItemChars(typewriterItems[i], marqueeItems[i].label, 0)
    await new Promise((r) => setTimeout(r, 120))
  }
}

if (prefersReducedMotion) {
  typewriterItems.forEach((el, i) => {
    el.querySelector('.label-text')!.textContent = marqueeItems[i].label
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
  window.location.href = `mailto:pvt.trisn@gmail.com?subject=Note from your site&body=${encodeURIComponent(msg)}`
  noteInput.value = ''
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

const snapV = (idx: number) => {
  if (idx < 0 || idx >= vSections.length || isAnimating) return
  isAnimating = true
  vIdx = idx
  vSections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' })
  setTimeout(() => { isAnimating = false }, 850)
}

const snapH = (idx: number) => {
  if (idx < 0 || idx >= hPages.length || isAnimating) return
  isAnimating = true
  hIdx = idx
  content.scrollTo({ left: idx * window.innerWidth, behavior: 'smooth' })
  setTimeout(() => { isAnimating = false }, 850)
}

const vObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        const idx = vSections.indexOf(entry.target as HTMLElement)
        if (idx !== -1) vIdx = idx
      }
    })
  },
  { threshold: [0.55] }
)
vSections.forEach((s) => vObserver.observe(s))

scrollHint.addEventListener('click', () => snapV(vIdx + 1))
scrollRight.addEventListener('click', () => snapH(hIdx + 1))

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault()
    if (vIdx === 0) snapV(1)
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
    wheelCooldown = true
    if (vIdx === 0) {
      if (dir > 0) snapV(1)
    } else {
      if (dir > 0 && hIdx < hPages.length - 1) snapH(hIdx + 1)
      else if (dir < 0 && hIdx > 0) snapH(hIdx - 1)
      else if (dir < 0 && hIdx === 0) snapV(0)
    }
    setTimeout(() => { wheelCooldown = false }, 1100)
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
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (vIdx === 1) snapH(hIdx + (dx > 0 ? 1 : -1))
  } else if (Math.abs(dy) > 40) {
    if (dy > 0) { if (vIdx === 0) snapV(1) }
    else { if (hIdx > 0) snapH(0); else snapV(0) }
  }
}, { passive: true })
