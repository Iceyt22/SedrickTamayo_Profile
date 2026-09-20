
// MOBILE NAVIGATION TOGGLE
// Nilalagyan ng toggle handler ang mobile menu para lumabas o matago kapag kinipil/in-click ang button.
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// CERTIFICATES MODAL / PAGE NAVIGATION
// Para sa pagbukas at pag-sara ng certificates view at pag-scroll sa taas ng page.
const app = document.getElementById('app');
const certificatesSection = document.getElementById('certificates');
const viewCertsBtn = document.getElementById('viewCertsBtn');
const returnBtn = document.getElementById('returnBtn');

// Function para buksan ang certificates section at i-scroll sa pinakataas
function openCertificates() {
  app.classList.add('certs-open');
  certificatesSection.classList.add('is-open');
  window.scrollTo(0, 0);
}

// Function para isara ang certificates section at bumalik sa main view
function closeCertificates() {
  app.classList.remove('certs-open');
  certificatesSection.classList.remove('is-open');
  window.scrollTo(0, 0);
}

// Paglalagay ng event listener sa mga button kung umiiral ang mga ito sa DOM
if (viewCertsBtn) viewCertsBtn.addEventListener('click', openCertificates);
if (returnBtn) returnBtn.addEventListener('click', closeCertificates);

// SCROLL SPY / ACTIVE NAV LINK OBSERVER
// Inaalam kung aling section ang kasalukuyang nakikita sa screen para i-highlight ang kaukulang link sa nav menu.
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main > section[id]');

// IntersectionObserver setup para automatic palitan ang active class ng nav links base sa scroll position
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const match = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

// Sinesimulang i-observe ang bawat section maliban sa certificates section
sections.forEach(section => {
  if (section.id !== 'certificates') observer.observe(section);
});