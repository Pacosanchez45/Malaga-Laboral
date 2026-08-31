const profiles = {
  david: {
    name: "David Cansino Sánchez",
    role: "Socio & Abogado",
    photoClass: "team-photo-1",
    bio: "Especializado en derecho laboral, despidos y reclamaciones salariales. Dirige asuntos laborales con un enfoque práctico, riguroso y orientado a la protección de los intereses del cliente.",
    studies: [
      "Licenciado en Derecho.",
      "Título de Mediador Civil y Mercantil.",
      "Experto en Derecho Concursal Laboral.",
      "Experto Universitario en Derecho Concursal-UNIA.",
      "Experto Universitario en Derecho Societario-UNIA."
    ],
    areas: [
      "Derecho Laboral.",
      "Derecho Concursal.",
      "Derecho Mercantil."
    ],
    colegios: [
      "Colegio de Abogados de Málaga."
    ],
    experience:
      "Interviene en el estudio, preparación y dirección de procedimientos laborales, así como en el asesoramiento preventivo y la valoración jurídica de conflictos derivados de la relación de trabajo."
  },

  francisco: {
    name: "Francisco Sánchez Luque",
    role: "Socio & Abogado",
    photoClass: "team-photo-1",
    bio: "Especializado en derecho laboral, despidos y reclamaciones salariales. Dirige asuntos laborales con un enfoque práctico, riguroso y orientado a la protección de los intereses del cliente.",
    studies: [
      "Licenciado en Derecho.",
      "Licenciado en Filosofía y Letras.",
      "Agente de la Propiedad Inmobiliaria.",
      "Perito Calígrafo.",
      "Título de Mediador Civil y Mercantil.",
      "Experto en Derecho Concursal Laboral.",
      "Experto Universitario en Derecho Concursal-UNIA.",
      "Experto Universitario en Derecho Societario-UNIA."
    ],
    areas: [
      "Derecho Laboral.",
      "Derecho de Familia.",
      "Obligaciones y Contratos.",
      "Derecho de Sucesiones.",
      "Derecho Administrativo.",
      "Derecho Mercantil y Concursal."
    ],
    colegios: [
      "Colegio de Abogados de Málaga.",
      "Colegio de Agentes de la Propiedad de Málaga."
    ],
    experience:
      "Interviene en el estudio, preparación y dirección de procedimientos laborales, así como en el asesoramiento preventivo y la valoración jurídica de conflictos derivados de la relación de trabajo."
  },

  maria: {
    name: "María López García",
    role: "Abogada",
    photoClass: "team-photo-2",
    bio: "Especialista en despidos, reclamaciones salariales y extinciones contractuales, con una orientación cercana y clara en la relación con el cliente.",
    studies: [
      "Grado en Derecho",
      "Máster de acceso a la abogacía",
      "Formación complementaria en derecho del trabajo"
    ],
    areas: [
      "Despidos",
      "Finiquitos e indemnizaciones",
      "Reclamaciones de cantidad",
      "Condiciones laborales"
    ],
    experience:
      "Desarrolla su actividad en el análisis de conflictos laborales individuales, preparación documental y seguimiento de reclamaciones frente a empresas."
  },

  javier: {
    name: "Javier Romero Martín",
    role: "Abogado",
    photoClass: "team-photo-3",
    bio: "Especializado en prestaciones, incapacidad laboral y procedimientos ante la Seguridad Social.",
    studies: [
      "Grado en Derecho",
      "Máster de acceso a la abogacía",
      "Formación en Seguridad Social y prestaciones"
    ],
    areas: [
      "Incapacidad temporal",
      "Incapacidad permanente",
      "Prestaciones",
      "Reclamaciones ante el INSS"
    ],
    experience:
      "Presta asesoramiento en expedientes de Seguridad Social, reclamaciones administrativas previas y procedimientos judiciales vinculados a prestaciones."
  },

  carmen: {
    name: "Carmen Ruiz Fernández",
    role: "Abogada",
    photoClass: "team-photo-4",
    bio: "Especialista en conciliación, adaptación de jornada y defensa de derechos laborales.",
    studies: [
      "Grado en Derecho",
      "Máster de acceso a la abogacía",
      "Formación en igualdad y conciliación laboral"
    ],
    areas: [
      "Conciliación familiar y laboral",
      "Adaptación de jornada",
      "Reducción de jornada",
      "Tutela de derechos laborales"
    ],
    experience:
      "Asesora en conflictos relacionados con conciliación, permisos, derechos laborales y medidas de protección frente a decisiones empresariales."
  },

  lucia: {
    name: "Lucía Navarro Torres",
    role: "Abogada",
    photoClass: "team-photo-5",
    bio: "Dedicada al análisis de conflictos laborales, revisión contractual y defensa procesal.",
    studies: [
      "Grado en Derecho",
      "Máster de acceso a la abogacía",
      "Formación en contratación laboral"
    ],
    areas: [
      "Contratos de trabajo",
      "Modificaciones sustanciales",
      "Movilidad funcional",
      "Defensa procesal"
    ],
    experience:
      "Participa en el estudio de expedientes laborales, revisión de documentación contractual y preparación de estrategias de defensa."
  },

  ana: {
    name: "Ana Belén Martín Lorea",
    role: "Secretaría",
    photoClass: "team-photo-7",
    bio: "Responsable de la atención inicial, gestión documental y coordinación administrativa del despacho.",
    studies: [
      "Formación en administración",
      "Gestión documental",
      "Atención al cliente"
    ],
    areas: [
      "Atención inicial",
      "Gestión documental",
      "Organización de expedientes",
      "Coordinación administrativa"
    ],
    experience:
      "Facilita la comunicación con los clientes y colabora en la organización diaria de expedientes, citas, documentación y seguimiento interno."
  },

  elena: {
    name: "Elena Iglesias Martínez",
    role: "Secretaría",
    photoClass: "team-photo-8",
    bio: "Desarrolla funciones de apoyo administrativo, seguimiento de documentación y organización interna.",
    studies: [
      "Diplomada en Trabajo Social"
    ],
    areas: [
      "Apoyo administrativo",
      "Seguimiento documental",
      "Organización interna",
      "Atención al cliente"
    ],
    experience:
      "Colabora en la gestión diaria del despacho, control documental y apoyo en la tramitación y seguimiento de asuntos."
  }
};

