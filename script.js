const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const yearEl = document.querySelector("#year");
const form = document.querySelector("#contactForm");
const note = document.querySelector("#formNote");

yearEl.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Front-end only "submit" (no backend). Shows a friendly message.
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();

  note.textContent = `Thanks${name ? `, ${name}` : ""}! This form is front-end only right now.`;
  form.reset();
});
