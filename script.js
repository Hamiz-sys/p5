document.addEventListener("DOMContentLoaded", () => {
  // PROJECT FILTERING
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      projects.forEach(project => {
        if (filter === "all") {
          project.style.display = "flex";
          setTimeout(() => project.classList.add("visible"), 10);
        } else {
          const techs = project.dataset.tech.split(" ");
          if (techs.includes(filter)) {
            project.style.display = "flex";
            setTimeout(() => project.classList.add("visible"), 10);
          } else {
            project.classList.remove("visible");
            setTimeout(() => (project.style.display = "none"), 300);
          }
        }
      });
    });
  });

  // FADE IN PROJECTS ON SCROLL
  const projectsArr = Array.from(projects);
  function fadeInOnScroll() {
    const scrollY = window.scrollY + window.innerHeight;
    projectsArr.forEach(project => {
      if (project.offsetTop < scrollY - 100) {
        project.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();

  // CONTACT FORM SUBMISSION (dummy)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.getElementById("formStatus");
      status.textContent = "Sending...";
      setTimeout(() => {
        status.textContent = "Thanks for reaching out! I'll get back to you soon.";
        contactForm.reset();
      }, 1500);
    });
  }
});
