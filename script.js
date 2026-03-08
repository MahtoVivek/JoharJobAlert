const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const darkModeToggle = document.getElementById('darkModeToggle');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

const applyDarkMode = (enabled) => {
  document.body.classList.toggle('dark-mode', enabled);
  if (darkModeToggle) {
    darkModeToggle.textContent = enabled ? '☀️' : '🌙';
  }
};

if (darkModeToggle) {
  const saved = localStorage.getItem('johar-dark-mode') === 'true';
  applyDarkMode(saved);
  darkModeToggle.addEventListener('click', () => {
    const enabled = !document.body.classList.contains('dark-mode');
    localStorage.setItem('johar-dark-mode', enabled);
    applyDarkMode(enabled);
  });
}

const tocList = document.getElementById('tocList');
if (tocList) {
  const headings = document.querySelectorAll('.post-content h2');
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `section-${index + 1}`;
    }
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });
}
