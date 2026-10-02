const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".news-card");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");

    const filtro = btn.dataset.filter;

    cards.forEach(card => {
      if (filtro === "all" || card.dataset.category === filtro) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

const titulares = [
  "Información nacional y regional en actualización permanente",
  "Santa Marta: el sector turístico reporta cambios en el itinerario de un crucero",
  "Valledupar: partido Alianza–Junior tuvo una interrupción por incidentes en tribuna"
];

let i = 0;
const breaking = document.getElementById("breakingText");

if (breaking) {
  setInterval(() => {
    i = (i + 1) % titulares.length;
    breaking.textContent = titulares[i];
  }, 5000);
}

document.getElementById("newsletterForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Gracias. El formulario está listo para conectarlo a un servicio de correo.");
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("El formulario está listo. Para recibir mensajes directamente debemos conectarlo a un servicio de formularios o correo.");
});
