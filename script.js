function navigate(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}
