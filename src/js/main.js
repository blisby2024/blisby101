// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("is-open"));
    if (!isOpen) item.classList.add("is-open");
  });
});

// Testimonial carousel
const track = document.querySelector(".testimonial-track");
if (track) {
  const slides = track.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".testimonial-dot");
  const prevBtn = document.querySelector(".testimonial-prev");
  const nextBtn = document.querySelector(".testimonial-next");
  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("is-active", di === index));
  }

  prevBtn?.addEventListener("click", () => showSlide(index - 1));
  nextBtn?.addEventListener("click", () => showSlide(index + 1));
  dots.forEach((dot, di) => dot.addEventListener("click", () => showSlide(di)));

  showSlide(0);
}
