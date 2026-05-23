// ── Change this to your Render URL after deployment ──
const API = 'http://localhost:3000';

// ── Load Profile ─────────────────────────────────────
async function loadProfile() {
  try {
    const res = await fetch(`${API}/api/profile`);
    const data = await res.json();
    document.getElementById('name').textContent = data.name;
    document.getElementById('role').textContent = data.role;
    document.getElementById('org').textContent = data.organization;
    document.getElementById('bio').textContent = data.bio;
  } catch(e) { console.error('Profile error:', e); }
}

// ── Load Skills ──────────────────────────────────────
async function loadSkills() {
  try {
    const res = await fetch(`${API}/api/skills`);
    const data = await res.json();
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = data.skills.map(skill => `
      <div class="skill-card">${skill}</div>
    `).join('');
  } catch(e) { console.error('Skills error:', e); }
}

// ── Load Projects ────────────────────────────────────
async function loadProjects() {
  try {
    const res = await fetch(`${API}/api/projects`);
    const data = await res.json();
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = data.projects.map(p => `
      <div class="project-card">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    `).join('');
  } catch(e) { console.error('Projects error:', e); }
}

// ── Load Contact ─────────────────────────────────────
async function loadContact() {
  try {
    const res = await fetch(`${API}/api/contact`);
    const data = await res.json();
    document.getElementById('phone').textContent = data.phone;
    document.getElementById('email').textContent = data.email;
  } catch(e) { console.error('Contact error:', e); }
}

// ── Run All ───────────────────────────────────────────
loadProfile();
loadSkills();
loadProjects();
loadContact();