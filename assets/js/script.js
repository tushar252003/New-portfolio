/* ===========================================================
   MOBILE NAV TOGGLE
=========================================================== */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });
}

/* ===========================================================
   SMOOTH SCROLL FOR NAV LINKS
=========================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
      if (window.innerWidth <= 900) {
        navMenu.style.display = "none";
      }
    }
  });
});

/* ===========================================================
   AUTO SET RESUME FILE (DIRECT DOWNLOAD)
=========================================================== */
// ✅ Your resume file MUST be named exactly like this & placed in root folder
const resumeFile = "Tushar_Rathore_Resume_ST.pdf";
const resumeBtn = document.getElementById("download-resume");

if (resumeBtn) {
  resumeBtn.setAttribute("href", resumeFile);
  resumeBtn.setAttribute("download", resumeFile);
}

/* ===========================================================
   OPTIONAL: Scroll to Top Button (future use)
=========================================================== */
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) { ... }
// });

console.log("✅ Portfolio Loaded Successfully");
// ===== SKILLS ANIMATION ON SCROLL =====
const skillItems = document.querySelectorAll(".skills-grid li");

function revealSkills() {
  const triggerPoint = window.innerHeight * 0.85;

  skillItems.forEach((item, i) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < triggerPoint) {
      setTimeout(() => item.classList.add("show"), i * 80); // stagger effect
    }
  });
}

window.addEventListener("scroll", revealSkills);
window.addEventListener("load", revealSkills);
