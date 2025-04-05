
document.addEventListener("DOMContentLoaded", function () {
  navigate('home');
});

function navigate(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}