const cards = document.querySelectorAll(".team-member-card");

const detailPhoto = document.getElementById("detailPhoto");
const detailName = document.getElementById("detailName");
const detailRole = document.getElementById("detailRole");
const detailBio = document.getElementById("detailBio");
const detailStudies = document.getElementById("detailStudies");
const detailAreas = document.getElementById("detailAreas");
const detailColegios = document.getElementById("detailColegios");
const detailExperience = document.getElementById("detailExperience");

function renderList(element, items) {
  element.innerHTML = "";

  (items || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function createMobileDetail(profile) {
  const studies = profile.studies.map((item) => `<li>${item}</li>`).join("");
  const areas = profile.areas.map((item) => `<li>${item}</li>`).join("");
  const colegios = (profile.colegios || []).map((item) => `<li>${item}</li>`).join("");

  return `
    <div class="team-member-detail-mobile open">
      <aside class="team-detail mobile-open-detail">
        <div class="team-detail-photo ${profile.photoClass}"></div>

        <div class="team-detail-content">
          <span class="team-detail-role">${profile.role}</span>
          <h2>${profile.name}</h2>

          <p>${profile.bio}</p>

          <div class="team-detail-block">
            <h3>Formación</h3>
            <ul>${studies}</ul>
          </div>

          <div class="team-detail-block">
            <h3>Áreas de trabajo</h3>
            <ul>${areas}</ul>
          </div>

          <div class="team-detail-block">
            <h3>Colegios Profesionales</h3>
            <ul>${colegios}</ul>
          </div>

          <div class="team-detail-block">
            <h3>Experiencia</h3>
            <p>${profile.experience}</p>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function updateDesktopProfile(profileKey) {
  const profile = profiles[profileKey];

  if (!profile) return;

  detailPhoto.className = `team-detail-photo ${profile.photoClass}`;
  detailName.textContent = profile.name;
  detailRole.textContent = profile.role;
  detailBio.textContent = profile.bio;
  detailExperience.textContent = profile.experience;

  renderList(detailStudies, profile.studies);
  renderList(detailAreas, profile.areas);
  renderList(detailColegios, profile.colegios || []);
}

function removeMobileDetails() {
  document.querySelectorAll(".team-member-detail-mobile").forEach((detail) => {
    detail.remove();
  });
}

function updateProfile(profileKey, selectedCard) {
  const profile = profiles[profileKey];

  if (!profile) return;

  const wasActive = selectedCard.classList.contains("active");

  cards.forEach((card) => {
    card.classList.remove("active");
  });

  removeMobileDetails();
  updateDesktopProfile(profileKey);

  if (window.innerWidth <= 760) {
    if (wasActive) return;

    selectedCard.classList.add("active");
    selectedCard.insertAdjacentHTML("afterend", createMobileDetail(profile));
    return;
  }

  selectedCard.classList.add("active");
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    updateProfile(card.dataset.profile, card);
  });
});

if (cards.length > 0) {
  updateDesktopProfile(cards[0].dataset.profile);

  if (window.innerWidth > 760) {
    cards[0].classList.add("active");
  }
}

window.addEventListener("resize", () => {
  removeMobileDetails();

  if (window.innerWidth > 760 && cards.length > 0) {
    const activeCard = document.querySelector(".team-member-card.active") || cards[0];
    updateDesktopProfile(activeCard.dataset.profile);
    activeCard.classList.add("active");
  }
});
