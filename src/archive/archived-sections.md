# Archived site sections

Removed from the live site on 2026-09-30 but kept here for easy restoration.

What was removed:
- **Twitter link** (sidebar-bottom)
- **About Me page** (`#page3` — the "this week" + "interests" horizontal slide, plus the
  "About Me" right-scroll button, and the THIS WEEK / INTERESTS sidebar links)
- **Posts section** (`#posts` vertical slide + POSTS sidebar link)

To restore: paste the HTML back into `src/main.ts`'s template in the marked spots, re-add
the sidebar links, and restore the JS navigation wiring noted at the bottom.

---

## Sidebar links (in `.sidebar-top`, after the PROJECTS link)

```html
      <a href="#" class="sidebar-link" data-nav="week">THIS WEEK</a>
      <a href="#" class="sidebar-link" data-nav="interests">INTERESTS</a>
      <a href="#" class="sidebar-link" data-nav="posts">POSTS</a>
```

## Twitter link (in `.sidebar-bottom`, after LINKEDIN)

```html
      <a href="https://x.com/Allghelierce" target="_blank" rel="noopener noreferrer" class="sidebar-ext">TWITTER ↗</a>
```

## "About Me" right-scroll button (inside `#page2`, after the closing `</div>` of `.page-inner`)

```html
        <div class="page-scroll-container page-scroll-right">
          <div class="page-next-label">About Me</div>
          <button class="page-scroll" type="button" aria-label="Scroll to about me">
            <span class="scroll-arrow">→</span>
          </button>
        </div>
```

## About Me page (`#page3`, sibling of `#page2` inside `.content`)

```html
      <div class="page" id="page3">
        <div class="page-inner">
          <div class="page3-layout">
            <div class="page3-week">
              <div class="label">— this week</div>
              <ul class="week-list">
                <li class="week-item">recording demos</li>
                <li class="week-item">maybe launching pulp</li>
                <li class="week-item">going to the casino</li>
                <li class="week-item">skipping class</li>
              </ul>
            </div>
            <div class="page3-interests">
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
```

## Posts section (`#posts`, sibling of `.content` inside `.main-content`)

```html
    <section class="posts-section snap" id="posts">
      <div class="page-inner">
        <div class="label">— posts</div>
        <p class="posts-placeholder">coming soon.</p>
      </div>
    </section>
```

---

## JS navigation wiring to restore (`src/main.ts`)

When these sections come back, re-add the DOM refs and array entries:

```ts
const page3 = document.getElementById('page3')!
const posts = document.getElementById('posts')!

const vSections: HTMLElement[] = [hero, content, posts]   // add `posts`
const hPages: HTMLElement[] = [page2, page3]              // add `page3`
```

Restore in `updateSidebarActive()`:

```ts
      (vIdx === 1 && hIdx === 1 && (nav === 'week' || nav === 'interests')) ||
      (vIdx === 2 && nav === 'posts')
```

Restore in the sidebar click handler (`nav === 'posts'` branch + the week/interests `else`):

```ts
    } else if (nav === 'posts') {
      snapV(2)
    } else {
      if (vIdx === 0) { snapV(1); setTimeout(() => snapH(1), 600) }
      else snapH(1)
    }
```

The `animatePage3In` / `animatePage3Out` helpers and the horizontal-nav paths
(`snapH`, ArrowLeft/Right, horizontal wheel/touch, `.page-scroll` click) are still
present in `main.ts` — they just go unused while `hPages` has a single entry.
