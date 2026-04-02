(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a={name:"Samuel Narh",avatar_url:"https://avatars.githubusercontent.com/u/117735193?v=4",bio:"Highly experienced Fullstack & Odoo Developer. I specialize in building custom ERP modules, optimizing business workflows, and developing modern dashboards.",html_url:"https://github.com/SamuelNarh"},l=[{name:"Odoo ERP Implementations",description:"Built custom Odoo modules for Dynamic Attendance (auto-clockout), specialized HR Payroll Pivot Views, and custom Sale Order constraints.",language:"Python / XML",stargazers_count:0,html_url:"https://github.com/SamuelNarh"},{name:"shopping-web",description:"An interactive, responsive shopping web application.",language:"JavaScript",stargazers_count:1,html_url:"https://github.com/SamuelNarh/shopping-web"},{name:"ecommerce",description:"Fully functional e-commerce backend and frontend implementation.",language:"JavaScript",stargazers_count:0,html_url:"https://github.com/SamuelNarh/ecommerce"}];document.querySelector("#app").innerHTML=`
  <div class="container">
    <header>
      <a href="#" class="logo gradient-text">&lt;${a.name.split(" ")[0]} /&gt;</a>
      <a href="${a.html_url}" target="_blank" class="btn btn-primary" style="background: rgba(255,255,255,0.1); box-shadow: none;">GitHub Profile</a>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content animate-slide-up" style="animation-delay: 0.1s">
          <p class="gradient-text" style="font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">Hello World, I'm</p>
          <h1>${a.name}</h1>
          <h3 style="font-size: 1.5rem; color: var(--accent-primary);">Odoo Expert & Fullstack Developer</h3>
          
          <p class="hero-bio">${a.bio}</p>
          
          <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="${a.html_url}" target="_blank" class="btn" style="border: 1px solid var(--accent-primary); color: white;">Connect on GitHub</a>
          </div>

          <div class="skills" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <span class="tech-tag" style="background: rgba(14, 165, 233, 0.2); border: 1px solid var(--accent-primary);">Odoo</span>
            <span class="tech-tag" style="background: rgba(14, 165, 233, 0.2); border: 1px solid var(--accent-primary);">Python / XML</span>
            <span class="tech-tag" style="background: rgba(14, 165, 233, 0.2); border: 1px solid var(--accent-primary);">PostgreSQL</span>
            <span class="tech-tag">React / Next.js</span>
            <span class="tech-tag">JavaScript ES6+</span>
          </div>
        </div>
        
        <div class="hero-visual animate-slide-up" style="animation-delay: 0.2s">
          <div class="avatar-wrapper">
            <img src="${a.avatar_url}" alt="${a.name}" class="avatar" />
          </div>
        </div>
      </section>

      <section id="projects" class="projects">
        <h2 class="animate-slide-up" style="animation-delay: 0.3s">Featured Projects</h2>
        <div class="projects-grid">
          ${l.map((r,s)=>`
            <div class="project-card animate-slide-up" style="animation-delay: ${.4+s*.1}s">
              <h3 class="project-title">${r.name.replace(/-/g," ")}</h3>
              <p class="project-desc">${r.description||"A fascinating software development project."}</p>
              
              <div class="project-meta">
                ${r.language?`<span class="tech-tag">${r.language}</span>`:"<span></span>"}
                <div class="project-links">
                  <a href="${r.html_url}" target="_blank">
                    <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; ${new Date().getFullYear()} ${a.name}. Designed & Built with ❤️</p>
    </footer>
  </div>
`;
