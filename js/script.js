const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.classList.toggle("open");
  });
}

const mobileLinks = document.querySelectorAll("#mobileMenu a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!mobileMenu || !menuToggle) return;

    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nombre = formData.get("nombre") || "";
    const telefono = formData.get("telefono") || "";
    const email = formData.get("email") || "";
    const asunto = formData.get("asunto") || "Consulta general";
    const mensaje = formData.get("mensaje") || "";

    const body = [
      `Nombre: ${nombre}`,
      `Telefono: ${telefono}`,
      `Email: ${email}`,
      `Asunto: ${asunto}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    const mailtoUrl = `mailto:info@malagalaboral.es?subject=${encodeURIComponent(
      `Consulta web - ${asunto}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}
