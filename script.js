
document.addEventListener("DOMContentLoaded", function () {
  navigate('home'); // Ativa home ao carregar
});

function navigate(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}
