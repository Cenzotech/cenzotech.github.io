import React, { useEffect, useMemo, useRef, useState } from 'react';

const tabs = [
  ['about', 'ABOUT.md'],
  ['work', 'WORK.ts'],
  ['experience', 'EXPERIENCE.json'],
  ['contact', 'CONTACT.sh'],
];

const experience = [
  { company: 'Holy Name University', role: 'System Developer I', years: '2019 — present', tone: 'sky' },
  { company: 'Freelance', role: 'Software Engineer', years: '2019 — present', tone: 'coral' },
  { company: 'Holy Name University', role: 'Part-time Instructor', years: '2021 — present', tone: 'lilac' },
];

const work = [
  ['01', 'Admissions & enrollment systems', 'Student information, application, and enrollment workflows'],
  ['02', 'POS & inventory', 'Point-of-sale and inventory management for local businesses'],
  ['03', 'REST integrations', 'SMS, payment services, Canvas LMS, and custom APIs'],
  ['04', 'Performance work', 'Query tuning, caching, queuing, and troubleshooting'],
];

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function ArrowIcon({ external = false }) {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d={external ? 'M6 14 14 6M8 6h6v6' : 'M4 10h11M11 6l4 4-4 4'} />
    </svg>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);
  const paletteRef = useRef(null);
  const paletteButtonRef = useRef(null);
  const commands = useMemo(() => [
    { id: 'about', label: 'ABOUT', detail: 'The person behind the code' },
    { id: 'work-details', label: 'WORK', detail: 'Systems used in the real world' },
    { id: 'experience', label: 'EXPERIENCE', detail: 'Seven-plus years of building' },
    { id: 'contact', label: 'CONTACT', detail: 'Let’s work together' },
  ].filter((item) => `${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase())), [query]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (event.key === 'Escape') {
        setPaletteOpen(false);
        requestAnimationFrame(() => paletteButtonRef.current?.focus());
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!paletteOpen) return undefined;
    searchRef.current?.focus();
    const trapFocus = (event) => {
      if (event.key !== 'Tab') return;
      const focusable = [...paletteRef.current.querySelectorAll('input, button, a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, [paletteOpen]);

  useEffect(() => {
    const sectionTabs = new Map([
      ['about', 'about'],
      ['work', 'work'],
      ['work-details', 'work'],
      ['about-details', 'about'],
      ['contact', 'contact'],
    ]);
    const sections = [...sectionTabs.keys()]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const enteredSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
      if (enteredSection) setActiveSection(sectionTabs.get(enteredSection.target.id));
    }, { rootMargin: '-35% 0px -55% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closePalette = () => {
    setPaletteOpen(false);
    requestAnimationFrame(() => paletteButtonRef.current?.focus());
  };

  const navigateTo = (id) => {
    setActiveSection(id === 'work-details' ? 'work' : id);
    goTo(id);
  };

  const runCommand = (id) => {
    closePalette();
    setQuery('');
    requestAnimationFrame(() => navigateTo(id));
  };

  return (
    <main className="app-shell">
      <header className="tabs r-top-tabs" aria-label="Portfolio sections">
        <nav>
          {tabs.map(([id, label]) => (
            <button
              className={activeSection === id ? 'tab active' : 'tab'}
              aria-current={activeSection === id ? 'page' : undefined}
              onClick={() => navigateTo(id)}
              key={id}
            >
              {label}
            </button>
          ))}
        </nav>
        <button ref={paletteButtonRef} className="command-hint" aria-label="Open navigation command palette" onClick={() => setPaletteOpen(true)}>
          <span aria-hidden="true">⌘ K</span> Navigate
        </button>
      </header>

      <section className="hero comp-frame" id="about" aria-labelledby="hero-title">
        <div className="line-rail" aria-hidden="true">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9</div>
        <h1 id="hero-title" className="r-hero-headline">Software should<br />make work<br />feel lighter.<span className="caret" aria-hidden="true" /></h1>
        <p className="hero-copy r-hero-body">
          I’m Vincent Hajiron, a software engineer with <em>seven-plus years</em> of experience building and maintaining web applications for education and local businesses. I care about practical solutions, clear communication, and software that helps people do meaningful work with less friction.
        </p>

        <aside className="experience-panel" id="experience" aria-labelledby="experience-title">
          <div className="r-experience-heading">
            <span>// CURRENT FILE</span>
            <strong id="experience-title">EXPERIENCE.json</strong>
          </div>
          <div className="experience-list r-experience-items">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.role}-${item.years}`}>
                <i className={item.tone} aria-hidden="true" />
                <div>
                  <h2>{item.company}</h2>
                  <p>{item.role}</p>
                  <time>{item.years}</time>
                </div>
              </article>
            ))}
          </div>
        </aside>

        <section className="work-preview" id="work" aria-labelledby="work-title">
          <header className="work-label r-work-heading">
            <span id="work-title">// SELECTED WORK</span>
            <span>WORK.ts</span>
          </header>
          <div className="work-list">
            {work.map(([number, title, description], index) => (
              <button className="work-row" key={number} onClick={() => navigateTo('work-details')}>
                <span className={`work-number n${index + 1}`}>{number}</span>
                <strong>{title}</strong>
                <span>{description}</span>
                <b aria-hidden="true"><ArrowIcon /></b>
              </button>
            ))}
          </div>
          <div className="hero-actions r-work-actions">
            <button className="primary-action" onClick={() => navigateTo('work-details')}>Read my work <ArrowIcon /></button>
            <a className="secondary-action" href="mailto:vincenthajiron@gmail.com">Email Vincent <ArrowIcon /></a>
          </div>
        </section>
      </section>

      <section className="detail-section work-details" id="work-details" aria-labelledby="work-details-title">
        <header className="section-heading">
          <h2 id="work-details-title">Work that earns its place.</h2>
          <p>I build and maintain software around real operations—where clarity, reliability, and the people using it matter every day.</p>
        </header>
        <div className="case-list">
          <article>
            <span className="case-type">University systems</span>
            <h3>Supporting the student journey</h3>
            <p>Admission, enrollment, scholarship, and student-service workflows built for academic and administrative teams.</p>
            <ul><li>PHP & CodeIgniter</li><li>MySQL</li><li>REST APIs</li></ul>
          </article>
          <article>
            <span className="case-type">Local business software</span>
            <h3>Turning daily operations into one clear flow</h3>
            <p>Point-of-sale, inventory, and order-management applications for restaurant, retail, and convenience-store operations.</p>
            <ul><li>Laravel</li><li>JavaScript</li><li>MariaDB</li></ul>
          </article>
          <article>
            <span className="case-type">Integrations & performance</span>
            <h3>Making existing systems work harder</h3>
            <p>SMS, online payments, and Canvas LMS integrations, plus query, caching, and queue improvements that keep applications responsive.</p>
            <ul><li>REST APIs</li><li>Query tuning</li><li>Queues</li></ul>
          </article>
        </div>
      </section>

      <section className="detail-section about-section" id="about-details" aria-labelledby="about-title">
        <header className="section-heading">
          <h2 id="about-title">I care about the work after “it works.”</h2>
        </header>
        <div className="about-grid">
          <p className="about-lead">Good software should make sense to the people who use it and the people who maintain it. I like asking the useful questions early, keeping the architecture practical, and staying close to the real workflow.</p>
          <div className="principles" aria-label="Working principles">
            <p><span>01</span><span><strong>Understand the actual problem.</strong> Requirements start with listening, not assumptions.</span></p>
            <p><span>02</span><span><strong>Choose the maintainable path.</strong> Clever is only useful when the next developer can work with it.</span></p>
            <p><span>03</span><span><strong>Teach what I know.</strong> Being an instructor keeps my communication clear and my fundamentals sharp.</span></p>
          </div>
        </div>
        <div className="stack-line" aria-label="Technical toolkit">
          {['PHP', 'Laravel', 'CodeIgniter', 'JavaScript', 'React', 'MySQL', 'MariaDB', 'REST APIs', 'Tailwind CSS', 'Docker'].map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Let’s make useful software.</h2>
        <p>If you’re hiring a software engineer or need help turning an operational problem into a practical web application, I’d like to hear about it.</p>
        <div className="contact-actions">
          <a className="primary-action" href="mailto:vincenthajiron@gmail.com">Email Vincent <ArrowIcon /></a>
          <a className="secondary-action" href="https://linkedin.com/in/vincent-hajiron/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon external /></a>
          <a className="text-action" href="/resume.pdf" download>Download résumé</a>
        </div>
      </section>

      {paletteOpen && (
        <div className="palette-backdrop" role="presentation" onMouseDown={closePalette}>
          <section ref={paletteRef} className="command-palette" role="dialog" aria-modal="true" aria-labelledby="palette-title" onMouseDown={(event) => event.stopPropagation()}>
            <header><h2 id="palette-title">Go to…</h2><span>ESC to close</span></header>
            <label>
              <span className="sr-only">Search portfolio sections</span>
              <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type a page or keyword…" />
            </label>
            <div className="command-list">
              {commands.length ? commands.map((command) => (
                <button key={command.id} onClick={() => runCommand(command.id)}>
                  <span>{command.label}<small>{command.detail}</small></span><b aria-hidden="true"><ArrowIcon /></b>
                </button>
              )) : <p className="empty-command">No matching section. Try “work” or “contact.”</p>}
            </div>
          </section>
        </div>
      )}

      <footer className="status-bar r-status-bar">
        <span>Vincent Hajiron</span><span>Software Engineer</span>
        <span className="status-location">Tagbilaran City, Bohol</span><span>UTF-8</span><span>LF</span><span>ABOUT.md</span>
      </footer>
    </main>
  );
}
