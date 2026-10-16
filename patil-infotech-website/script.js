const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-course]').forEach(link => link.addEventListener('click', () => {
  const select = document.getElementById('courseSelect');
  if (select) select.value = link.dataset.course;
}));

document.getElementById('enquiryForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  const phone = document.getElementById('studentPhone').value.trim();
  const course = document.getElementById('courseSelect').value;
  const message = `Hello Patil Infotech,%0A%0AI would like to enquire about your course.%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(phone)}%0ACourse: ${encodeURIComponent(course)}%0A%0APlease share the details.`;
  window.open(`https://wa.me/918956620412?text=${message}`, '_blank', 'noopener');
});
