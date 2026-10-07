import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, Github, Linkedin, Mail, MoveUpRight, Sparkles } from 'lucide-react'
import { projects } from './data/projects'

const skills = ['React', 'TypeScript', 'JavaScript', 'Three.js', 'Tailwind CSS', 'AI / ML', 'Python', 'Git / GitHub']

function App() {
  const [loaded, setLoaded] = useState(false)
  const [activeSkill, setActiveSkill] = useState('React')
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false })
  const [sent, setSent] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 650)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY, active: false })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const mail = (subject = 'Project enquiry') => {
    window.location.href = `mailto:vangurijashuva@gmail.com?subject=${encodeURIComponent(subject)}`
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Portfolio enquiry from ${data.get('name') || 'a visitor'}`
    const body = `${data.get('message') || ''}\n\nFrom: ${data.get('name') || ''}\nEmail: ${data.get('email') || ''}`
    window.location.href = `mailto:vangurijashuva@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className={`site ${loaded ? 'is-loaded' : ''}`}>
      <div className="loader" aria-hidden="true">
        <div className="loader-inner">
          <span>JV</span>
          <div className="loader-line"><i /></div>
          <small>Loading portfolio</small>
        </div>
      </div>

      <div className={`cursor ${cursor.active ? 'is-active' : ''}`} style={{ left: cursor.x, top: cursor.y }} />

      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Jashuva home"><span>JV</span><b>JASHUVA</b></a>
        <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Stack', 'Projects', 'Journey', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <button onClick={() => mail('Let’s build something')}>Start a conversation <ArrowUpRight size={15} /></button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <div className="kicker"><span /> Frontend Developer / AI Interface Builder</div>
            <h1>Interfaces with<br /><em>presence.</em></h1>
            <p>I design and build polished digital products where strong frontend foundations meet AI, motion and thoughtful interaction.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">View selected work <MoveUpRight size={17} /></a>
              <button className="button button-light" onClick={() => mail('Hello Jashuva')}>Get in touch <Mail size={16} /></button>
            </div>
            <div className="hero-meta"><span><i /> Available for selected opportunities</span><span>India · Open to remote</span></div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-frame">
              <img src="/assets/hero-profile.png" alt="Jashuva Vanguri in a black suit" />
              <div className="portrait-caption"><span>JASHUVA VANGURI</span><span>FRONTEND / AI</span></div>
            </div>
            <div className="hero-index">01 / 05</div>
            <div className="hero-side-note">CRAFTED FOR THE WEB — 2026</div>
          </div>
        </section>

        <section id="about" className="section-frame about section-space">
          <div className="section-label">01 — About</div>
          <div className="about-grid">
            <h2>Clean engineering.<br /><span>Distinctive direction.</span></h2>
            <div>
              <p className="lead">I’m Jashuva, a frontend developer focused on turning ideas into fast, responsive and memorable interfaces.</p>
              <p>I care about the details people feel before they consciously notice them: hierarchy, typography, spacing, transitions, responsive behavior and the confidence of a well-finished product.</p>
              <a className="text-link" href="#contact">Let’s make the next one <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="stack" className="section-frame section-space stack-section">
          <div className="section-label">02 — Stack</div>
          <div className="stack-head"><h2>The tools behind<br /><span>the interface.</span></h2><p>Strong fundamentals first. AI and advanced interaction on top.</p></div>
          <div className="skill-board">
            <div className="skill-list">
              {skills.map((skill, i) => (
                <button key={skill} className={activeSkill === skill ? 'skill active' : 'skill'} onMouseEnter={() => setActiveSkill(skill)} onFocus={() => setActiveSkill(skill)}>
                  <span>0{i + 1}</span>{skill}<ArrowUpRight size={15} />
                </button>
              ))}
            </div>
            <div className="skill-detail">
              <span className="detail-index">CURRENT FOCUS</span>
              <strong>{activeSkill}</strong>
              <p>{activeSkill === 'Three.js' ? 'Building depth, 3D scenes and spatial product experiences.' : activeSkill === 'AI / ML' ? 'Using AI as a product capability, not a visual gimmick.' : `Using ${activeSkill} to create reliable, production-minded frontend experiences.`}</p>
              <div className="detail-rule"><i /></div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-frame section-space projects-section">
          <div className="section-label">03 — Selected projects</div>
          <div className="projects-intro"><h2>Work that earns<br /><span>the second look.</span></h2><p>Two recent builds — one conversion-focused, one spatial and experimental.</p></div>
          <div className="project-stack">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} reverse={index % 2 === 1} />)}
          </div>
        </section>

        <section id="journey" className="section-frame section-space journey-section">
          <div className="section-label">04 — Journey</div>
          <div className="journey-grid">
            <h2>Learn fast.<br /><span>Build faster.</span></h2>
            <div className="timeline">
              {[
                ['FOUNDATIONS', 'HTML, CSS and JavaScript — the fundamentals that make everything else easier.'],
                ['FRONTEND', 'React, responsive systems and component-driven product development.'],
                ['BUILDING', 'Shipping real projects instead of collecting tutorials.'],
                ['NOW', 'AI interfaces, 3D experiences and stronger product-level frontend craft.'],
              ].map(([label, text], i) => <div className="timeline-item" key={label}><span>{String(i + 1).padStart(2, '0')}</span><div><small>{label}</small><p>{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="section-frame contact section-space">
          <div className="section-label">05 — Contact</div>
          <div className="contact-grid">
            <div><h2>Have a good<br /><span>problem?</span></h2><p>Tell me what you’re building. If the idea is ambitious, I’m interested.</p><div className="contact-links"><a href="mailto:vangurijashuva@gmail.com"><Mail size={16} /> Email</a><a href="https://www.linkedin.com/in/jashuvavanguri/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://github.com/Jashuvav" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              {sent && <div className="success"><Check size={15} /> Email draft opened — finish by pressing Send.</div>}
              <label><span>Name</span><input required name="name" autoComplete="name" placeholder="Your name" /></label>
              <label><span>Email</span><input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label>
              <label><span>Message</span><textarea required name="message" placeholder="Tell me about the project…" rows={5} /></label>
              <button className="button button-dark submit" type="submit">Send message <ArrowUpRight size={16} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="section-frame footer"><span>© 2026 Jashuva Vanguri</span><span>Built with React · TypeScript · Vite</span><a href="#top"><Sparkles size={14} /> Back to top</a></footer>
    </div>
  )
}

function ProjectCard({ project, reverse }: { project: typeof projects[number]; reverse: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState('rotateX(0deg) rotateY(0deg)')
  const onMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setTilt(`rotateX(${y * -5}deg) rotateY(${x * 6}deg)`)
  }
  return (
    <article className={`project-card ${reverse ? 'reverse' : ''}`}>
      <div className="project-copy">
        <span className="project-number">{project.number} / {project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={16} /></a>
      </div>
      <a className="project-visual" href={project.url} target="_blank" rel="noreferrer" ref={ref} onMouseMove={onMove} onMouseLeave={() => setTilt('rotateX(0deg) rotateY(0deg)')} style={{ transform: tilt }}>
        <div className="browser-top"><span /><span /><span /><small>{project.url.replace('https://', '')}</small></div>
        <img src={project.image} alt={`${project.title} project preview`} />
        <div className="visual-mark">VIEW PROJECT <ArrowUpRight size={15} /></div>
      </a>
    </article>
  )
}

export default App
