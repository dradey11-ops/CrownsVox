export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#" aria-label="CrownsVox home">
          <span className="mark">CV</span>
          <span>CROWNSVOX</span>
        </a>
        <div className="navlinks">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#about">About</a>
        </div>
        <a className="navcta" href="#waitlist">Join waitlist</a>
      </nav>

      <section className="hero">
        <div className="glow glowOne" /><div className="glow glowTwo" />
        <div className="eyebrow"><i /> AI-powered video studio</div>
        <h1>Turn any idea into a<br/><span>world in motion.</span></h1>
        <p className="lede">Create cinematic AI videos from text, images, and scripts. Voice, visuals, edits, and exports—all in one brilliant workspace.</p>
        <div className="actions"><a className="primary" href="#waitlist">Create your first video <b>↗</b></a><a className="secondary" href="#workflow">Watch the demo <b>▶</b></a></div>

        <div className="studio" id="workflow">
          <div className="panel">
            <div className="windowbar"><span/><span/><span/><em>New production</em></div>
            <div className="prompt"><small>PROMPT</small><p>A lone astronaut discovers a neon forest on a distant moon</p></div>
            <div className="timeline">
              {["01","02","03","04"].map((n,i)=><div className="scene" key={n}><span>{n}</span><div className={`planet p${i}`} /><small>{["Establishing","Discovery","The signal","Ascension"][i]}</small></div>)}
            </div>
            <div className="generate"><span>4 scenes · 16:9</span><button>Generate video ✦</button></div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div><small>01</small><h2>Script to screen</h2><p>Paste an idea or script. CrownsVox turns it into a structured, editable scene sequence.</p></div>
        <div><small>02</small><h2>Make it yours</h2><p>Direct characters, camera angles, style, motion, voice, music, and atmosphere.</p></div>
        <div><small>03</small><h2>Ready everywhere</h2><p>Resize and export for YouTube, TikTok, Instagram, presentations, and beyond.</p></div>
      </section>

      <section className="waitlist" id="waitlist">
        <div><div className="eyebrow"><i/> Limited early access</div><h2>Bring your vision<br/><span>to life.</span></h2></div>
        <form action="mailto:hello@crownsvox.com"><input aria-label="Email address" type="email" placeholder="Your email address"/><button>Join the waitlist →</button></form>
      </section>

      <footer id="about"><a className="brand" href="#"><span className="mark">CV</span><span>CROWNSVOX</span></a><p>AI search &amp; video creation</p><p>© 2026 CrownsVox</p></footer>
    </main>
  );
}
